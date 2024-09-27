/* eslint-disable react/prop-types */
import { useState } from "react";
import profileImage from "../../assets/blank-profile-picture-973460_1280.webp";
import "./AddPost.css";

const AddPost = ({ onAddPost }) => {
  const [postContent, setPostContent] = useState("");

  const handleCreatePost = () => {
    const newPost = {
      content: postContent,
    };

    onAddPost(newPost);
    setPostContent(""); 
  };

  return (
    <div className="add-post">
      <div className="user-info">
        <img src={profileImage} alt="User Profile" />
        <p>Abanoub Nagy</p>
      </div>
      <input
        type="text"
        placeholder="What's on your mind, Abanoub?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <label htmlFor="photo-upload" className="custom-file-upload">
        Choose a Photo
      </label>
      <input type="file" id="photo-upload" />
      <br />
      <button
        className="post-button"
        onClick={handleCreatePost}
        disabled={!postContent}
      >
        Post
      </button>
    </div>
  );
};

export default AddPost;
