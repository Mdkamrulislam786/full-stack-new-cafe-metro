import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import "./testmenu.css";
// import burger from "../images/burger.jpg";
// import cake from "../images/cake-2.jpeg";
//Bootsrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../actions";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

const TestMenu = () => {
  //GET ALL CATEGORIES WHEN RENDERED
  const category = useSelector((state) => state.category);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  let defaultKey = category.categories[0];
  const renderParentCategories = (categories) => {
    let parentCategories = [];
    for (let category of categories) {
      parentCategories.push(
        <Nav.Item key={category.name}>
          <Nav.Link eventKey={category.name}>{category.name}</Nav.Link>
        </Nav.Item>
      );
    }
    return parentCategories;
  };

  const renderChildrenCategories = (categories) => {
    return categories.map((category, i) => (
      <Tab.Pane key={i} eventKey={category.name}>
        {category.children.map((cat, i) => (
          <Fragment key={i}>
            <h2 onClick={() => history.push(`/shop/${cat.slug}`)}>
              {cat.name}
            </h2>
          </Fragment>
        ))}
      </Tab.Pane>
    ));
  };

  //CALLING THE LIST OF THE ITEMS
  return (
    <div className="Collections">
      <Container>
        <Tab.Container defaultActiveKey={defaultKey?.name}>
          <Row>
            <Col>
              <Nav className="d-flex flex-row justify-content-center text-center">
                {category.categories.length > 0
                  ? renderParentCategories(category.categories)
                  : null}
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content>
                {category.categories.length > 0
                  ? renderChildrenCategories(category.categories)
                  : null}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

// export default TestMenu;
export default TestMenu;
