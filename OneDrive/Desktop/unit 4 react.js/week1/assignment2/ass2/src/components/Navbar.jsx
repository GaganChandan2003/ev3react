import React from "react";
import Links from "./Links.jsx"

let links=[
    {link:"Services"},
    {link:"Projects"},
    {link:"About"}
]
let Navbar=()=>
{
    return <div className="Navbar">
    <div className="Logo-LogoBakery">
            <div>
                <h3>LOGOBAKERY</h3>
            </div>
    </div>
    <div className="Links">
    {
        links.map((el)=>
        (
            <Links value={el}/>
        ))
    }
    </div>
    
     <div>
         <button className="Contact">Contact</button>
     </div>
     
    </div>
    
}

export default Navbar