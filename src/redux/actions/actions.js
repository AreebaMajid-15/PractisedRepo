import axios from "axios"


 export const FETCH_PRODUCTS = "FETCH_PRODUCTS"

export const fetchproduct =() => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch( { try: FETCH_PRODUCTS , payload: response.data});
};