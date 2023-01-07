import { logout } from "../../redux/userRedux";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import "./Logout.css"

const Logout =()=>{
    const user = useSelector((state) => state.user.currentUser);
    const state=useSelector((state)=>state)
    const dispatch = useDispatch();
    return(
        <div className="Logout">
            <h1>welcome admin! have a nice day</h1>
            {
            user? 
            <Link style={{ textDecoration: "none" }} onClick={()=> {dispatch(logout(user));
            console.log(state);}} >
              <div className="BUTTON"><button>Log Out</button></div>
            </Link> 
            : <>
            <b>hello</b>
              </>
            }
        </div>
    )
}
export default Logout;