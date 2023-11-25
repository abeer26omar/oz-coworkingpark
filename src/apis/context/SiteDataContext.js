import { createContext, useEffect , useState } from "react";
import axios from "axios";

const DataContext = createContext();

const  DataProvider = ({children})=>{
    const [data , setData] = useState([]);
    const [pageName, setPageName] = useState('');
    const [error, setError] = useState(null);

    const config = async (pageName, signal)=>{
        const config = {
            method: 'get',
            url: `${process.env.REACT_APP_API_CONFIG_URL}/api/config?page=${pageName}`,
            signal: signal
        };
        const response = await axios(config);
        return response.data.data;
    }
    
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        config(pageName, signal).then(res =>{
            setData(res);
        })
        .catch(err =>{
            setError(err)
        });
        return ()=>controller.abort();
    },[pageName]);


    const getComponentValue = (param) => {
        const matchingItems = data.filter(ele => ele.key.match(param));
        return matchingItems;
    };

    const ResetPageName = (page) => {
        setPageName(page)
    }

    return(
        <DataContext.Provider value ={{config, data, ResetPageName, getComponentValue }}>
            {children}
        </DataContext.Provider>
        )
};

export { DataContext, DataProvider}

