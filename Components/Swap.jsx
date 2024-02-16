import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { MdPowerSettingsNew } from "react-icons/md";
import { BsBoxArrowDown, BsBoxArrowUp, BsFillSendFill } from "react-icons/bs";
const Swap = ({ nativeToken, transferNativeToken }) => {
  const [token, setToken] = useState({
    address: "",
    tokenNo: "",
  });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };
  return (
    <div className="swap-area bg-color-3 fix area-padding">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="swap-inner">
              <div className="swap-token left-headline">
                <div className="top-text-title">COIN SWAP</div>
                <h2>
                  You can swap{""}
                  <span className="color-text-bold">Senzu Token</span> anytime
                </h2>
                <p>
                  Blockchain opt in to the projects they genuinely want to work
                  on mainatins the amount of lines. When replacing a seelection
                  help agencies to define. Define thir own buisness objectives
                  and then our consultants opt in to the peojects they genuinely
                  want to work on.{""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="money-send">
              <div className="calculator-inner">
                <div className="single-cal">
                  <div className="swap-top d-flex flex-wrap align-items-center">
                    <div className="swap-left">
                      <span>Token</span>
                    </div>
                    <div className="swap-right">
                      <ul className="dashboard-right-menus">
                        <li>
                          <a href="#0" className="thumbs">
                            <FiSettings />
                          </a>

                          <div className="notification-area left-part">
                            <div className="notification-header">
                              <span className="set-text">Native Token</span>
                              <div className="swap-set">
                                <span>
                                  Find detail of our ERC20 Native Token
                                </span>
                                <ul>
                                  <li>
                                    <a>{nativeToken?.name}</a>
                                  </li>
                                  <li>
                                    <a>{nativeToken?.symbol}</a>
                                  </li>
                                  <li>
                                    <a>Tol: {nativeToken?.totalSupply}</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="swap-set slipege">
                                <span>Address: {nativeToken?.address}</span>
                                <ul>
                                  <li>
                                    <a>Bal: {nativeToken?.balance}</a>
                                  </li>
                                  <li>
                                    <a>Dec: {nativeToken?.decimals}</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="#0" className="author">
                            <MdPowerSettingsNew />
                          </a>
                          <div className="notification-area side-part">
                            <div className="author-body text-center">
                              <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Earum quis quae neque beatae
                                inventore? Impedit ipsa beatae maiores nesciunt
                                deserunt, similique sapiente pariatur aliquid.
                                <br />
                                <a href="#">Buy Token</a>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-form">
                    <form action="#">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-input"
                        onChange={(e) => handleTokenInfo("address", e)}
                        placeholder="address"
                      />
                      <span>
                        <BsFillSendFill />
                      </span>
                    </form>
                  </div>
                  <div className="middle-inti text-center">
                    <a href="#">
                      <BsBoxArrowDown />
                    </a>
                  </div>
                  <div className="inner-form">
                    <form action="#">
                      <label>Amount</label>
                      <input
                        onChange={(e) => handleTokenInfo("tokenNo", e)}
                        type="text"
                        className="form-input"
                        placeholder="amount"
                      />
                      {""}
                      <span>{nativeToken?.symbol}Token</span>
                    </form>
                  </div>
                  <div className="inner-form-text">
                    <div className="rate-text d-flex flex-wrap align-items-center">
                      <span>Now, you can transfer your Native Token</span>
                    </div>
                  </div>
                  <button
                    onClick={() => transferNativeToken(token)}
                    className="cale-btn"
                  >
                    Transfer Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
