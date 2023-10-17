import { createContext , useContext ,useEffect , useState } from "react";
import axios from "axios";


export const Data = createContext();

export const  DataProvider = ({children})=>{
const [data , setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
// const DataLocation = useData();
// const page_name = '';
 const config = async(page_name)=>{
 
    try{
        const config = {
            method: 'get',
            url: `${process.env.REACT_APP_API_CONFIG_URL}/api/config?page=${page_name}`
        };
       const response = await axios(config)
            return response.data.data;
    
    }catch(error){
        console.error(error);
    }


}
useEffect(()=>{
    config('').then(res =>{
        setData(res)
        setLoading(false)
    })
    .catch(err =>{
        setError(err)
        setLoading(false)
    })
},[])
const getComponentValue = (param) => {
    const matchingItems = data.filter(ele => ele.key.match(param));
    return matchingItems;
};

    return(
        <Data.Provider value ={{config , getComponentValue }}>
            {children}
        </Data.Provider>
        )
};


export const useData = ()=>{
    return(
        useContext(Data)
    )
}

