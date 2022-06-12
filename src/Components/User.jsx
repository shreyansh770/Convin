import axios from "axios";
import "../style/user.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/actions";
import * as ReactBootStrap from "react-bootstrap";
const { useEffect } = require("react");

let User = () => {
  let dispatch = useDispatch();


  const [noOfuser, setNoUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  let getUsers = async () => {
    try {
      let res = await axios.get("https://reqres.in/api/users?page=1/");

      // storing data in redux store
      dispatch(saveUser(res.data));
      setNoUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // event bubbling
  let handleBubble = async (e) => {
    if (e.target.nodeName !== "BUTTON") return;

    try {
      let id = e.target.innerText;

      if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
      }

      e.target.classList.add("active");

      setLoading(true);

      let user = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(user.data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user == null ? (
        <div className="user-infoBox">
          <div className="info-box">
            {loading ? (
              <>
                <ReactBootStrap.Spinner animation="border" />
              </>
            ) : (
              <>
                {" "}
                <div className="user_ne">
                  <h2>Please click on button to get user info</h2>
                  <div className="user_ne_img"></div>
                </div>
                <div className="user-basics">
                  <h4></h4>
                </div>
              </>
            )}
          </div>
          <div
            className="indv-btn"
            onClick={(e) => {
              handleBubble(e);
            }}
          >
            {noOfuser.map((user) => {
              return (
                <div className="btn-div">
                  <button>{user?.id}</button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="user-infoBox">
          <div className="info-box">
            {loading ? (
              <>
                <ReactBootStrap.Spinner animation="border" />
              </>
            ) : (
              <>
                {" "}
                <div className="user_ne">
                  <>
                    <h2>
                      {user?.first_name} {user?.last_name}
                    </h2>
                    <div className="user_ne_img">
                      <img src={user?.avatar} alt="" />
                    </div>
                  </>
                </div>
                <div className="user-basics">
                  <h4>{user?.email}</h4>
                </div>
              </>
            )}
          </div>
          <div
            className="indv-btn"
            onClick={(e) => {
              handleBubble(e);
            }}
          >
            {noOfuser.map((user) => {
              return (
                <div className="btn-div">
                  <button>{user?.id}</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default User;
