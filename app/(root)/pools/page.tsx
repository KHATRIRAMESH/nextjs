"use client";

import { useEffect, useState } from "react";
import { ethers} from "ethers";
import { getContract, getData, betting } from "@/utils/contract";
import CandleChart from "@/components/Chart/CandleChart"





const Pools = () => {
  const [betAmount, setBetAmount] = useState<string>('');
  const [value, setValue] = useState<string | undefined>();
  const [amount, setAmount] = useState<number | undefined>();
  const [time, setTime] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);
  // const [isloading, setIsLoading] = useState(false);


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    if (value !== undefined) {
      setBetAmount(value);
    }
  };

  

  const fetchValue = async () => {


    
    try {
      setLoading(true);
      const contract = await getContract();
      console.log(contract);
      const result = await contract.getValue();

      console.log("Contract stake: ",result);
      console.log(typeof result);
      const valueInEth = ethers.utils.formatEther(result.toString());
      // console.log(valueInEth)
      
      
      setValue(valueInEth);

      // console.log("Value: ", value)
    } catch (err) {
      console.log('Error:', err)
    } finally {
      setLoading(false);
    }
  };

  
  

  
  

  useEffect(() => {
    fetchValue();
  }, []);

  
  const handleOnClickData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Data();
  }

  // const handleOnClickBet = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
    
  // }

  // const Betting = async () => {
  //   try {
  //     const contract = await betting();
  //     const amountInWei = ethers.utils.parseEther(betAmount.toString());
  //     const result = await contract.setValue(Number(betAmount), , amountInWei)
      
  //   } catch {

  //   }
  // }
  
  const Data = async () => {
    try {
      setLoading(true);
      const contract = await getData();
      console.log(contract);
      const result = await contract.getValue();

      console.log("Contract stake: ",result);
      console.log(typeof result);
      
      console.log(result[0]);
      
      setAmount(result[0]);
      setTime(result[1]);

    } catch (err) {
      console.log('Error:', err)
    } finally {
      setLoading(false);
    }
  };

  


  const sendZero = () => {
    alert("You must enter a bet amount.");
  };


  return (
    <>
      <div className=" min-h-[100vh]  min-w-[100vh] flex flex-col items-center gap-5 ">
        <h1 className="text-4xl font-bold pb-9">Welcome to the Pools!</h1>
        <form className="flex flex-col ">
          <div className="grid grid-cols-1 items-center justify-between  p-5">
            <input
              type="number"
              name="amount"
              value={betAmount}
              placeholder="Enter your bet amount"
              onChange={handleAmountChange}
              className="outline-none text-black rounded-lg"
              
            />
            <div className=" flex items-center justify-between">
              <button
                className=" rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16"
                onClick={sendZero}
              >
                Down
              </button>
              <button className="rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16">
                Bet
              </button>
              <button className=" rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16">
                Up
              </button>
              <button className=" rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16" onClick={handleOnClickData}>
                Data
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
            <div className="text-xl font-bold">
              Amount: {
                loading ? (
                  "Loading..."
                ) :
                amount ? (
                  `${amount} ETH`
                ) : (
                  "Press Data button"
                )
              }
              
              
            </div>
            <div className="text-xl font-bold">
              Time: {
                loading ? (
                  "Loading..."
                ) :
                time ? (
                  `${time} unix`
                ) : (
                  "Press Data button"
                )
              }
            </div>
          </div>
        </form>
        {/* <BarChart /> */}
        < CandleChart/>
      </div>
    </>
  );
};
export default Pools;
