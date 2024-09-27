/* eslint-disable react/prop-types */
import { IoMdSend } from "react-icons/io";
import "./Posts.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useState, useRef } from "react";
import profile from "../../assets/blank-profile-picture-973460_1280.webp";

const Posts = ({ data, changeLike, handleComment, handleDelete }) => {
  const [currentComment, setCurrentComment] = useState({});
  const commentRefs = useRef({});

  const focusComment = (postId) => {
    if (commentRefs.current[postId]) {
      commentRefs.current[postId].focus();
    }
  };

  const handleCommentChange = (e, postId) => {
    setCurrentComment((prev) => ({
      ...prev,
      [postId]: e.target.value,
    }));
  };

  return (
    <>
      {data.map((one) => (
        <div className="post" key={one._id}>
          <div className="heading">
            <div className="name-pic">
              <img src={profile} alt="profile" />
              <p>{one?.author?.username}</p>
            </div>
            <button className="delete" onClick={() => handleDelete(one._id)}>
              X
            </button>
          </div>
          <div className="content">{one.content}</div>

          {one.postImage && (
            <img className="post-image" src={one.postImage} alt="" />
          )}

          <div className="likes-comments">
            <p className="likes">{one?.likes?.length} likes</p>
            <p className="comments">{one?.comments?.length} comments</p>
          </div>

          <div className="buttons-post">
            <button
              className={one.mylike ? "active" : ""}
              onClick={() => changeLike(one._id)}
            >
              <AiOutlineLike size={20} color={one.mylike ? "#2D68D2" : ""} />
              Like
            </button>

            <button onClick={() => focusComment(one._id)}>
              <FaRegComment size={20} />
              Comment
            </button>
          </div>

          {one?.comments?.map((onecomment) => (
            <div className="comment-post" key={onecomment._id}>
              <img src={onecomment.profilePic} alt="" />
              <div className="comment">
                <p className="name">{onecomment.author.username}</p>
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
              value={currentComment[one._id] || ""}
              onChange={(e) => handleCommentChange(e, one._id)}
              ref={(el) => (commentRefs.current[one._id] = el)}
            />
            <button
              onClick={() => {
                handleComment(currentComment[one._id] || "", one._id);
                setCurrentComment((prev) => ({ ...prev, [one._id]: "" }));
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
