"use client";

import { useEffect, useState } from "react";
import { ethers, providers } from "ethers";
import { getContract } from "@/utils/contract";









const Pools = () => {
  const [betAmount, setBetAmount] = useState<number | undefined>();
  const [value, setValue] = useState<string | undefined>();
  // const [value, setValue] = useState<string | undefined>();
  // const [balance, setBalance] = useState<number | undefined>();
  // const [owner, setOwner] = useState< string| undefined>();
  //dsafksdhf
  // const [isConnected, setIsConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    if (value !== undefined) {
      setBetAmount(value ? Number(value) : undefined);
    }
    // console.log(betAmount);
  };

  

  const fetchValue = async () => {
    try {
      setLoading(true);
      const contract = await getContract();
      const result = await contract.getValue();
      console.log("Contract stake: ",result);
      console.log(typeof result);
      const valueInEth = ethers.utils.formatEther(result.toString());
      
      
      setValue(valueInEth);

      console.log("Value: ", value)
    } catch (err) {
      // setError(err instanceof Error ? err.message : 'An error occurred');
      console.log('Error:', err)
    } finally {
      setLoading(false);
    }
  };
  

  
  

  useEffect(() => {
    // console.log("Updated value:", value);
    
    fetchValue();
  }, []);

  


  const sendZero = () => {
    alert("You must enter a bet amount.");
  };
  return (
    <>
      <div className=" min-h-[100vh] flex flex-col items-center gap-5 ">
        <h1 className="text-4xl font-bold pb-9">Welcome to the Pools!</h1>
        <form className="flex flex-col ">
          <div className="grid grid-cols-1 items-center justify-between  p-5">
            <input
              type="number"
              name="amount"
              value={betAmount ?? ""}
              placeholder="Enter your bet amount"
              onChange={handleAmountChange}
              className="outline-none text-black rounded-lg"
            />
            <div className=" flex items-center justify-between">
              <button
                className=" rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16"
                onClick={sendZero}
              >
                -
              </button>
              <button className="rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16">
                Bet
              </button>
              <button className=" rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16">
                +
              </button>
            </div>
            <div className="text-xl font-bold">
              Your current balance: {
                loading ? (
                  "Loading..."
                ) : value ? (
                  `${value} ETH`
                ) : (
                  "Please connect your wallet"
                )
              }
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Pools;
