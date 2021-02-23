const Gallery = require("../../models/gallery");
const slugify = require("slugify");
const shortid = require("shortid");

function createGallery(galleryImages) {
  const galleryList = [];
  let gallery = galleryImages;

  for (let gal of gallery) {
    galleryList.push({
      _id: gal._id,
      name: gal.name,
      slug: gal.slug,
      img: gal.galleryImage,
    });
  }

  return galleryList;
}

//CREATE
exports.galleryUploadImage = (req, res) => {
  const galleryObj = {
    name: req.body.name,
    slug: `${slugify(req.body.name)}-${shortid.generate()}`,
    createdBy: req.user._id,
  };

  if (req.file) {
    galleryObj.galleryImage = process.env.API + "/public/" + req.file.filename;
  }

  const gallery = new Gallery(galleryObj);
  gallery.save((error, gallery) => {
    if (error) return res.status(400).json({ error });
    if (gallery) {
      return res.status(201).json({ gallery });
    }
  });
};
//GET
exports.galleryGetImages = (req, res) => {
  Gallery.find({}).exec((error, galleryImages) => {
    if (error) return res.status(400).json({ error });
    if (galleryImages) {
      const galleryList = createGallery(galleryImages);
      res.status(200).json({ galleryList });
    }
  });
};
//DELETE
exports.galleryDeleteImage = async (req, res) => {
  const { productId } = req.body.payload;
  if (productId) {
    Gallery.deleteOne({ _id: productId }).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(400).json({ error: "Params-image id required" });
  }
};
