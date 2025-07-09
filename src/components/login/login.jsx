import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // const { email, password } = e.target;
    toast.warn("Silahkan masukkan email dan password");
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img
              src={avatar.url || "./avatar.png"}
              alt=""
              className="mypictures"
            />
            Upload your image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
