import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import img_1 from '../images/img_1.png'
import img_2 from '../images/img_2.png'
import img_3 from '../images/img_3.png'
import img_4 from '../images/img_4.png'
import img_5 from '../images/img_5.png'
import line from '../images/line.png'



export default function Recent() {
  return (
      <div id='works' className='mt-20 mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-5 lg:px-8 xl:mt-18 xl:mb-24'>
          
              <div className='relative flex  ml-0'>
              <h2 className='text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3'>RECENT NFT</h2>
              <img className='px-4 ' src={line} />
              <p className='text-wBgText-1 dark:text-white font-small py-1.5'>VIEW MORE</p>
        
          </div><br></br>
          
       
            <div className=' md:grid grid-cols-3 gap-4 w-full'>
            <div class="relative overflow-hidden rounded-lg  shadow-lg cursor-pointer">
                <img class="object-cover w-full h-full"  src={img_1} />
                <div class="absolute bottom-0 left-0  px-6 py-4">
                <h4 class="mb-3 text-xl font-small tracking-tight text-white">Relics Of A Mortal Past 1 - NFT</h4>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-lg  shadow-lg cursor-pointer">
                <img class="object-cover h-full w-full" src={img_2} />
                <div class="absolute bottom-0 left-0  px-6 py-4">
                <h4 class="mb-3 text-xl font-small tracking-tight text-white">Relics Of A Mortal Past † - NFT</h4>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-lg  shadow-lg cursor-pointer">
                <img class="object-cover w-full h-full" src={img_3} />
                <div class="absolute bottom-0 left-0  px-6 py-4">
                <h4 class="mb-3 text-xl font-small tracking-tight text-white">Relics Of A Mortal Past 1 - NFT</h4>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-lg  shadow-lg cursor-pointer">
                <img class="object-cover w-full h-full" src={img_4} />
                <div class="absolute bottom-0 left-0  px-6 py-4">
                <h4 class="mb-3 text-xl font-small tracking-tight text-white">Relics Of A Mortal Past 1 - NFT</h4>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-lg  shadow-lg cursor-pointer">
                <img class="object-cover w-full h-full" src={img_5} />
                <div class="absolute bottom-0 left-0  px-6 py-4">
                <h4 class="mb-3 text-xl font-small tracking-tight text-white">Relics Of A Mortal Past 1 - NFT</h4>
                </div>
            </div>
            </div>
    </div>
    )
  }
  