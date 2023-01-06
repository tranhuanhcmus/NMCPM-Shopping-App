import "./userList.css";

import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUser(res.data);
      } catch {

      }
    }
    getUsers();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Join Members</span>
      <ul className="widgetSmList">
        {users.map(user => (
          <li className="widgetSmListItem" key ={user._id}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIzLd2AEYnEMBJWAhnZH5Gg9txQdwWZLVxQ&usqp=CAU"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
