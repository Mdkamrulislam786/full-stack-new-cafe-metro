import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addGalleryImg } from "../../actions";
import Layout from "../../components/Layout";
import AddNewImg from "./AddNewImg";
const Gallery = () => {
  const [imgName, setImgName] = useState("");
  const [galleryImage, setGalleryImage] = useState("");
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  console.log("gallery", gallery);
  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", imgName);
    form.append("galleryImage", galleryImage);
    console.log("form", form);
    dispatch(addGalleryImg(form));
    setImgName("");
    setGalleryImage("");
  };

  return (
    <Layout sidebar>
      <Container>
        <div className="gallery__adImg">
          <h4>Add New Image</h4>
          <form>
            <input
              value={imgName}
              type="text"
              placeholder="alt.."
              onChange={(e) => setImgName(e.target.value)}
            />
            <br />
            <input
              type="file"
              required
              onChange={(event) => setGalleryImage(event.target.files[0])}
            />
            <br />
            <Button variant="secondary" onClick={handleSubmit}>
              Add
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default Gallery;
