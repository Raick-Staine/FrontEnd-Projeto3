import React from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

export default function Topo() {
    return (
        <header>

        <div className="flex items-center justify-between p-4">
            <img className="h-30 w-30"  src='vivant-logo-clara.png' /> 

            <nav className="flex items-center justify-between p-4 gap-10">
                <a className='text-[24px]' href='#'>Home</a>
                <a className='text-[24px]' href='#'>Vinhos</a>
                <a className='text-[24px]' href='#'>Sobre nós</a>
                <a className='text-[24px]' href='#'>Contato</a>

                <a className='text-[28px]' href='#'> <PiShoppingCartThin /> </a>
                <a className='text-[28px]' href='#'> <CiUser /> </a>
            </nav>
        </div>

        </header>
    )
}