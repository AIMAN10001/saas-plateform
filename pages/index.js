import React from "react";

//internal import
import {
  Header,
  Footer,
  About,
  Brand,
  Faq,
  Feature,
  HeroSection,
  Information,
  Stacking,
  Swap,
  Welcome,
} from "../Components/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const {
    createERC20,
    getAllERC20TokenListed,
    getUserERC20Tokens,
    fee,
    address,
    nativeToken,
    transferNativeToken,
  } = useStateContext();

  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Brand />
        <Swap
          nativeToken={nativeToken}
          transferNativeToken={transferNativeToken}
        />
        <Welcome />
        {/* <Information />
        <Stacking />
        <Feature /> */}
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default index;
