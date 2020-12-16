import { motion } from "framer-motion";
import React from "react";
import './Loading.scss';

const Loading: React.FC = () => {
  return (
        <div className="loader-wrapper">
            <motion.span 
            className="loader"
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 180, 180, 360, 360],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            >
              <motion.span 
              animate={{
                height: ['0%', '30%', '60%', '90%', '100%'],
              }}
              className="loader-inner"
              ></motion.span>
            </motion.span>
        </div>
        
  );
};

export default Loading;