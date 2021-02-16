import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, getProductsBySlug } from "../actions";
import { generatePublicUrl } from "../urlConfig";
import { Link } from "react-router-dom";
import { Modal, Image } from "react-bootstrap";

const MenuItems = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [modalInfo, setModalInfo] = useState({
    _id: "",
    name: "",
    price: "",
    img: "",
    description: "",
  });
  const { _id, name, price, img, description } = modalInfo;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const param = useParams();

  useEffect(() => {
    dispatch(getProductsBySlug(param.slug));
  }, [dispatch, param.slug]);

  return (
    <>
      <Container>
        <h2>{param.slug}</h2>
        <Row>
          {product?.products.map((prod, i) => {
            const { _id, name, price, description } = prod;
            const img = prod.productPictures[0].img;
            return (
              <Col key={i} xs={6} md={3} lg={3} xl={3}>
                <div className="menuitem">
                  <div className="images">
                    <img
                      className="image"
                      src={generatePublicUrl(img)}
                      alt="img"
                    />
                    <div className="menuitem__buttons">
                      <ButtonGroup size="sm">
                        {/* onClick={props.itemInfo} */}
                        <Button
                          variant="info"
                          onClick={() => {
                            setModalInfo({
                              ...modalInfo,
                              _id,
                              name,
                              price,
                              img,
                              description,
                            });
                            setShow(true);
                          }}
                        >
                          <i className="fa fa-info-circle" aria-hidden="true" />
                          Info
                        </Button>
                        {/* onClick={props.addItem} */}
                        <Button
                          variant="success"
                          onClick={() => {
                            // dispatch(addToCart({ _id, name, price, img }));
                          }}
                        >
                          <i className="fas fa-shopping-cart" />
                          Add
                        </Button>
                      </ButtonGroup>
                    </div>
                    <span className="images__h3">
                      <h5 style={{ textAlign: "center" }}>{name}</h5>
                      <h5
                        style={{
                          color: "green",
                          textAlign: "center",
                          fontSize: "16px",
                        }}
                      >
                        Price: {price}tk
                      </h5>
                    </span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header>
          <Modal.Title>
            <h6>{name} Info</h6>
          </Modal.Title>
          <div style={{ cursor: "pointer" }} onClick={handleClose}>
            <i className="fas fa-times-circle"></i>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={generatePublicUrl(img)}
            fluid
            className="mx-auto align-center"
          />
          <h5 className="text-center">{name}</h5>
          <h5 className="text-muted text-center">Price: {price} $</h5>
          <div className="d-flex flex-column justify-content-center align-center">
            <div
              // onClick={() => this.props.closeModal(id)}
              className="text-center align-center"
            ></div>
            <div style={{ textAlign: "center" }}>
              <p>{description}</p>
            </div>
            <div
              // onClick={() => this.props.closeModal(id)}
              className="text-center align-center"
            >
              <Button variant="dark" as={Link} to="/shop">
                Continue Shopping
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MenuItems;

//  <div className="menuitem">
//    <div className="images">
//      <img
//        className="image"
//        src={generatePublicUrl(product.productPictures[0].img)}
//        alt="img"
//      />
//      <div className="menuitem__buttons">
//        <ButtonGroup size="sm">
//          {/* onClick={props.itemInfo} */}
//          <Button variant="info">
//            <i className="fa fa-info-circle" aria-hidden="true" />
//            Info
//          </Button>
//          {/* onClick={props.addItem} */}
//          <Button variant="success">
//            <i className="fas fa-shopping-cart" />
//            Add
//          </Button>
//        </ButtonGroup>
//      </div>
//      <span className="images__h3">
//        <h5 style={{ textAlign: "center" }}>{product.name}</h5>
//        <h5
//          style={{
//            color: "green",
//            textAlign: "center",
//            fontSize: "16px",
//          }}
//        >
//          Price: {product.price}tk
//        </h5>
//      </span>
//    </div>
//  </div>;
