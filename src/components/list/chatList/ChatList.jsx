import { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      <div className="item">
        <img src="./carollous.jpg" alt="" />
        <div className="texts">
          <span>Carollous Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Paulus Dachi</span>
          <p>How are you today ?</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Josua Christian Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Dirga Putra Dachi</span>
          <p>This is a new messages.</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
