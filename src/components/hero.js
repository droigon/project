import { Fragment,useRef,useEffect,useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import hero from '../images/hero.png'
import bunzz from 'bunzz-sdk'




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




export default function Hero() {
    const [contract, setContract] = useState();
  const [value, setValue] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("--");
  const [symbol, setSymbol] = useState("--");
  const [MINTER_ROLE, setMINTER_ROLE] = useState("--");
  const [minted, setMinted] = useState("--");
  const [onGoing, setOnGoing] = useState(false);

  
  
  

  useEffect(() => {
    const setup = async () => {
      try {
        const handler = await init();

        const userAddress = await handler.getSignerAddress();
        const contract = await handler.getContract("NFT (ERC721)");
        const balance = await contract.symbol();
        const symbol = await contract.symbol();
        const name = await contract.name();
        const owner = await contract.MINTER_ROLE();
        const minted = await contract.totalSupply();
        //nft
        console.log("test")
        setBalance(balance.data);
        console.log(name.data)
        setName(name.data)
        setSymbol(symbol.data)
        setMINTER_ROLE(owner.data)
        setMinted(minted.data)
        

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

    setOnGoing(true);
    const next = minted + 1
    const tx = await contract.mint(userAddress, next );
    const receipt = await tx.wait();
    console.log(receipt)
    alert("NFT successfully minted, cheers🎉");
    alert("View transaction on rinkbey chain Transaction hash: " + receipt.transactionHash);
    alert("View transaction on rinkbey chain: Block Hash: " +receipt.blockHash);
    setOnGoing(false);
  };

  

  
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <section>
      <main className='md:relative md:flex h-[700px] mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-5 lg:px-8 xl:mt-18  '>
    <div className=" mt-10 w-full px-4 sm:mt-12 md:w-1/2 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
     <div className="text-left lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block font-Cinzel font-normal  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 xl:inline">YET THE STORY OF</span>{' '}
        <span className="block font-Cinzel font-normal  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 xl:inline tracking-[25px]">ORPHEUS</span>
      </h1>
      <p className="mt-3 text-base text-wBgText dark:text-ashs-1 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Name of NFT: {name}
      <br/>
      Symbol: {symbol}
      <br/>
      Minter Role: {MINTER_ROLE}
      <br/>
      No of NFTs minted: {minted}
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className=" rounded-md shadow">
        {onGoing ? (
        <a
        className=" w-full flex items-center text-gold-1 border border-gold-1 divide-gold-2  justify-center px-8 py-3 text-base font-medium rounded-sm  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg md:px-10"
      >
       Minting....
      </a>
      ) : (
        <a
        onClick={submit}
        className=" w-full flex items-center text-gold-1 border border-gold-1 divide-gold-2  justify-center px-8 py-3 text-base font-medium rounded-sm  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg md:px-10"
      >
       Mint
      </a>
      )}
          
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-3'>  
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-white dark:text-oph_black-1 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg  lg:px-10"
          >
           FREE STUFF
          </a>
        </div>
      </div>
      </div>
  </div>
  <div className="w-full bg-white-hero dark:bg-hero bg-contain bg-no-repeat max-w-full object-cover h-96  sm:h-96 md:h-96 lg:mt-1 lg:w-half lg:h-full mt-10 md:absolute md:block  md:right-0  md:w-1/2">
    
  
</div>


</main>
<div>
</div>
</section>
    )     
}





  