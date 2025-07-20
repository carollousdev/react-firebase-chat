import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img
          src="https://ui-avatars.com/api/?name=C&background=111928&color=ACACAB"
          alt=""
        />
        <h2>Carollous Dachi</h2>
        <p>Lorem ipsum, dolor.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            {/* <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div> */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
