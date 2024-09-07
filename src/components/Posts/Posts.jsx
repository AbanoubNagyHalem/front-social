/* eslint-disable react/prop-types */
import { IoMdSend } from "react-icons/io";

import "./Posts.css";

const Posts = ({ data }) => {
  return (
    <>
      {data.map((one) => (
        <div className="post" key={one.id}>
          <div className="name-pic">
            <img src={one.profilePic} alt="profile" />
            <p>{one.name}</p>
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
            <button>Like</button>
            <button>Comment</button>
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
            />
            <button>
              <IoMdSend color="#81BDFF" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
