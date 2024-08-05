import React from 'react'

const Header = () => {
    return (
        <div className=' bg-black'>
            <h1 className="container mx-auto flex justify-between py-4 text-white">
                <div className='px-4 py-[10px]'>
                    Logo here
                </div>
                <div>
                    <ul className='flex px-4 gap-8'>
                        <li className='cursor-pointer px-[10px] py-2 rounded-lg hover:text-black hover:bg-white'>Home</li>
                        <li  className='cursor-pointer px-[10px] py-2 rounded-lg hover:text-black hover:bg-white'>Contato</li>
                        <li  className='cursor-pointer px-[10px] py-2 rounded-lg hover:text-black hover:bg-white'>Produtos</li>
                    </ul>
                </div>
            </h1>
        </div>
    )
}

export default Header
