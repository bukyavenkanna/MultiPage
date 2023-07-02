import { useState } from "react";

export const Home=()=>{
    const [data,setData]=useState("")
    const onchangeHandler=e=>{
        setData(e.target.value)
    }
    return(
        <div>
            <center>
                <h1 style={{color:"green"}}>Welcome To HomePage.....</h1>
                <input type="text" value={data} placeholder="enter name" onChange={onchangeHandler}/>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={()=>setData("Kanna Rathod")}>Click</button><br/><br/>
                {data}
            </center>
           
        </div>
    )
}
export default Home;