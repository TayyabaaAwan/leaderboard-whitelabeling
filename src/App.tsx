import React, { useEffect , createContext} from "react";
import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Routes/path";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount, Connector } from 'wagmi'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { config } from "./components/config";
import { useState } from "react";
import { authSlice } from "./redux/apis/apisSlics";

const App = () => {
  const queryClient = new QueryClient()
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = '36b684bec5d35b67f9905cb4e440458a'
  // 2. Create wagmiConfig
  // 3. Create modal
  createWeb3Modal({
      wagmiConfig: config,
      projectId,
      enableAnalytics: true // Optional - defaults to your Cloud configuration
  })
 
  return (
    <div>
       <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
      <Toaster containerClassName="col-12" reverseOrder={false} />
     <Provider store={store}>
        
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
       </Provider>
       </QueryClientProvider>
    </WagmiProvider>
      </div>      
  );
};

export default App;


