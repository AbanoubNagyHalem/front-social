/* eslint-disable react/prop-types */
import { IoMdSend } from "react-icons/io";
import "./Posts.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";

const Posts = ({ data, changeLike, handleComment, handleDelete }) => {
  const [currentComment, setCurrentComment] = useState({});

  const handleCommentChange = (e, postId) => {
    setCurrentComment((prev) => ({
      ...prev,
      [postId]: e.target.value,
    }));
  };

  return (
    <>
      {data.map((one) => (
        <div className="post" key={one.id}>
          <div className="heading">
            <div className="name-pic">
              <img src={one.profilePic} alt="profile" />
              <p>{one.name}</p>
            </div>
            <button className="delete" onClick={() => handleDelete(one.id)}>
              X
            </button>
          </div>
          <div className="content">{one.content}</div>

          {one.postImage && (
            <img className="post-image" src={one.postImage} alt="" />
          )}

          <div className="likes-comments">
            <p className="likes">{one.likes} likes</p>
            <p className="comments">{one.comments.length} comments</p>
          </div>

          <div className="buttons-post">
            <button
              className={one.mylike ? "active" : ""}
              onClick={() => changeLike(one.id)}
            >
              <AiOutlineLike size={20} color={one.mylike ? "#2D68D2" : ""} />
              Like
            </button>

            <button>
              <FaRegComment size={20} />
              Comment
            </button>
          </div>

          {one.comments.map((onecomment) => (
            <div className="comment-post" key={onecomment.id}>
              <img src={onecomment.profilePic} alt="" />
              <div className="comment">
                <p className="name">{onecomment.name}</p>
                <p className="words">{onecomment.content}</p>
              </div>
            </div>
          ))}

          <div className="inputs">
            <input
              type="text"
              placeholder={`What's on your mind, ${one.name}?`}
              name="text"
              id="text"
              value={currentComment[one.id] || ""}
              onChange={(e) => handleCommentChange(e, one.id)}
            />
            <button
              onClick={() => {
                handleComment(currentComment[one.id] || "", one.id);
                setCurrentComment((prev) => ({ ...prev, [one.id]: "" }));
              }}
            >
              <IoMdSend className="send-icon" color="#81BDFF" size={20} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
