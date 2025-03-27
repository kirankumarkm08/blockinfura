import { createAppKit, useAppKitAccount } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient()

const projectId = '1b6baf37a199c2b1ccf9f2a9171b2410'

const metadata = {
  name: 'Block Infura',
  description: 'Blockain Infrastructure',
  url: 'https://www.blockinfura.com', 
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const networks = [mainnet]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    connectMethodsOrder: ['social', 'email'],
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true, // default to true
    socials: ['google', 'github', 'apple'],
    emailShowWallets: false, // default to true
  },
  allWallets: 'HIDE',
})


export {useAppKitAccount}

export function AppKitProvider({ children }: any) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
    