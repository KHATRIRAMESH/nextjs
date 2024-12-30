import { MetaMaskInpageProvider } from "@metamask/provides";

declare global {
  interface Window {
    ethereum?: any;
  }
}
