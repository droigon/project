import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import mask from '../images/contribution.png'
import line from '../images/line.png'
import download from '../images/download.png'


export default function Recent() {
  return (
      <div id='contribution' className='mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-5 lg:mb-5 lg:px-8 xl:mt-18 xl:mb-18'>
          <div className='relative  flex'>
              <h2 className='text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3'>CONTRIBUTION</h2>
              <img className='px-4 ' src={line} />
              <p className='text-wBgText-1 dark:text-white font-small  font-small py-1.5 '>VIEW MORE</p>
          </div><br></br>
       
           <div className=' md:grid grid-cols-2 gap-4 w-full'>
               <div>
                <img src={mask} className='' />
                </div>
               <div className='mt-4 text-left '>
                   <h2 className='font-Cinzel mb-15 text-3xl tracking-tight font-bold sm:text-4xl uppercase md:text-6xl font-strong  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 xl:inline'>3D Greek Statue Pack</h2>
                   <h3 className='dark:wBgText-2 dark:text-white mb-5 mt-5 font-light uppercase sm:text-5xl md:text-3xl'>Over 200 Greek style sculpture</h3>
                            
          <div className='mt-3 sm:mt-0 sm:ml-3'>  
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-oph_black-1 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg  lg:px-10"
          >
          <img src={download} className="mr-1"/>Download
          </a>
        </div>

                </div>

           </div>

            
    </div>
    )
  }
  