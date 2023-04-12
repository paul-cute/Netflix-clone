import React, { useEffect, useState } from 'react'
import {BellIcon, SearchIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import useAuth from '../hooks/useAuth';

function Header() {

    const [isScroll, setIsScroll] = useState(false);
    const {logout} = useAuth()

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    

  return (
    <header className={`${isScroll && "bg-[#141414]"}`}>
        {/* Left side */}
        <div className='flex items-center space-x-2 md:space-x-10'>
            <img  
                src="https://rb.gy/ulxxee" 
                alt="Netflix image" 
                width={100}
                height={100}
                className='cursor-pointer object-contain'
            />

            <ul className='hidden space-x-4 md:flex'>
                <li className='headerLink'>Home</li>
                <li className='headerLink'>Tv Show</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>My List</li>
            </ul>
        </div>

        {/* Right side */}
        <div className='flex items-center space-x-4 text-sm font-light'>
            <SearchIcon className='hidden h-6 w-6 sm:inline'/>
            <p className='hidden lg:inline'>Kids</p>
            <BellIcon className='h-6 w-6'/>
            <Link href="/account">
                <img 
                    onClick={logout} 
                    src="https://rb.gy/g1pwyx"
                    alt=""
                    className="cursor-pointer rounded" />
            </Link>
        </div>
    </header>
  )
}

export default Header