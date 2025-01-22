import React from 'react'
import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { ChakraProvider } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import theme from './theme';
import App from './App.tsx'
import { config } from './wagmi.ts'

import './index.css'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RainbowKitProvider modalSize="compact">
          <App />
        </RainbowKitProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </WagmiProvider>,
)
