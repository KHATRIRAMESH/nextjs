"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "@/utils/contract";
import CandleChart from "@/components/Chart/CandleChart";

const Pools = () => {
  const [loading, setLoading] = useState(false);
  const [betAmount, setBetAmount] = useState<number | undefined>(0);
  const [value, setValue] = useState<string | undefined>();
  const [prediction, setPrediction] = useState<number >(0);

  const [betDetail, setBetDetail] = useState<{
    betAmount: number;
    betTime: string;
    betPrediction: number;
  }>({ betAmount: 0, betTime: "", betPrediction: 0 });

  //handle input bet amout change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    if (value !== undefined) {
      setBetAmount(value ? Number(value) : undefined);
    }
  };

  //fetch value from user account in metamask
  const fetchValue = async () => {
    try {
      setLoading(true);
      const contract = await getContract();
      const result = await contract.getValue();

      console.log(typeof result);
      const valueInEth = ethers.utils.formatEther(result.toString());

      setValue(valueInEth);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  //fetch prediction from user input
  useEffect(() => {
    fetchValue();
  }, []);

  //alert user to enter bet amount
  const sendZero = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("You must enter a bet amount.");
    return;
  };

  //function for submitting bet amount, prediction & timestamp
  const submitPrediction = async (
    betAmount: number,
    betTime: string,
    betPrediction: number
  ) => {
    setBetDetail({ betAmount, betTime, betPrediction });
    // try {
    //   setLoading(true);
    //   const contract = await getContract();
    //   await contract.setValue(betAmount);
    //   console.log("Bet submitted successfully!");
    // } catch (err) {
    //   // setError(err instanceof Error? err.message : 'An error occurred');
    //   console.log("Error:", err);
    // } finally {
    //   setLoading(false);
    // }

    // fetchValue();

    // alert("value sumbitted");
    console.log("Bet Details:",betDetail);
  };

  //handle up
  const handleUpClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!betAmount) {
      sendZero(e);
      return;
    }
    setPrediction(0);
    const betTime = new Date().toLocaleTimeString();

    submitPrediction(betAmount, betTime, prediction);
  };

  const handleDownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!betAmount) {
      sendZero(e);
      return;
    }
    setPrediction(1);
    const betTime = new Date().toLocaleTimeString();
    submitPrediction(betAmount, betTime, prediction);
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
              value={betAmount ?? ""}
              placeholder="Enter your bet amount"
              onChange={handleAmountChange}
              className="outline-none text-black rounded-lg"
            />
            <div className=" flex items-center justify-between">
              <button
                className="rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16"
                onClick={handleDownClick}
              >
                Bet Down
              </button>

              <button
                className=" rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16"
                onClick={handleUpClick}
              >
                Bet Up
              </button>
            </div>
            {/* <p>{`prediction Details:${betDetail}` }</p> */}
            <div className="text-xl font-bold">
              Your current balance:
              {loading
                ? "Loading..."
                : value
                ? `${value} ETH`
                : "Please connect your wallet"}
            </div>
          </div>
        </form>
        {/* <BarChart /> */}
        <CandleChart />
      </div>
    </>
  );
};
export default Pools;
