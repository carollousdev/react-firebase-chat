import { collection, doc, getDocs } from "firebase/firestore";
import "./addUser.css";
import { auth, db } from "../../../../lib/firebase";

const AddUser = () => {
  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { username } = Object.fromEntries(formData);

    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);

    const allUsers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(allUsers);
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
