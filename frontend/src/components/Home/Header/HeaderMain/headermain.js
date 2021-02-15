import React from "react";
import "./headermain.css";
import { Jumbotron } from "react-bootstrap";
import Buttons from "../../../widgets/Buttons/button";
import SideIconBar from "../../../widgets/Side-IconBar/sideiconbar";
import { motion } from "framer-motion";

const HomeMain = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: -2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        id="home"
      >
        <div>
          <Jumbotron fluid className="jumbo">
            <p className="rotate"> New </p>

            <h1 className="detail">
              Cafe <span className="name">Metro</span>{" "}
            </h1>

            <p>Pizaria Pastry Grill</p>

            <div>
              <Buttons
                type="greenButton"
                linkTo="/shop"
                cta="Order Online"
              />
            </div>
            <div>
              <Buttons type="redButton" linkTo="/MainMenu" cta="See The Menu" />
            </div>

            <SideIconBar />
          </Jumbotron>
        </div>
      </motion.div>
    </>
  );
};

export default HomeMain;
