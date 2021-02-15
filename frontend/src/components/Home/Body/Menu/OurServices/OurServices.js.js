import React from "react";
import YouTube from "../../../../widgets/Youtube/youtube";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import SideIconBar from "../../../../widgets/Side-IconBar/sideiconbar";
import "./OurServices.css";

const OurServices = (props) => {
  return (
    <>
      <SideIconBar />
      <div className="OurServices">
          <div className="overlay"></div>
        <Image className="serviceImg" src={props.img}/>
        <h2 className="centered">{props.h2}</h2>
      </div>
      <Container>
        <Row>
          <Col className="d-flex justify-content-md-center flex-column align-items-center ourServices">
            <h1>{props.h1}</h1>
            <p>
              loremVelit nisi nisi exercitation nulla consequat occaecat nisi
              magna sit adipisicing amet occaecat Lorem eiusmod. Do et duis
              ullamco proident elit aliqua sit officia ea commodo nisi. Officia
              ullamco sunt amet culpa pariatur veniam cillum culpa magna dolore
              nisi ullamco culpa labore. Voluptate labore tempor exercitation
              sunt sunt cillum id. Quis irure consequat velit sit magna ea sunt
              aliquip exercitation veniam. Cupidatat occaecat culpa incididunt
              fugiat quis.
              </p>
              <YouTube video={props.video} />
              <p>
              Esse et qui consectetur deserunt qui non ipsum qui mollit proident
              quis. Cupidatat exercitation sunt tempor culpa. Dolor culpa ex
              adipisicing exercitation nisi cillum cillum reprehenderit ea esse.
              Aliquip pariatur excepteur incididunt quis fugiat pariatur nisi
              pariatur aliqua anim. Quis velit eiusmod eu reprehenderit fugiat
              dolore ipsum aliquip minim quis culpa incididunt. Non proident
              enim proident laboris dolore nisi est non aute Lorem nulla eiusmod
              consectetur. Et id eu aliquip et in ut velit incididunt cillum
              est. Ad aute nisi officia pariatur elit irure voluptate occaecat
              elit consequat mollit cillum incididunt ut. Pariatur ipsum commodo
              ut proident ut occaecat enim elit minim adipisicing in magna Lorem
              deserunt. Elit sint Lorem exercitation Lorem.
            </p>
            <Button onClick={()=> alert('Call Us Now: +8801826391501')}  varient="info">
              WANT MORE INFO? CONTACT US NOW
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurServices;
