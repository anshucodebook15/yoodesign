import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div
        exit={{ y: -1000 }}
        className="loading h-100vh flx aic"
      >
        <div className="marque_text">
          <div className="leftmove p-28"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

{
  /* <motion.div initial={{ y: 0 }} animate={{ y: "-100vh" }} transition={{ delay: 3 }} className='loading h-100vh flx aic'>

<div className="marque_text">
  <div className="leftmove p-28"></div>
</div>

</motion.div> */
}

// initial={{ y: 0 }} animate={{ y: "-100vh" }} transition={{ delay: 2 }}

// initial={{ y: 0 }}
// animate={{ y: "-100vh" }}
// transition={{ delay: 3 }}
