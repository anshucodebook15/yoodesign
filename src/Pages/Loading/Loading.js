import { motion } from 'framer-motion'
import React from 'react'


export default function Loading() {
  return (
    <motion.div initial={{ y: "-50vh" }} animate={{ y: "0vh" }} className='loading h-100vh flx aic'>

      <div className="marque_text">
        <div className="leftmove p-28"></div>
      </div>

    </motion.div>
  )
}
