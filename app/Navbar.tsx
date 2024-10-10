"use client"
import classNames from 'classnames';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';

const Navbar = () => {
    
    
    const currentPath = usePathname();

    const links = [
        {label : 'Dashboard', href:'/'},
        {label : 'Issues', href:'/issues'}
    ]
  return (
   <nav className='text-black flex space-x-6 border-b mb-5 px-5 h-14 items-center' >
    <Link href="/" ><AiFillBug /></Link>
    <ul className='flex space-x-6 ' >
        {links.map((link,i)=>(
            <Link 
            key={i} 
            className={classnames({
                'text-blue-600': link.href === currentPath,
                'text-zinc-500':link.href !== currentPath,
                'hover:text-zinc-800 transition-colors ':true,
                'font-bold':true
            })}
            href={link.href}>{link.label}</Link>
        ))}
        
    </ul>
   </nav>
  )
}

export default Navbar