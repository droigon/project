/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState,useEffect,React } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo.png'
import dark from '../images/dark_logo.png';
import { networks } from './utils/networks';

const navigation = [
  { name: 'Works', href: '#works' },
  { name: 'Contribution', href: '#contribution' },
  { name: 'Community', href: '#community' },
  { name: 'Get In Touch', href: '#touch' },
]



const Header = () =>{
  const [currentAccount, setCurrentAccount] = useState('');
	const [network, setNetwork] = useState('');
	const [mints, setMints] = useState([]);
const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask -> https://metamask.io/");
				return;
			}

			// Fancy method to request access to account.
			const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		
			// Boom! This should print out public address once we authorize Metamask.
			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error)
		}
	}

	const switchNetwork = async () => {
		if (window.ethereum) {
			try {
				// Try to switch to the Mumbai testnet
				await window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
				});
			} catch (error) {
				// This error code means that the chain we want has not been added to MetaMask
				// In this case we ask the user to add it to their MetaMask
				if (error.code === 4902) {
					try {
						await window.ethereum.request({
							method: 'wallet_addEthereumChain',
							params: [
								{	
									chainId: '0x13881',
									chainName: 'Polygon Mumbai Testnet',
									rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
									nativeCurrency: {
											name: "Mumbai Matic",
											symbol: "MATIC",
											decimals: 18
									},
									blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
								},
							],
						});
					} catch (error) {
						console.log(error);
					}
				}
				console.log(error);
			}
		} else {
			// If window.ethereum is not found then MetaMask is not installed
			alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
		} 
	}

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}
		const chainId = await ethereum.request({ method: 'eth_chainId' });
		setNetwork(networks[chainId]);

		ethereum.on('chainChanged', handleChainChanged);
		
		// Reload the page when they change networks
		function handleChainChanged(_chainId) {
			window.location.reload();
		}
	};
  
  const renderNotConnectedContainer = () => (
		<div className="connect-wallet-container">
			<img src="https://media.giphy.com/media/lPWg6alOSG3DlsBNnC/giphy.gif" alt="Ninja donut gif" />
			{/* Call the connectWallet function we just wrote when the button is clicked */}
			<button onClick={connectWallet} className="cta-button connect-wallet-button">
				Connect Wallet
			</button>
		</div>
	);
  useEffect(() => {
		console.log("checking....")
		checkIfWalletIsConnected();
	}, []);



  return (
        <div className="relative h-20  ">
        <div className="max-w-9xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-9xl lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 " aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" className='flex lg:justify-start'>
                    <div className='bg-white-logo dark:bg-dark-logo grid content-center bg-contain border-0 bg-no-repeat h-8 w-24 sm:h-10'>
                    <span className="lg-only text-wBgText dark:text-white items-center px-12 justify-between">ORPHEUS</span>
                      </div>
                     
                      
                      
                     
                    </a>
                    
                    <div className="mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block  md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-wBgText dark:text-white hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                   
                  { currentAccount ? <button className='px-4 py-3 border border-transparent text-base font-medium rounded-sm  bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3'> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </button> : 
                  <button className='  px-4 py-3 border border-transparent text-base font-medium rounded-sm  bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3' onClick={connectWallet}> Connect Wallet </button> }
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className='flex lg:justify-start'>
                      <img
                        className="h-8 w-auto"
                        src={dark}
                        alt=""
                      />
                      <span className="lg-only  items-center py-2 px-3 justify-between">ORPHEUS</span>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  
                  <div className="px-1 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  { currentAccount ? <button className='px-4 py-3 border border-transparent text-base font-medium rounded-sm  bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 mb-4 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3'> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </button> : 
                  <button className='  px-4 py-3 border border-transparent text-base font-medium rounded-sm  bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 bg-gradient-to-r mb-4 from-gold-1 via-gold-2 to-gold-3' onClick={connectWallet}> Connect Wallet </button> }
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

      
        </div>
      </div>
    </div>

  );
}

export default Header;


