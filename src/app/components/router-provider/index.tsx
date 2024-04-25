// Create a RouterContext.js file
import {createContext, useContext} from 'react';
import {useRouter} from 'next/router';

const RouterContext = createContext({});

export const RouterProvider = ({children}:{children: any}) => {
    const router = useRouter();
    return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
};

export const useCustomRouter = () => useContext(RouterContext);
