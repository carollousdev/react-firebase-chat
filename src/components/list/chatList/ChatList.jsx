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
  const [input, setInput] = useState();

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
    setAddMode(false);
  };

  const filterChat = input
    ? userChats.filter((param) =>
        param.user.username.toLowerCase().includes(input)
      )
    : userChats;

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      {filterChat.map((chat) => {
        return (
          <div
            className="item"
            key={chat.chatId}
            onClick={() => handleSelect(chat)}
          >
            <img
              src={`https://ui-avatars.com/api/?name=${currentUser.username[0]}&background=111928&color=ACACAB`}
              alt=""
            />
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
