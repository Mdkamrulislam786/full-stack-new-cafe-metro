import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addGalleryImg, deleteGalleryImg, getAllGallery } from "../../actions";
import Layout from "../../components/Layout";
import AddNewImg from "./AddNewImg";
import "./style.css";
const Gallery = () => {
  const [imgName, setImgName] = useState("");
  const [galleryImage, setGalleryImage] = useState("");
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  console.log("gallery", gallery?.galleryImages.gallery);

  //HANDLE FORM SUBMIT
  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", imgName);
    form.append("galleryImage", galleryImage);
    console.log("form", form);
    dispatch(addGalleryImg(form));
    setImgName("");
    setGalleryImage("");
  };

  const renderImages = () => {
    return gallery.galleryImages.gallery?.length > 0
      ? gallery.galleryImages.gallery?.map((img, i) => (
          <Col md={3} key={i}>
            <div className="gallery__img">
              <img src={img.galleryImage} alt={img.name} />
              <Button
                onClick={() => {
                  const id = img._id;
                  dispatch(deleteGalleryImg(id));
                }}
                variant="danger"
                size="sm"
              >
                Delete
              </Button>{" "}
              ({i})
            </div>
          </Col>
        ))
      : `No image added, add image`;
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
        <Row>{renderImages()}</Row>
      </Container>
    </Layout>
  );
};

export default Gallery;
