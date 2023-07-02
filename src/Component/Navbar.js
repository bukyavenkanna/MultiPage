import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <center>
                    <h1  style={{color:"brown"}}>Welcome To multiPage</h1>
                    <Link to="/">Home</Link> &nbsp;&nbsp;
                    <Link to="/Dasboard">Dasboard</Link> &nbsp;&nbsp;
                    <Link to="/Contact">Contact</Link> &nbsp;&nbsp;
            
            </center>
        </div>
    )
}
export default Navbar;