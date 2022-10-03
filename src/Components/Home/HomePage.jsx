import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllUser } from "../../redux/apiRequest";
import "./home.css";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (userId) => {
    console.log(userId);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.data.accessToken) {
      getAllUser(user?.data.accessToken, dispatch);
    }
  }, []);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${user?.data.admin ? "admin" : "member"}`}
      </div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.userName}</div>
              <div
                className="delete-user"
                onClick={() => {
                  handleDelete(user._id);
                }}
              >
                {" "}
                Delete{" "}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
