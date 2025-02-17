import { useState } from 'react';
import './Box.css';
function Box({isActive,toggle}){
    return <div onClick={toggle} className="Box" style={{backgroundColor:isActive?"black":"white"}}></div>
}
export default Box;