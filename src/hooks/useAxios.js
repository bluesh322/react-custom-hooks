import axios from "axios";
import { useState} from "react";
import uuid from "uuid";

const useAxios = (url) => {
    const [data, setData] = useState([]);
    
        const fetchData = async (option = '') => {
            try {
                let res;
                if(option === '') {
                    res = await axios.get(url);
                } else {
                    res = await axios.get(`${url}/${option}`)
                }
                setData(d => [...d, {...res.data, id: uuid()}]);
            } catch (e) {
                alert("Something went wrong");
            }
        };

        const removeData = () => {
            setData(d => []);
        }
    return [data, fetchData, removeData];
}

export default useAxios;