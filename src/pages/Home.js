import React, { useState, useEffect } from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";
import { signInWithGoogle, signOutFromGoogle, auth } from "../Firebase";
import userEvent from "@testing-library/user-event";
import Footer from "../components/Footer";

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkAuthentication = () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const name = currentUser.displayName;
        const photo = currentUser.photoURL;
        setUser({ name, photo });
      } else {
        setUser(null);
      }
    };

    auth.onAuthStateChanged(checkAuthentication);
  }, []);

  const handleSignInOrOut = () => {
    if (user) {
      // User is signed in, so sign them out
      signOutFromGoogle()
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // User is not signed in, so sign them in
      signInWithGoogle()
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="home">
      <div className="home-header">
        <div className="header-left">
          <a href="https://about.google/">About</a>
          <a href="https://store.google.com">Store</a>
        </div>
        <div className="header-right">
          <a href="https://accounts.google.com/InteractiveLogin/signinchooser?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AYZoVhfGZwfwgfBsGY1hw9agolVtoNy9ZzTru54zIeu1DK-oB4LTNxmxjtMfABsTKwS9T0u7qH5h6Q&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            Gmail
          </a>
          <a href="https://accounts.google.com/InteractiveLogin/signinchooser?authuser=0&continue=https%3A%2F%2Fphotos.google.com%2F&followup=https%3A%2F%2Fphotos.google.com%2F&osid=1&passive=1209600&service=lh2&ifkv=AYZoVhckVneXPWrUzg4qTkvWxgS7eEghr8XrbNSUHQ_87Zje9T6Awm3FOMEENYGkzv5R6YyQI58h1A&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            Images
          </a>
          <AppsIcon />
          <button
            onClick={handleSignInOrOut}
            style={{ background: "none", border: "none" }}
          >
            {user ? "" : <Avatar />}

            {user && <Avatar alt={user.name} src={user.photo} />}
          </button>
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />

        <div className="inputSearch-container">
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
