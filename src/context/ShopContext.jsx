import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency ='₹';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(itemsId,size)=>{
      console.log("Adding to cart, itemsId:", itemsId, "size:", size);
      if (!itemsId) {
        console.error("Invalid itemsId:", itemsId);
        return; // Exit early if itemsId is invalid
      }
      
    if (!size) {
      toast.error('Select Product Size');
      return;
    }
      let cartData = structuredClone(cartItems);
      // console.log("cartData is:",cartData)
      // console.log("cartData val is:",cartData[itemsId])
      if (cartData[itemsId]) {
        if (cartData[itemsId][size]) {
          cartData[itemsId] [size] +=1;
        }
        else{
          cartData[itemsId][size] = 1;
        }
      }
      else{
        cartData[itemsId]={};
        cartData[itemsId][size]=1;
      }

      setCartItems(cartData);

    }
    
     const getCartCount =()=>{
      let totalCount = 0;
      for(const items in cartItems){
        for(const item in cartItems[items]){
             try {
              if (cartItems[items][item]>0) {
                totalCount += cartItems[items][item];
              }
             } catch (error) {
              
             }
        }
      }

      return totalCount;
     }


    const updateQuantity = async(itemsId,size,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemsId][size] = quantity;
    setCartItems(cartData);
    }


    const getCartAmount =  ()=>{
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items);
        for(const item in cartItems [items]){
           try {
            if (cartItems[items][item] >0) {
              totalAmount += itemInfo.price * cartItems[items][item];
            }
           } catch (error) {
            
           }
        }
      }
      return totalAmount;
    }


  const value = {
    products , currency , delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItems,addToCart,
    getCartCount,updateQuantity,
    getCartAmount,navigate
  }
  return (
  <ShopContext.Provider value={value}>
    {props.children}
  </ShopContext.Provider>
  )
};


export default  ShopContextProvider;