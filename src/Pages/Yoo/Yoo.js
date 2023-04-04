import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { YOOHOME } from "../../Theme/asset";

const YooContext = createContext();

const { Provider } = YooContext;

const YooHero = () => {
  const { openpopup, inpref } = useContext(YooContext);

  console.log(inpref);

  return (
    <section name="yoohero" className="yoohero">
      <div className="yoohero_nav  ">
        <div className="con-lg">
          <div className="grid grid-col-12">
            <div className="yoohero_logo grid-col-span-3 grid-col-span-4-md py-28 ">
              <img
                src={YOOHOME.YOOLOGO}
                alt=""
                className="w50 w60-xmd w80-xs w90-xxs"
              />
            </div>
            <div className="yoohero_3d grid-col-span-6 grid-col-span-4-md">
              <img src={YOOHOME.D3BOTTLE} alt="" className="w100" />
{/* 
              <video width="320" height="240" controls>
                <source src={YOOHOME.BOOKVIDEO} type="video/mp4" autoplay />

              </video> */}

            </div>
            <div className="yoohero_commingsoon grid-col-span-3 grid-col-span-4-md py-28 ">
              <img src={YOOHOME.COMMINGSOON} alt="" className="w80" />
            </div>
          </div>
        </div>
      </div>

      <div className="yoohero_btn">
        <div className="con-lg">
          <div className="flx jcc">
            <div>
              <div className="txtc">
                <img

                  src={YOOHOME.FOLLOWBTN}
                  alt=""
                  className="yoohero_followbtn"
                  onClick={openpopup}
                />
                <p className="yoohero_text pos-rel z-200">Made By MNCHYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const YooPopup = () => {
  const { closepopup, inpref } = useContext(YooContext);


  return (
    <section className="yoopopup">
      <div className="con-lg">
        <div className="flx jcfe p-4" onClick={closepopup}>close</div>

        <div className="flx jcc aic yh-100 ">
          <div>
            <div className="yoopopup_facts">
              <div className="yoopopup_facts-head p-2">
                <h2 className="m-0">NUTRITIONAL FACTS</h2>
              </div>
              <div className="yoopopup_facts-points p-16 w-60">
                <ul>
                  <li>RAFFLE TO PURCHASE</li>
                  <li className="bold"> LIMITED EDITION</li>
                  <li>ONLY LIMIT 2 PER WALLET</li>
                  <li>MORE INFO COMING</li>
                  <li>ANNOUNCEMENTS ON TWITTER</li>
                </ul>
              </div>
            </div>
            <div className="yoopopup_form p-4">
              <form action="">
                <div className="mb-3">
                  <input
                    ref={inpref}
                    type="text"
                    placeholder="TWITTER HANDLE"
                    className="w100"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="WALLET ADDRESS"
                    className="w100"
                  />
                </div>

                <div className="txtc">
                  <button className="yoopopup_btn py-2 px-4">ENTER </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Yoo() {
  const [popup, setpopup] = useState(false);
  const inpref = useRef();

  useEffect(() => {
    setTimeout(() => {
      setpopup(true);
    }, 2000);
  }, []);

  const closepopup = () => {
    setpopup(false);
  };

  const openpopup = () => {
    setpopup(true);
  };

  const props = {
    closepopup,
    openpopup,
    inpref
  };

  return (
    <>
      <Provider value={props}>
        {popup ? <YooPopup /> : ""}

        <YooHero />
      </Provider>
    </>
  );
}
