import { useMetamask } from "@thirdweb-dev/react";
import React from "react";

const SignIn = () => {
  const connectWithMetamask = useMetamask();
  return (
    <div className="home__container">
      <h1>Sign in to mint</h1>
      <button className="home__button" onClick={connectWithMetamask}>
        Sign in using MetaMask
      </button>
    </div>
  );
};

export default SignIn;
