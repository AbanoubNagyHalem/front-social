/* eslint-disable react/prop-types */
import { useState } from "react";
import profile from "../../assets/profilePic.jpg";
import "./AddPost.css";

const AddPost = ({ handleAddPost }) => {
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleCreatePost = () => {
    const newPost = {
      id: Math.random(),
      profilePic: profile,
      name: "Abanoub Nagy",
      content: content,
      postImage: photo,
      likes: 0,
      mylike: false,
      comments: [],
      timestamp: new Date().toISOString(),
    };

    handleAddPost(newPost);
    setContent("");
    setPhoto(null);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="add-post">
      <div className="name-pic">
        <img src={profile} alt="profile" />
        <p>Abanoub Nagy</p>
      </div>
      <input
        type="text"
        placeholder="What's on your mind, Abanoub?"
        name="text"
        id="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor="photo" className="custom-file-upload">
        Choose a Photo
      </label>
      <input type="file" name="photo" id="photo" onChange={handlePhotoChange} />
      <br />
      <button
        className="postbutton"
        onClick={handleCreatePost}
        disabled={!content ? true : false}
      >
        Post
      </button>
    </div>
  );
};

export default AddPost;
