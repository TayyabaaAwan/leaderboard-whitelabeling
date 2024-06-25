
import { http, createConfig } from '@wagmi/core'
import { WagmiProvider, useAccount, Connector } from 'wagmi'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { arbitrum, bsc, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '36b684bec5d35b67f9905cb4e440458a'
// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [bsc,mainnet] as const
export const config = defaultWagmiConfig({
    chains, // required
    projectId, // required
    metadata, // required
    enableWalletConnect: true, // Optional - true by default
    enableInjected: true, // Optional - true by default
    enableEIP6963: true, // Optional - true by default
    enableCoinbase: true, // Optional - true by default
    // Optional - Override createConfig parameters
})