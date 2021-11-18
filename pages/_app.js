import '../styles/globals.css'
import Header from './components/header'
import Footer from './components/footer'

import React from 'react';


import { WalletProvider } from "@react-dapp/wallet";

function MyApp({ Component, pageProps }) {
  
  return (
    <React.StrictMode>
      <WalletProvider config={{
        chainId: 56,
        supportedChainIds: [56],
        wrappedNative: {
          address: '',
          symbol: 'WBNB'
        },
        usd: {
          address: '',
          symbol: 'BUSD'
        },
        nativeUsdLp: {
          address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
          symbol: ''
        }
      }}>
        <div >
          <Header/>
          <div className="main">
            <div className="container mx-auto p-4">
              <Component {...pageProps} />
            </div>
            
          </div>
          <Footer/>
        </div>
      </WalletProvider>
    </React.StrictMode>
    
  )
}

export default MyApp
