import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { BASE_URL, client_id, client_secret } from "../constants/urls";

const RequestContext = createContext();

export const RequestProvider = ({children}) => {

    const [input, setInput] = useState("");
    const [data, setData] = useState([]);   

    const getData  = () => {
      axios
        .get(`${BASE_URL}/${input}?client_id=${client_id}&client_secret=${client_secret}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error.message));
    };   

    return(
        <RequestContext.Provider value={{ 
          input,
          setInput,
          data,
          setData,
          getData,          
          }}>
            {children}
        </RequestContext.Provider>
    )
}

export default function useRequest(){
  const request = useContext(RequestContext)
  const {input, setInput, data, setData, getData } = request
  return {input, setInput, data, setData, getData}
}