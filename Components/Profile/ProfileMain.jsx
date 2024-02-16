import React from "react";

//internal import
import { Table, TableTwo } from "../index";

const ProfileMain = ({
  getAllERC20TokenListed,
  getUserERC20Tokens,
  setOpen,
  open,
  fee,
  createERC20,
  address,
  balance,
  withdrawFund,
  donateFund,
  getAllDonation,
  mainBalance,
  nativeToken,
}) => {
  const details = [
    {
      title: "Created",
      value: `#${getUserERC20Tokens?.length || 0}`,
    },
    {
      title: "ERC20s",
      value: `#${getAllERC20TokenListed?.length || 0}`,
    },
    {
      title: "Listing Fee",
      value: `${fee} Matic`,
    },
    {
      title: "Downers",
      value: `#${getAllDonation?.length || 0}`,
    },
    {
      title: `${nativeToken?.symbol} Token`,
      value: `${nativeToken?.balance}`,
    },
    {
      title: "Contract Balance",
      value: `${mainBalance == undefined ? "Only Owner See" : mainBalance}`,
    },
  ];

  const contractOwner = 0x2d42ca3bf6eb161cecc6d08087e0b0b86d682eb5;

  return (
    <div className="col-xl-9 col-lg-9 col-md-8">
      <div className="row user-dashboard">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="user-top">
            <div className="user-balance">
              <span>Your balance</span>
              <div className="main-bal">{balance?.slice(1, 7)} Matic</div>
            </div>
            <div className="userboard-btn">
              <a className="user-btn coin-btn" onClick={() => donateFund()}>
                Donate 1 MATIC
              </a>
              {address == contractOwner && (
                <a
                  onClick={() => withdrawFund()}
                  className="user-btn color-btn"
                >
                  Withdraw funds
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row dashboard-content">
        {details.map((detail, i) => (
          <div key={i + 1} className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-dash-head">
              <div className="dashboard-amount d-flex flex-wrap align-items-center">
                <div className="amount-content">
                  <span className="pro-name">{detail.title}</span>
                  <span className="pro-money">{detail.value}</span>
                </div>
                <div className="invest-tumb">
                  <img src={`img/icon/d${i + 1}.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open == "Dashbord" ? (
        <Table
          title="All Created ERC20 Tokens"
          tableData={getAllERC20TokenListed}
        />
      ) : open == "Your Token" ? (
        <Table title="Your tokens" tableData={getUserERC20Tokens} />
      ) : open == "Donation" ? (
        <TableTwo title="All user donations" tableData={getAllDonation} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileMain;
