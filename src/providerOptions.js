import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const providerOptions = {
  walletlink: {
    display: {
      name: "Trolleada"
    },

    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: process.env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    display: {
      logo: "https://holamifan.com/wp-content/uploads/2020/06/Piccolo.jpg",
      name: "Wallet connect",
      description: "Scan qrcode with your mobile wallet"
    },
    package: WalletConnect,
    options: {
      infuraId: "INFURA_ID" // required
    }
  }
};
