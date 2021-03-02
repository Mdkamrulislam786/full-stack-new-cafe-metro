import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "../../../../helpers/axios";
import { api } from "../../../../urlConfig";
import "./ImageGallery.css";

const CMGallery = () => {
  const [gImgs, setImages] = useState([]);

  useEffect(() => {
    let getGalleryImages = async () => {
      let res = await axios.get(`${api}/gallery/getImages`);
      let resData = res.data?.galleryList;
      setImages(resData);
    };
    getGalleryImages();
  }, []);
  //newImages must be an array of objects
  const newImges = gImgs?.map((imgs) => {
    return {
      ...imgs,
      original: imgs.img,
      thumbnail: imgs.img,
    };
  });

  return (
    <div className="gallery">
      <h3>Our Gallery</h3>
      <ImageGallery items={newImges} />
    </div>
  );
};

export default CMGallery;