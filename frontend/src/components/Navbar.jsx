import React from 'react'
import { Link } from 'react-router-dom';
import { PlusCircleIcon, PlusIcon } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="navbar bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-4xl font-bold text-primary tracking-tight">Notes App</h1>
                    <div className="flex items-center gap-4">
                        {/* <Link to="/create" className="btn btn-primary">
                            <PlusIcon className="size-5" />
                            <span> New Note </span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Navbar
