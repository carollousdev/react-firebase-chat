import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [userChats, setUserChats] = useState([]);

  const { currentUser, toogleCheck } = useUserStore();
  const { changeChat } = useChatStore();

  useEffect(() => {
    setAddMode(toogleCheck);
  }, [toogleCheck]);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        if (res.data()) {
          const items = res.data().chats;
          const promises = items.map(async (item) => {
            const userDocRef = doc(db, "users", item.receiverId);
            const userDocSnap = await getDoc(userDocRef);

            const user = userDocSnap.data();
            return { ...item, user };
          });

          const chatData = await Promise.all(promises);
          setUserChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        }
      }
    );
    return () => unSub();
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    changeChat(chat.chatId, chat.user);
  };

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
      {userChats.map((chat) => {
        return (
          <div
            className="item"
            key={chat.chatId}
            onClick={() => handleSelect(chat)}
          >
            <img src="./carollous.jpg" alt="" />
            <div className="texts">
              <span>{chat.user.username}</span>
              <p>{chat.lastMessage}</p>
            </div>
          </div>
        );
      })}

      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
