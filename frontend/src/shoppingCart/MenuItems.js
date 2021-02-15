import React, { useEffect } from "react";
import { Button, ButtonGroup, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductsBySlug } from "../actions";
import { generatePublicUrl } from "../urlConfig";

const MenuItems = ({ slug }) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    dispatch(getProductsBySlug(slug));
  }, [dispatch, slug]);

  return product.products.length > 0
    ? product.products.map((product, i) => (
        <Col key={i} xs={6} md={3} lg={3} xl={3}>
          <h4>{product.name}</h4>
        </Col>
      ))
    : null;
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