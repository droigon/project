import React,{useState,useEffect} from 'react';

import { Check, Header } from './components';
import { Hero } from './components';
import { Recent } from './components';
import { Contribution } from './components';
import { Avatar } from './components';
import { Community } from './components';
import { LoadingSpinner } from './components';
import { Nft } from './components';
import { Mint } from './components';
import './App.css';

import { ERC721Minter } from "./components/ERC721Minter";
import { ERC721Checker } from "./components/ERC721Checker";
import bunzz from "bunzz-sdk";

const DAPP_ID = "8f78ee82-6849-40fc-9607-3d2641538b05";
const API_KEY = '1c36d764-547b-462a-b07a-3e12ecbf69c9';

const App = () => {
  const [handler, setHandler] = useState();
  const [userAddress, setUserAddress] = useState("");
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setup()
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  const setup = async () => {
    const handler = await bunzz.initializeHandler({
      dappId: DAPP_ID,
      apiKey: API_KEY,
    });

    const userAddress = await handler.getSignerAddress();

    console.log('Address:',userAddress);
    setUserAddress(userAddress);
    setHandler(handler);
  }

  return(
    <>
    {isloading ? <div className="App dark "> <LoadingSpinner /></div>: (
  <div className="App">
    <div className="">
      <Header />
      <Hero />
      <Recent />
      <Check />
      <Mint />
      <Contribution />
      <Avatar />
      <Community />
      <Nft />
      
    </div>
  </div>
  ) 
  }
    </>
  );
};

export default App;
