import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchproduct } from '@/redux/actions/actions';


export const Porducts = () => {
    const { products } = useSelector(state => state.products); // Ensure correct key
    console.log(products);
    
    const dispatch = useDispatch();
    useEffect ( () => {
        dispatch(fetchproduct())
    }, []) ;
  return (
    <div>Porducts</div>
  )
}

// export default Porducts