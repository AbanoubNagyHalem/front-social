import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navvbar/Navbar";
import Home from "./components/Home/Home";
import Likes from "./components/Likes/Likes";

import "./App.css";
import Chats from "./components/Chats/Chats";
import Market from "./components/Market/Market";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

const App = () => {
  const [data, setData] = useState([]);
  const [getUser, setGetUser] = useState(null);

  console.log(getUser);

  // console.log(localStorage.token);

  const checkUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:3000/users/me", {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setGetUser(data);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    } else {
      console.error("No token found in localStorage");
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    checkUser();
    fetchPosts();
  }, []);

  const handleLogin = async (userData) => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { token } = await response.json();

      localStorage.token = token;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleAddPost = (newPost) => {
    console.log(newPost);

    // setData((prevData) => [newPost, ...prevData]);
  };

  const changeLike = (id) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === id
          ? {
              ...post,
              mylike: !post.mylike,
              likes: post.mylike ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = (comment, id) => {
    const newComment = {
      id: Math.random(),
      name: "Abanoub Nagy",
      content: comment,
      timestamp: new Date().toISOString(),
    };

    setData((prevData) =>
      prevData.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, newComment],
            }
          : post
      )
    );
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((post) => post.id !== id));
  };

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              changeLike={changeLike}
              handleComment={handleComment}
              handleAddPost={handleAddPost}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/likes"
          element={
            <Likes
              data={data}
              changeLike={changeLike}
              handleComment={handleComment}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="chats" element={<Chats />} />
        <Route path="market" element={<Market />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Fragment>
  );
};

export default App;
