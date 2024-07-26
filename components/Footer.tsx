import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-800 mt-auto" >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-4 menu-items">
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-400">
                            Home
                        </a>
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-400">
                            About
                        </a>
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-400">
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 menu-items">
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-400">
                            Privacy
                        </a>
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-400">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer