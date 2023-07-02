import { useState } from "react"

const Dasboard=()=>{
    const [data,setdata]=useState(0)
    const Adding=e=>{
        setdata(e.target.value)
    }
    return(
        <div>
            <center>
                <h2  style={{color:"red"}}>Welcome To Dasboard</h2>
                <input type="text" value={data} placeholder="Enter Number" onChange={Adding}/>&nbsp;&nbsp;
                <button className="btn btn-success" onClick={()=>setdata(data+1)}>Add</button>&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={()=>setdata(data-'1')}>sub</button><br/><br/>
                <h1>Result:{data}</h1>
            </center>
        </div>
    )
}
export default Dasboard