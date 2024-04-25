import {LOGIN_API} from "@/constants/api.consts";
import {FormEvent, useState} from "react";
import {useRouter} from "next/router";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    router: any
}

const LoginPanel: React.FC<ModalProps> = ({isOpen, onClose, router}) => {
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')

        const response = await fetch(LOGIN_API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
        })
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('access_token', data.jwttoken)
            localStorage.setItem('refresh_token', data.refreshtoken)
        } else {
            // Handle errors
        }
    }

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
                <div className="bg-white p-4 rounded-lg shadow-lg rounded-none h-full">
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

                                <form
                                    onSubmit={handleSubmit}
                                    className="mx-auto flex flex-col space-y-4"
                                >
                                    <div className="relative" dir="ltr">
                                        <div
                                            className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                            <svg width="15" height="21" viewBox="0 0 15 21" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5 19.5C2.79086 19.5 1 17.7091 1 15.5V5C1 2.79086 2.79086 1 5 1H10C12.2091 1 14 2.79086 14 5V15.5C14 17.7091 12.2091 19.5 10 19.5H5Z"
                                                    stroke="#CBC7C7" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M5.5 16.25H9.5" stroke="#CBC7C7" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.5 4.25H7.51" stroke="#CBC7C7" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <input
                                            name="username"
                                            type="text" id="email-address-icon"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="09..."/>
                                    </div>
                                    <div className="relative" dir="ltr">
                                        <div
                                            className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 width="16px" height="16px" viewBox="0 0 94.38 122.88"
                                                 enableBackground="new 0 0 94.38 122.88" xmlSpace="preserve"><g>
                                                <path fill='#CBC7C7' d="M8.723,45.706h2.894v-8.729c0-10.139,3.987-19.368,10.412-26.069C28.479,4.177,37.386,0,47.19,0 c9.805,0,18.711,4.177,25.163,10.907c6.424,6.701,10.411,15.931,10.411,26.069v8.729h2.894c2.401,0,4.583,0.98,6.162,2.56 s2.56,3.761,2.56,6.162v59.73c0,2.401-0.98,4.583-2.56,6.162s-3.761,2.56-6.162,2.56H8.723c-2.402,0-4.583-0.98-6.163-2.56 S0,116.56,0,114.158v-59.73c0-2.401,0.981-4.583,2.56-6.162C4.14,46.687,6.321,45.706,8.723,45.706L8.723,45.706z M44,87.301 L39.81,98.28h14.762l-3.884-11.13c2.465-1.27,4.15-3.84,4.15-6.803c0-4.223-3.425-7.647-7.647-7.647 c-4.223,0-7.648,3.425-7.648,7.647C39.542,83.432,41.369,86.091,44,87.301L44,87.301z M17.753,45.706h58.875v-8.729 c0-8.511-3.326-16.236-8.686-21.826C62.61,9.589,55.265,6.137,47.19,6.137S31.77,9.589,26.438,15.15 c-5.359,5.59-8.686,13.315-8.686,21.826V45.706L17.753,45.706z M85.658,51.843H8.723c-0.708,0-1.353,0.292-1.823,0.762 c-0.47,0.47-0.762,1.116-0.762,1.823v59.73c0,0.707,0.292,1.353,0.762,1.822c0.47,0.471,1.116,0.762,1.823,0.762h76.936 c0.708,0,1.354-0.291,1.823-0.762c0.47-0.47,0.762-1.115,0.762-1.822v-59.73c0-0.707-0.292-1.353-0.762-1.823 C87.011,52.135,86.366,51.843,85.658,51.843L85.658,51.843z"/></g>
                                            </svg>
                                        </div>
                                        <input
                                            name="password"
                                            type="password" id="password-icon"
                                            className="bg-gray-50 border site-font border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="کلمه عبور"/>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <span className="site-font text-justify	text-sm	">
                                            با ورود و یا ثبت نام ، <span className="underline underline-offset-4">شرایط و قوانین استفاده</span> از فروشگاه رو و <span
                                            className="underline underline-offset-4">قوانین حریم خصوصی</span> آن را می‌پذیرم
                                        </span>
                                        <button
                                            type="submit"
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