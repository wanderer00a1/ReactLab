const API_KEY = "YOUR_API_KEY"
const URL = "http://api.weatherapi.com/v1/current.json"

import {useState,useEffect} from "react";
import SearchForm from "./SearchFom";
import { OrbitProgress } from "react-loading-indicators";
import axios from "axios";

function Weather(){
    
    const [loc,setLocation] = useState("london");
    const [temp,setTemp] = useState({data:null,isLoading:true});

    useEffect(function fetchWeather(){
        async function fetchInfo(){
            try{
                const response = await axios.get(`${URL}?key=${API_KEY}&q=${loc}&aqi=no`);
                setTemp({data:response.data,isLoading:false});
            }catch(e){
                setTemp({data:null,isLoading:true});
                console.log("NOT FOUND!");
            }

        }
        fetchInfo();
    },[loc])
    function search(loc){
        setTemp({data:null,isLoading:true})
        setLocation(loc);
    }
    if(temp.isLoading) return <OrbitProgress color="#cc7431" size="medium" text="" textColor="" />
    return(
        <div>
            <SearchForm search={search}/>
            {temp.data ?
                (<>
                <b>{temp.data.current.temp_c}</b><br/>
                <b>{temp.data.current.condition.text}</b>
                <p>{temp.data.location.name}</p>
                <p>{temp.data.location.region}</p>
                </>):(
                    <p>No Result Found</p>)
                    
            }
        </div>
    )

}
export default Weather;