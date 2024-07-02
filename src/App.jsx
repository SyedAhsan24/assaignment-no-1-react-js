import React from "react"
import './App.css'
import Card from "./Card/Card";



const App = ()=>{
  let username ="Ahsan";
  return(

<>
{/* inline css */}
<h1 style={{color:"red",background:"black",textAlign:"center"}}>hello{username}</h1>
{/* external css */}
<h1 id="heading">hello {username}</h1>

<Card title="card title 1" description="tis is a card 1 info..." img=" "/>
<Card title="card title 2" description="tis is a card 2 info..."/>
<Card title="card title 3" description="tis is a card 3 info..."/>
<Card title="card title 4" description="tis is a card 4 info..."/>

</>

  )
}

export default App
