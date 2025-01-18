import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = () => {
    const value = {
        products
    }

    return (
        <ShopContextProvider value={value}>
            {props.childen}
        </ShopContextProvider>
    )
}

export default ShopContextProvider;