import { ethers } from 'ethers';
import ABI from '@/constrants/ABI.json';

// ABI of your smart contract


const CONTRACT_ADDRESS = "0x057444ab59aBE5c05b44D1798b045d671e678239";

// Type definition for the contract functions
interface ContractFunctions {
  getValue: () => Promise<number>;
  setValue: (value: number) => Promise<ethers.ContractTransaction>;
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
      },
      setValue: async (value: number) => {
        return await contract.contractStake(value);
      }
    };
  } catch (error) {
    console.error('Error initializing contract:', error);
    throw error;
  }
};