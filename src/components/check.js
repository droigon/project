import { Fragment,useEffect,useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import mask from '../images/contribution.png'
import line from '../images/line.png'
import download from '../images/download.png'
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




export default function Check() {
    const [tokenId, setTokenId] = useState(4);
  const [onGoing, setOnGoing] = useState(false);

  const [contract, setContract] = useState();
  const [value, setValue] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState(0);

    const handleChange = (e) => setValue(e.target.value);
  
  

  const submit = async () => {

    setOnGoing(true);
    console.log("checking")
    const handler = await init();
    const userAddress = await handler.getSignerAddress();
    const contract = await handler.getContract("NFT (ERC721)");
    const tx = await contract.tokenURI(2);
    const receipt = await tx.wait();
    console.log(receipt)
    alert("Token URI " + receipt.data);
    setOnGoing(false);
  };

  return (
      <div id='contribution' className='mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-5 lg:mb-5 lg:px-8 xl:mt-18 xl:mb-18'>
          <div className='relative  flex'>
              <h2 className='text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3'>Interact With Bunzz</h2>
              <img className='px-4 ' src={line} />
              <p className='text-wBgText-1 dark:text-white font-small  font-small py-1.5 '>1.2.0</p>
          </div><br></br>
       
           <div className=' md:grid grid-cols-2 gap-4 w-full'>
           <div>
          
        {onGoing ? (
        <a 
        className="w-1/2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-oph_black-1 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg  lg:px-10"
      >
     Checking
      </a>
      ) : (
        <div>
        <input placeholder="token ID (1-4)"
        onChange={(e) => setTokenId(e.target.value)} class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  />
        <a
            onClick={submit} 
            className="w-1/2 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-oph_black-1 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg  lg:px-10"
          >
          <img src={download} className="mr-1"/>Check Token
          </a>
          </div>
      )}
        
        </div>
        
                
               <div className='mt-4 text-left '>
                     
          <div className='mt-3 sm:mt-0 sm:ml-3'>  
          
        </div>

                </div>

           </div>

            
    </div>
    )
  }
  