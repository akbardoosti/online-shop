// components/Modal.tsx

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Search: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const style = {
        width: '100%',
        borderRadius: 0,
        paddingInline: '20px'
    };
    return (
        <div>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black z-50 opacity-50 transition-opacity ${isOpen ? 'block' : 'hidden'
                    }`}
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div
                className={`fixed z-50 inset-0 block items-center justify-center transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="bg-white p-4 rounded-lg shadow-lg" style={style}>
                    <div className="flex justify-between items-center">
                        <form className='w-full'>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="site-font block w-full p-4 ps-10 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="جستجو در محصولات" required />
                            </div>
                        </form>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-600 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="modal-content hidden">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
