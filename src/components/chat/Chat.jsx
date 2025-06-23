import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

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
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
              aperiam facilis nobis. Quisquam illum similique, voluptas neque
              repellendus ad numquam dignissimos, adipisci corporis in facere
              ipsum repudiandae dolor distinctio.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message own">
          <div className="texts">
            <img
              src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
              aperiam facilis nobis. Quisquam illum similique, voluptas neque
              repellendus ad numquam dignissimos, adipisci corporis in facere
              ipsum repudiandae dolor distinctio.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
              aperiam facilis nobis. Quisquam illum similique, voluptas neque
              repellendus ad numquam dignissimos, adipisci corporis in facere
              ipsum repudiandae dolor distinctio.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
              aperiam facilis nobis. Quisquam illum similique, voluptas neque
              repellendus ad numquam dignissimos, adipisci corporis in facere
              ipsum repudiandae dolor distinctio.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
              aperiam facilis nobis. Quisquam illum similique, voluptas neque
              repellendus ad numquam dignissimos, adipisci corporis in facere
              ipsum repudiandae dolor distinctio.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
