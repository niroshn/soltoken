import React, { useState } from "react";
import { tokenABI } from "./contracts";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const Home = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const mint = async (e) => {
    e.preventDefault();
    try {
      if (address !== "") {
        if (amount > 0) {
          const accounts = await web3.eth.getAccounts();
          // console.log(process.env.REACT_APP_CONTRACT_ADDRESS);
          const token = new web3.eth.Contract(
            tokenABI,
            "0x494EAE8ae32212BA6691d95a72B2499023a8bBad"
          );
          const request = await token.methods.mint(address, amount).send({from:accounts[0]});
          alert("You have successfully transfered TEST tokens!");
          console.log(request);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Error while minting");
    }
  };

  return (
    <div>
      <div className="text-center mt-24">
        <div className="flex items-center justify-center">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">Transfer Tokens</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Recipient address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Amount
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                required
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <button
                onClick={mint}
                className="block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500"
              >
                Mint
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
