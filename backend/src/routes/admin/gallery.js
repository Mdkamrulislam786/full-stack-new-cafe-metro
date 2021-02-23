const express = require("express");
const router = express.Router();
//middlewares+controlers
const {
  requireSignin,
  adminMiddleware,
} = require("../../common-middleware");
const {
  galleryUploadImage,
  galleryGetImages,
  galleryDeleteImage,
} = require("../../controller/admin/gallery");
//uploadimg
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

//routes
router.get("/gallery/getImages", galleryGetImages);
router.post(
  "/gallery/create",
  requireSignin,
  adminMiddleware,
  upload.single("galleryImage"),
  galleryUploadImage
);
router.post(
  "/gallery/deleteImage",
  requireSignin,
  adminMiddleware,
  galleryDeleteImage
);

module.exports = router;
