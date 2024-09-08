import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navvbar/Navbar";
import Home from "./components/Home/Home";
import Likes from "./components/Likes/Likes";

import profile from "./assets/profilePic.jpg";

import "./App.css";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      profilePic: profile,
      name: "Ahmed Negm",
      content: "Had a great time at the beach!",
      postImage: profile,
      likes: 120,
      mylike: true,
      comments: [
        {
          id: 1,
          profilePic: profile,
          name: "John Doe",
          content: "Looks amazing!",
          timestamp: "2024-09-07T13:00:00",
        },
        {
          id: 2,
          profilePic: profile,
          name: "Jane Smith",
          content: "Wish I was there!",
          timestamp: "2024-09-07T14:20:00",
        },
      ],
      timestamp: "2024-09-07T12:34:56",
    },
    {
      id: 2,
      profilePic: profile,
      name: "John Doe",
      content: "Loving the new React update!",
      postImage: null,
      likes: 200,
      mylike: false,
      comments: [],
      timestamp: "2024-09-06T15:20:30",
    },
    {
      id: 3,
      profilePic: profile,
      name: "Jane Smith",
      content: "Just finished a great book!",
      postImage: null,
      likes: 85,
      mylike: false,
      comments: [
        {
          id: 3,
          profilePic: profile,
          name: "Mike Johnson",
          content: "Which book did you read?",
          timestamp: "2024-09-05T11:00:00",
        },
      ],
      timestamp: "2024-09-05T10:15:00",
    },
    {
      id: 4,
      profilePic: profile,
      name: "Alice Johnson",
      content: "Looking forward to the weekend!",
      postImage: null,
      likes: 50,
      mylike: false,
      comments: [],
      timestamp: "2024-09-08T08:30:00",
    },
  ]);

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
      profilePic: profile,
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
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </Fragment>
  );
};

export default App;
