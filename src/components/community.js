import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import web from '../images/web.png'
import email from '../images/email.png'
import medium from '../images/medium.png'
import instagram from '../images/instagram.png'
import linkedIn from '../images/linkedIn.png'



export default function Community() {
  return (
      <div id='touch' className='mt-10   mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-28 lg:px-8 xl:mt-18'>
        
            <h2 className='text-transparent uppercase font-bold text-3xl font-bold bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3'>Let’s Connect</h2>
            <h2 className='text-wBgText-1 dark:text-white uppercase mt-4'>Get in touch for opportunities or just to say hi! 👋</h2>
            <div class="flex justify-center mt-6">
                <img className='mx-2' src={linkedIn} />
                <img className='mx-2' src={web} />
                <img className='mx-2' src={instagram} />
                <img className='mx-2' src={medium} />
                <img className='mx-2' src={email} />
            </div>

            
    </div>
    )
  }
  