import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, opBNB } from 'wagmi/chains'
// import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import {
  rabbyWallet,
  walletConnectWallet,
  trustWallet,
  safeWallet,
  bybitWallet,
  bitgetWallet,
  injectedWallet,
  binanceWallet,
  coinbaseWallet,
  okxWallet,
  metaMaskWallet
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet, metaMaskWallet, walletConnectWallet, safeWallet, rabbyWallet, trustWallet, bybitWallet, bitgetWallet, okxWallet, binanceWallet, coinbaseWallet],
    },
  ],
  {
    appName: 'Gift BNB Squid',
    projectId: import.meta.env.VITE_WC_PROJECT_ID,
  }
);

export const config = createConfig({
  chains: [mainnet, sepolia, opBNB],
  connectors,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [opBNB.id]: http()
  }
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}



// export const config = getDefaultConfig({
//   appName: 'Gift BNB Squid',
//   projectId: import.meta.env.VITE_WC_PROJECT_ID,
//   chains: [mainnet, sepolia, opBNB],
// });
