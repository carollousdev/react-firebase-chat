import { useEffect } from "react";
import { useChatStore } from "../../lib/chatStore";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {
  const { currentUser } = useUserStore();
  const { user, changeChat, resetStore } = useChatStore();

  const detailUser = user ? user.username : currentUser.username;

  return (
    <div className="detail">
      <div className="user">
        <img
          src={`https://ui-avatars.com/api/?name=${detailUser}&background=111928&color=ACACAB`}
          alt=""
        />
        <h2>{detailUser}</h2>
        <p>Online</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        {/* <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div> */}
        {/* <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>
        </div> */}
        {user && <button>Block User</button>}
        <button
          className="logout"
          onClick={() => {
            resetStore();
            auth.signOut();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
