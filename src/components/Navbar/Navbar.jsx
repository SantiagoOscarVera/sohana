import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';


function NavBar() {

    // bg-gradient-to-r from-gray-700 to-gray-200 rounded-l-full 
    return (
        <div className='flex justify-between xl:mx-10 xl:my-5 xl:border xl:rounded-full xl:px-20 h-20 xl:h-auto shadow-xl  bg-violet-200 text-purple-700 px-8'>
            <div className="flex items-center ">
                <Link>
                    <div className="flex items-center">
                        <img
                            src="https://media.discordapp.net/attachments/1122693536085721108/1122734525282267176/lila.png"
                            alt="Logo"
                            style={{ width: '5%', height: '5%' }}
                            className="mr-4 mt-2 mb-2"
                        />
                        <h1 className="text-purple-700 text-2xl font-medium">Sohana</h1>
                    </div>
                </Link>
            </div>

            <Button icon="pi pi-bars" className="xl:hidden" text size="large" style={{  color: 'var(--purple-color)' }} />

            <div className='hidden xl:flex items-center '>
                <ul className='flex gap-10'>

                    <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-purple-100 before:transition hover:before:scale-x-100">
                        <Link>Home</Link>
                    </li>
                    <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-purple-100 before:transition hover:before:scale-x-100">
                        {/* <Link>f</Link> */}
                    </li>

                    <li className={`relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-purple-100 before:transition hover:before:scale-x-100 `}>
                        <button /* to={"/"} */>Profile</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
