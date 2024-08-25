'use client'
import { createContext, useContext, useState } from "react";

const pageTitleContext = createContext<any>(null);

export const PageTitleWrapper = ({children} : {children: React.ReactNode}) => {

    const [getPageTitle, setPageTitle] = useState('Home')

    return(
        <pageTitleContext.Provider value={{getPageTitle, setPageTitle}} >
            {children}
        </pageTitleContext.Provider>
    )
}   

export const usePageTitleContext = () => {
    return useContext(pageTitleContext);
}
