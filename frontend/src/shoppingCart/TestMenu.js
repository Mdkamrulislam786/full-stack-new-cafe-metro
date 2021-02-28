import React, { useEffect } from "react";
import "./testmenu.css";
import burger from "../images/burger.jpg";
// import cake from "../images/cake-2.jpeg";
//Bootsrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../actions";
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
        <Row>
          {category.children.map((cat, i) => (
            <Col xs={6} md={4} key={i}>
              <div
                className="menu__category"
                onClick={() => history.push(`/shop/${cat.slug}`)}
              >
                <img
                  src={
                    cat?.categoryImage
                      ? cat?.categoryImage
                      : burger
                  }
                  alt="cat-img"
                  className="catImg"
                />
                <h2>{cat.name}</h2>
              </div>
            </Col>
          ))}
        </Row>
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
