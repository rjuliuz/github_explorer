import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { BASE_URL, client_id, client_secret } from "../constants/urls";
import { goToProfile } from "../routes/coordinator";

const RequestContext = createContext();

export const RequestProvider = ({children}) => {    
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);       

    const getData = (context, history) => {     
      axios
        .get(`${BASE_URL}/${input}?client_id=${client_id}&client_secret=${client_secret}`)
        .then((response) => {          
          if(response.status === 200){
            setData(response.data);
            if (context === "landing") {              
              goToProfile(history);
            } else {              
            }
          } else if ( response.status === 404 ){            
            alert("Coloque um usuário válido!")
          }          
        })
        .catch((error) => alert("Coloque um usuário Válido!"));     
    };   

    return(
        <RequestContext.Provider value={{ 
          input,
          setInput,
          data,
          setData,
          getData                  
          }}>
            {children}
        </RequestContext.Provider>
    )
}

export default function useRequest(){
  const request = useContext(RequestContext)
  const { input, setInput, data, setData, getData } = request
  return { input, setInput, data, setData, getData }
}