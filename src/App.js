import React from "react";

// import { ConnectButton } from "@rainbow-me/rainbowkit";
import img from "./assets/ud-things.png"
import Header from "./components/Header";
import ConnectButton from "./components/Wallet"
import { Mint } from "./integration";

const App = () => {
  const handleClick = async() => {
    console.log("Cle");
    try {
      const res = await Mint();
      console.log("res",res);
      console.log("minteed");
    } catch (error) {
      console.log("erroir in miuntinfs",error);
    }
  }
  return (
    <div className="flex justify-center items-center mx-auto bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <div className=" items-center space-y-6 ">
        <Header />
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <div className="w-full max-w-[800px] h-auto flex justify-center">
          <img src={img} alt="aasd" />
        </div>
        <div className="flex justify-center">
          <button  onClick={handleClick} className="text-white w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px]">
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
