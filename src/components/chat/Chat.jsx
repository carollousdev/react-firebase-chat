import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img
            src="https://ui-avatars.com/api/?name=P&background=111928&color=ACACAB"
            alt=""
          />
          <div className="texts">
            <span>Paulus Dachi</span>
            <p>online</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">Center</div>
      <div className="bottom">
        <div className="icons">icons</div>
        <input type="text" placeholder="Type a message..." />
        <div className="emoji">
          <img src="./emoji.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
