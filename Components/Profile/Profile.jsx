import React, { useState } from "react";

//internal import
import { ProfileMain, SideBar } from "../index";

const Profile = ({
  setActive,
  getAllERC20TokenListed,
  getUserERC20Tokens,
  address,
  fee,
  createERC20,
  balance,
  withdrawFund,
  donateFund,
  getAllDonation,
  mainBalance,
  setTransfer,
  nativeToken,
}) => {
  const [open, setOpen] = useState("Dashbord");

  return (
    <div className="dsahboard-area bg-color area-padding-3">
      <div className="container">
        <div className="row">
          <SideBar
            address={address}
            setOpen={setOpen}
            open={open}
            setActive={setActive}
            setTransfer={setTransfer}
          />
          <ProfileMain
            nativeToken={nativeToken}
            mainBalance={mainBalance}
            getAllDonation={getAllDonation}
            donateFund={donateFund}
            withdrawFund={withdrawFund}
            balance={balance}
            createERC20={createERC20}
            setOpen={setOpen}
            open={open}
            fee={fee}
            address={address}
            getAllERC20TokenListed={getAllERC20TokenListed}
            getUserERC20Tokens={getUserERC20Tokens}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
