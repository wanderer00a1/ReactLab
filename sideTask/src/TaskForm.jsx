import { IconButton, InputAdornment, ListItem } from "@mui/material";
import Create from "@mui/icons-material/Create"
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function TaskForm({Add}){
    const [work,setWork] = useState("");
    const handleChange = (e) =>{
        setWork(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        Add(work);
        setWork("");
    }
    return(
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="ADD TASK" 
            variant="outlined"
            onChange={handleChange}
            value={work}
            InputProps ={{
                endAdornment:
                <InputAdornment position = "end">
                    <IconButton aria-label="toggle password visibility" edge="end" type="submit">
                        <Create/>
                    </IconButton>
                </InputAdornment>
            }}
            />
            </form>
        </ListItem>
    )
}