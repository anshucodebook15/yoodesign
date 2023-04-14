import React from "react";
import { YOOHOME } from "../../Theme/asset";
import { motion } from "framer-motion";


export default function Goodluck() {
  return (
    <section name="yoogoodluck" className="yoogoodluck">

      <div className="marque_text">
        <div className="leftmove p-28"></div>
      </div>

      <div className="yoogoodluck_thankyou flx aic">
        <div className="con-lg">
          <div className="txtc">
            <div className="flx jcc aic">
              <img
                src={YOOHOME.MNCHYSBLACK}
                alt=""
                className="yoogoodluck_logo"
              />
            </div>

            <div className="yoogoodluck_midtext">
              <p>Good Luck</p>
              <p>Follow your nose to polygon</p>

          <div className="flx jcc py-16">

              <a href="">
                <motion.img
                  whileHover={{
                    scale: 1.1,
                  }}
                  src={YOOHOME.TWITTERICON}
                  alt=""
                  className="goodlucktwit m-0   "
                  />
              </a>
                  </div>

            </div>


          </div>
        </div>
      </div>

      <div className="yoogoodluck_moretext">
        <div className="con-lg txtc">
          <p>
            MNCHYS is an experiential collective captivating web3 culture,
            artist, and technology. Through the delivery mechanism of mini
            delights, each drop embraces web3 history through project
            collaboration, historical marks, and real-life design...
          </p>
        </div>
      </div>

    </section>
  );
}
