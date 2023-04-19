import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { YOOHOME } from "../../Theme/asset";
import Loading from "../Loading/Loading";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { postData } from "../../API/collector";

const YooContext = createContext();

const { Provider } = YooContext;

const yooheroVariant = (x, y) => {
  return {
    hidden: {
      x: x,
    },
    visible: {
      x: y,
    },
  };
};
const yooheroarrow = (y1, y2) => {
  return {
    hidden: {
      y: y1,
    },
    visible: {
      y: y2,
    },
  };
};
const yooherofollow = {
  hover: {
    scale: 1.5,
  },
};

const YooHero = () => {
  const { openpopup, inpref } = useContext(YooContext);

  console.log(inpref);

  return (
    <section name="yoohero" className="yoohero overflowhide">
      <motion.div initial="hidden" animate="visible" className="yoohero_nav  ">
        <div className="con-lg">
          <div className="grid grid-col-12 jcse">
            <motion.div
              variants={yooheroVariant("-100vw", 0)}
              transition={{ delay: 3.5 }}
              className="yoohero_logo grid-col-span-3 grid-col-span-4-sm py-28 "
            >
              <img
                src={YOOHOME.YOOLOGO}
                alt=""
                className="w60 w80-xmd w100-sm"
              />
            </motion.div>

            <div className="yoohero_3d grid-col-span-6 grid-col-span-4-sm grid-col-span-4-xs py-24-lg py-32-sm  ">
              <div className="flx jcc">
                <img
                  src={YOOHOME.MUNCHYPACK}
                  alt=""
                  className="w80 dis-none dis-none-lg"
                />
              </div>
            </div>

            <motion.div
              variants={yooheroVariant("100vw", 0)}
              transition={{ delay: 3.8 }}
              className="yoohero_commingsoon grid-col-span-3 grid-col-span-4-sm  py-28 "
            >
              <div className="flx jcfe">
                <img
                  src={YOOHOME.COMMINGSOON}
                  alt=""
                  className="w80 w100-xmd w100-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="yoohero_mob_pack ">
        <div className="flx jcc aic">
          <img
            src={YOOHOME.MUNCHYPACK}
            alt=""
            className="yoohero_munchypackcover w80-xmd w100-sm"
          />
        </div>
      </div>

      <div className="yoohero_btn py-12">
        <div className="con-lg">
          <div className="flx jcc">
            <div>
              <div className="txtc">
                {/* <AnimatePresence>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={yooheroarrow("-1rem", "1rem")}
                    transition={{
                      duration: 0.5,
                      delay: 2,
                      repeat: Infinity,
                      ease: easeIn,
                    }}
                    className="flx jcc py-16"
                  >
                    <img
                      src={YOOHOME.DOWNARROW}
                      alt=""
                      className="yoohero_downarrow"
                    />
                  </motion.div>
                </AnimatePresence> */}

                <div>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    src={YOOHOME.FOLLOWBTN}
                    alt=""
                    className="yoohero_followbtn"
                    onClick={openpopup}
                  />
                </div>

                <p className="yoohero_text pos-rel z-200 mb-0">
                  Made By MNCHYS
                </p>

                <a href="" className="pos-rel z-200">
                  <div className="flx jcc">
                    <motion.img
                      whileHover={{
                        scale: 1.1,
                      }}
                      src={YOOHOME.TWITTERICON}
                      alt=""
                      className="w10 m-0   "
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const YooPopup = () => {
  const {
    closepopup,
    inpref,
    onSubmitRedirect,
    userDetails,
    setuserDetails,
    formerror,
  } = useContext(YooContext);

  return (
    <section className="yoopopup">
      <div className="con-lg">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="flx jcfe p-4 py-20"
          onClick={closepopup}
        >
          <span class="material-symbols-outlined white closeico">close</span>
        </motion.div>

        <div className="flx jcc aic yh-100 ">
          <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }}>
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
                {formerror.state ? (
                  <div className="txtc">
                    <p className="yoopopup_error">{formerror.message}</p>
                  </div>
                ) : (
                  ""
                )}

                <div className="mb-3">
                  <input
                    type="text"
                    name="twitterhandle"
                    value={userDetails.twitterhandle}
                    placeholder="TWITTER HANDLE"
                    className="w100"
                    onChange={(e) =>
                      setuserDetails({
                        ...userDetails,
                        twitterhandle: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    name="walletaddress"
                    value={userDetails.walletaddress}
                    placeholder="WALLET ADDRESS"
                    className="w100"
                    onChange={(e) =>
                      setuserDetails({
                        ...userDetails,
                        walletaddress: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="txtc">
                  <button
                    className="yoopopup_btn py-2 px-4"
                    onClick={onSubmitRedirect}
                  >
                    <div className="flx aic">
                      <div>ENTER </div>
                      <div>
                        <span class="material-symbols-outlined enterarrow">
                          arrow_forward_ios
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Yoo() {
  const [popup, setpopup] = useState(false);
  const [loadingscreen, setloadingscreen] = useState({
    state: false,
    message: "",
  });

  const [loaderyoo, setLoaderyoo] = useState(true);

  const [formerror, setformerror] = useState(false);
  const [userDetails, setuserDetails] = useState({
    twitterhandle: "",
    walletaddress: "",
  });

  const inpref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const load = setTimeout(() => {
      setLoaderyoo(false);
    }, 5000);

    const poptime = setTimeout(() => {
      setpopup(true);
    }, 8000);

    return () => {
      clearTimeout(load);
      clearTimeout(poptime);
    };
  }, []);

  const closepopup = () => {
    setpopup(false);
  };

  const openpopup = () => {
    setpopup(true);
  };

  const onSubmitRedirect = async (e) => {
    e.preventDefault();

    if (userDetails.twitterhandle && userDetails.walletaddress) {
      if (userDetails.twitterhandle !== userDetails.walletaddress) {
        setformerror({
          state: false,
          message: "",
        });

        let obj = {
          twitterhandle: userDetails.twitterhandle,
          walletaddress: userDetails.walletaddress,
        };

        await postData(obj);

        navigate("/goodluck");
      } else {
        setformerror({
          state: true,
          message: "Field's cannot be same",
        });
      }
    } else {
      setformerror({
        state: true,
        message: "Field's Cannot be empty",
      });
    }
  };

  // console.log(userDetails);

  const props = {
    closepopup,
    openpopup,
    onSubmitRedirect,
    userDetails,
    setuserDetails,
    inpref,
    formerror,
  };

  return (
    <>
      <Provider value={props}>
        
        {loaderyoo && (
          <AnimatePresence initial={{ y: 0 }}>
            <motion.div exit={{ y: -1000 }} className="loading h-100vh flx aic">
              <div className="marque_text">
                <div className="leftmove p-28"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {popup ? <YooPopup /> : ""}
        <YooHero />
      </Provider>
    </>
  );
}

{
  {
    /* {loaderyoo ? <Loading /> : ""} */
  }
  /* {loadingscreen ? (
          <Loading />
        ) : (
          <>
            {popup ? <YooPopup /> : ""}
            <YooHero />
          </>
        )} */
}

// <Loading />
// {popup ? <YooPopup /> : ""}
// <YooHero />

{
  /* <div className="yoohero_mob_pack dis-none dis-block-lg">
<div className="flx jcc aic">
  <img src={YOOHOME.MUNCHYPACK} alt="" className="w80-xmd w100-sm" />
</div>
</div> */
}
