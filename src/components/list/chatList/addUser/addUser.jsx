import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import "./addUser.css";
import { db } from "../../../../lib/firebase";
import { useState } from "react";

import { toast } from "react-toastify";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser, toogleAdd, toogleCheck } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { username } = Object.fromEntries(formData);

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty && username !== currentUser.username) {
        setUser(querySnapshot.docs[0].data());
      } else throw new Error("Username is not found / cannot be same");
    } catch (error) {
      toast.error("Username is not found / cannot be same");
    } finally {
      toogleAdd(true);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const newChatRef = doc(chatRef);
    const userChatsRef = collection(db, "userchats");

    try {
      const docRef = doc(userChatsRef, currentUser.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const getDataSnapshot = docSnap.data();
        const userChatsIndex = getDataSnapshot.chats.findIndex((chat) => {
          chat.receiverId === user.id;
        });

        if (userChatsIndex === -1) {
          await setDoc(newChatRef, {
            createdAt: serverTimestamp(),
            messages: [],
          });
          await updateDoc(doc(userChatsRef, currentUser.id), {
            chats: arrayUnion({
              chatId: newChatRef.id,
              lastMessage: "",
              receiverId: user.id,
              updatedAt: Date.now(),
            }),
          });
          await setDoc(doc(userChatsRef, user.id), {
            chats: arrayUnion({
              chatId: newChatRef.id,
              lastMessage: "",
              receiverId: currentUser.id,
              updatedAt: Date.now(),
            }),
          });
        }
      } else {
        await setDoc(newChatRef, {
          createdAt: serverTimestamp(),
          messages: [],
        });
        await setDoc(doc(userChatsRef, currentUser.id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: user.id,
            updatedAt: Date.now(),
          }),
        });
        await setDoc(doc(userChatsRef, user.id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: currentUser.id,
            updatedAt: Date.now(),
          }),
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      toogleAdd(false);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        {user && (
          <div className="detail" key={user.id}>
            <img
              src={`https://ui-avatars.com/api/?name=${user.username[0]}&background=111928&color=ACACAB`}
              alt=""
            />
            <span>{user.username}</span>
            <button onClick={handleAdd}>Add User</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
