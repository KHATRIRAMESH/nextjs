import { ethers } from 'ethers';
import ABI from '@/constrants/ABI.json';
import exp from 'constants';
import { error } from 'console';

// ABI of your smart contract


const CONTRACT_ADDRESS = "0x057444ab59aBE5c05b44D1798b045d671e678239";

// Type definition for the contract functions
interface ContractGetData {
  getValue: () => Promise<[number, number]>;
  
}

interface ContractFunctions {
  getValue: () => Promise<number>;
}

interface ContractBet{
  setValue: (value: number, bet: number,amount: ethers.BigNumberish) => Promise<ethers.ContractTransaction>;
}


export const betting = async (): Promise<ContractBet> => {
  if(typeof window === 'undefined' || !window.ethereum) {
    throw new Error('No Ethereum object found in window.');
  }

  try{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    return {
      setValue: async (value: number, bet: number,amount: ethers.BigNumberish) => {
        return await contract.bet(value, bet,{value: amount});
      }
      
    }
  } catch (error){
    console.error('Error initializing contract: ', error);
    throw error;
  }
}

export const getData = async (): Promise<ContractGetData> => {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed!');
  }

  try {
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Create Web3Provider instance
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    // Create contract instance
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      signer
    );

    return {
      getValue: async () => { 
        const value = await contract.getChainlinkDataFeedLatestAnswerReturn(); 
        return [Number(value[0]), Number(value[1])]; 
      }, 
      
    };
  } catch (error) {
    console.error('Error initializing contract:', error); 
    throw error; 
  }
}

export const getContract = async (): Promise<ContractFunctions> => {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed!');
  }

  try {
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Create Web3Provider instance
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    // Create contract instance
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      signer
    );

    return {
      getValue: async () => {
        const value = await contract.contractStake();
        return Number(value);
      }
    };
  } catch (error) {
    console.error('Error initializing contract:', error);
    throw error;
  }
};

