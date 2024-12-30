import { useState } from 'react';
import Items from './Searches'

export default function inputBox() {
    const [text, setText] = useState("")
    
    let search = e.target.value.toLowerCase();
    let autocomplete = [];
    for (i of Items){
        console.log(i);
        
        if (i.includes(search)) {
            autocomplete.push(most_searched[Items.indexOf(i)])
        }
    }
    
    return (
        <>
            <input type="text" 
            onChange = {(e) => setText(e.target.value)}/>
            <div className="container">
                {autocomplete}
            </div>
        </>
    )
 }