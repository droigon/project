/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef,useEffect, useState } from 'react'
import bunzz from "bunzz-sdk";




const DAPP_ID = "8f78ee82-6849-40fc-9607-3d2641538b05";
const API_KEY = "1c36d764-547b-462a-b07a-3e12ecbf69c9"

const key = "0x9ceB3442d3b00417A6C822425DcDA621Dd1CE7A6"
const init = async () => {
  const handler = await bunzz.initializeHandler({
    dappId: DAPP_ID,
    apiKey: API_KEY,
  });
  return handler;
};




export default function Example() {
    const [contract, setContract] = useState();
  const [value, setValue] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState(0);

  
  
  

  useEffect(() => {
    const setup = async () => {
      try {
        const handler = await init();

        const userAddress = await handler.getSignerAddress();
        const contract = await handler.getContract("NFT (ERC721)");
        const balance = await contract.symbol();
        //nft

        const tokenUri = await contract.tokenURI(1);
        const data = tokenUri.data
        //const url = await tokenUri.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/");
        console.log(data)
        //console.log(url)
        

        

        console.log('Contract is',contract)
        console.log(balance.data)
        setBalance(balance.data);
        

        setUserAddress(userAddress);
        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    };

    setup();
  }, []);

  const handleChange = (e) => setValue(e.target.value);
  
  

  const submit = async () => {
    await contract.mint(userAddress, value);
    alert("Transaction was sent in success🎉");
  };

  
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
   
        
                       
        <div className="">
        <p>You can mint your ERC20 if you're the owner</p>
        <p>{balance} have been minted already</p>
        <input value={value} onChange={handleChange} type="text" />
        <button onClick={submit}>mint</button>
        </div>
      
                   
  )
}
