import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import avatar from '../images/avatar.png'
import download from '../images/download.png'



export default function Recent() {
  return (
      <div id='community' className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-3 md:mt-6 lg:mt-20 lg:mb-5 lg:px-8 xl:mt-18 xl:mb-18'>
        
           <div className='md:grid grid-cols-2 gap-4 w-full bg-blend-multiply'>
                <img src={avatar} className='mt-10 md:mt-0 rounded-lg  shadow-md  brightness-50 ' />
                <div className='mt-4 text-left  md:justify-center'>
                   <h2 className='font-Cinzel mb-15 text-4xl tracking-tight uppercase  font-bold sm:text-4xl md:text-6xl font-strong  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 xl:inline'>Greek Statue Avatars</h2>
                   <h3 className='text-wBgText-2 dark:text-white mb-5 mt-5 font-light uppercase sm:text-3xl md:text-3xl'>+500 Greek style {' '} <span className=' font-semibold'>User Avatars</span></h3>
                   <div className='mt-3 sm:mt-0 sm:ml-3'>  
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-oph_black-1 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg  lg:px-10"
          >
          <img src={download} className="mr-1"/> Download
          </a>
        </div>

                </div>

           </div>

            
    </div>
    )
  }
  