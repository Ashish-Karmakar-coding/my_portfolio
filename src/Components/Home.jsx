import "./Home.css";
import { useState, useEffect } from "react";
import robotImage from "../Images/robot2.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="container">
        <motion.div className="div1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div>
          <div className="heading">
            <h1>
              Hi, I'm <span className="name">Ashish</span>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            inventore earum culpa sequi nostrum excepturi perspiciatis
            asperiores ratione aut
          </p>
          </div>
        </motion.div>
        <motion.div className="div2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="img">
            <img src={robotImage} alt="" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
