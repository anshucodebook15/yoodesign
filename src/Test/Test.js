import React from "react";
import { motion } from "framer-motion";

const navtestVariant = (x, y) => {
  return {
    hidden: {
      x: x,
    },
    visible: {
      x: y,
    },
  };
};

export default function Test() {
  return (
    <div>
      <div className="con-lg">
        <motion.div initial="hidden" animate="visible" className="flx jcsb">
          <motion.div variants={navtestVariant("-100vw", 0)} className="logo">
            {" "}
            This is left{" "}
          </motion.div>
          <motion.div
            variants={navtestVariant("100vw", 0)}
            transition={{ delay: 0.5 }}
            className="right"
          >
            this is right
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
