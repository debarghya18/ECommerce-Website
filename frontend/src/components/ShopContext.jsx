import  {createContext} from 'react'
import { products } from '../assets/assets';
export const ShopContext=createContext();

const ShopContextProvider = () =>{

    const currency= 'Rs.';
    const deliveryFee=10;

    const value={
        products,currency,deliveryFee
    }
    return(
        <ShopContextProvider value={value}>
            {props.children}
        </ShopContextProvider>
    )
}

export default ShopContextProvider;