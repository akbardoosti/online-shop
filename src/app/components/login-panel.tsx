interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const LoginPanel: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
                <div className="bg-white p-4 rounded-lg shadow-lg rounded-none h-full" >
                    <div className="flex justify-end items-center">
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
                    <div className="modal-content h-full">
                        <div className="flex flex-col h-full justify-center items-center h-full w-full space-y-5">
                            <div className="flex flex-col">
                                <span className="font-black text-base">
                                    Beauty
                                </span>
                                <span className="text-xs site-font mt-2 text-zinc-500">
                                    ثبت‌نام | ورود
                                </span>
                            </div>
                            <div className="flex flex-col  w-full sm:w-4/6 md:w-3/6 lg:w-2/6">
                                <span className="max-w-md site-font text-center">
                                    شماره موبایل خودتو وارد کن
                                </span>

                                <form className="mx-auto flex flex-col space-y-4">
                                    <div className="relative" dir="ltr">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                            <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 19.5C2.79086 19.5 1 17.7091 1 15.5V5C1 2.79086 2.79086 1 5 1H10C12.2091 1 14 2.79086 14 5V15.5C14 17.7091 12.2091 19.5 10 19.5H5Z" stroke="#CBC7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5.5 16.25H9.5" stroke="#CBC7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.5 4.25H7.51" stroke="#CBC7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09..." />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <span className="site-font text-justify	text-sm	">
                                            با ورود و یا ثبت نام ، <span className="underline underline-offset-4">شرایط و قوانین استفاده</span> از فروشگاه رو و <span className="underline underline-offset-4">قوانین حریم خصوصی</span> آن را می‌پذیرم
                                        </span>
                                        <button 
                                            type="button" 
                                            className="site-font text-white bg-red-600 rounded-lg p-2.5">
                                        ارسال رمز عبور
                                        </button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPanel;