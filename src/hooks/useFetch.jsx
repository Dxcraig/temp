import {useRef, useState} from "react";
import { API_BASE_URL } from "../config/api.js";

const useFetch =({method="GET",endpoint })=>{
    const [loading , setLoading] = useState(false)
    let response  = useRef({})


    async function fetchData({payload, token}) {
        setLoading(true)

        try{
             response.current =  await fetch(`${API_BASE_URL}${endpoint}`,
                {
                    method : `${method}`,
                    headers : {
                        "Content-type" : "application/json" ,
                        "Authorization" : `Bearer ${token}`
                    },
                    body : JSON.stringify(
                        payload
                    )
                }
            );

            if(response.current.ok){
                const data = await response.current.json()
                console.log(data)
            }

        } catch (error) {
            console.error("fetch error:", error);
            throw new Error(error)
        } finally {
            setLoading(false)
        }
    }

    return {loading , response, fetchData}
}

export default useFetch