/* eslint-disable no-unused-vars */
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
      mylike: 0,
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
      mylike: 1,
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
      mylike: 1,
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
  ]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </Fragment>
  );
};

export default App;
