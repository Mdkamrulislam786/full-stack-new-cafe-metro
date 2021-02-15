import React from "react";
import HomeMain from "./Header/HeaderMain/headermain";
import MenuHome from "./Body/Menu/menu-home";
import { Container, Row, Col } from "react-bootstrap";
import CMGallery from "./Body/ImageGallery/ImageGallery";

const Home = () => {
  return (
    <>
      <div>
        <HomeMain />
        <MenuHome
          className={"MenuHomeImg"}
          h3="EXPLORE"
          p="OUR DELIICOUS MENU"
          to="/shop"
          cta="Show Me"
        />
        <Container fluid>
          <Row>
            <Col md={8}>
              <MenuHome
                className={"environment"}
                h3="EXPLORE"
                p="THE ENVIRONMENT"
                cta="Explore"
                video="Hu3XUSAcK2I"
              />
            </Col>
            <Col md={4}>
              <MenuHome
                className={"chef"}
                h3="OUR CHEFS"
                cta="Show Me"
                video="7dIuLd9QoIo"
              />
            </Col>
          </Row>
        </Container>

        <MenuHome
          className={"masterkitchen"}
          h3="EXPLORE"
          p="THE MASTER KITCHEN"
          cta="Show Me"
          video="vUFEipgd2s0"
        />
        <CMGallery />
        <MenuHome
          className={"customer-reviews"}
          p="HAPPY CUSTOMERS REVIEWS"
          cta="Show Me"
          video="vUFEipgd2s0"
        />
      </div>
    </>
  );
};

export default Home;
