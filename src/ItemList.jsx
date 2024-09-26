import { useState } from "react";
import { useEffect } from "react";

function Item({name, isPacked=false}) {
    return (<li>
        {name} {isPacked && '✔' || !isPacked && '✘'}
    </li>);
}

export default function ItemList() {
    const [keyword, setKeyword] = useState('');
    useEffect(()=> {
        console.log("this component is loaded")
        return ()=>{
            alert("component unloaded!")
        }
    },[]);

    const items = [{name:"Sunglasses",isPacked:1}, 
        {name:"Sunblock", isPacked:0}, 
        {name:"Swimming suit", isPacked:1},  
        {name:"Powerbank", isPacked:0},
        {name:"Towel", isPacked:1}
    ];


    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()));
    
    const itemList=filterList.map(i=> <Item key={i.name} 
        name={i.name} isPacked={i.isPacked}/>);

    return (
        <>
        <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value) }/>
        <ui>
            {itemList}
        </ui></>
        
    );
}