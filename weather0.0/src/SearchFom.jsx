import { useState } from "react";
export default function SearchForm({search}){
    const [city,setCity] = useState("");
    const handleChange =(e) =>{
        setCity(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        search(city)
        setCity("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={city}/>
            <button>Search</button>
        </form>
    )
}