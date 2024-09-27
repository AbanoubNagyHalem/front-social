import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navvbar/Navbar";
import Home from "./components/Home/Home";
import Likes from "./components/Likes/Likes";


import "./App.css";
import Chats from "./components/Chats/Chats";
import Market from "./components/Market/Market";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [data, setData] = useState([]);

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
    fetchPosts();
  }, []);

  console.log(data);

  const handleAddPost = (newPost) => {
    setData((prevData) => [newPost, ...prevData]);
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
