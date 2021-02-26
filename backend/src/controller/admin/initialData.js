const Category = require("../../models/category");
const Product = require("../../models/product");
const Order = require("../../models/order");
const UserAddress = require("../../models/address");
const Gallery = require("../../models/gallery");
function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      type: cate.type,
      children: createCategories(categories, cate._id),
    });
  }

  return categoryList;
}

exports.initialData = async (req, res) => {
  const categories = await Category.find({}).exec();
  const gallery = await Gallery.find({}).exec();
  const products = await Product.find({ createdBy: req.user._id })
    .select("_id name price quantity slug description productPictures category")
    .populate({ path: "category", select: "_id name" })
    .exec();

  const orders = await Order.find({})
    .populate("items.productId", "name")
    .lean()
    .exec();
  const address = await UserAddress.find().exec();

  res.status(200).json({
    categories: createCategories(categories),
    products,
    orders,
    address,
    gallery,
  });
};

// (error, orders) => {
//   if (error) return error;

//   if (orders) {
//     UserAddress.find({}).exec((error, address) => {
//       if (error) return error;
//       orders.address = address?.find(
//         (adr) => adr._id?.toString() == orders.addressId?.toString()
//       );

//       return orders;
//     });
//   }
// };