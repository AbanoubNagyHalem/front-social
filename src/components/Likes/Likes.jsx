/* eslint-disable react/prop-types */
import Posts from "../Posts/Posts";
import "./Likes.css";

const Likes = ({ data, changeLike, handleComment, handleDelete }) => {
  return (
    <div className="likes">
      <div className="container">
        {data
          .filter((post) => post.mylike)
          .map((post) => (
            <Posts
              key={post.id}
              data={[post]}
              changeLike={changeLike}
              handleComment={handleComment}
              handleDelete={handleDelete}
            />
          ))}
        {data.filter((post) => post.mylike).length === 0 && (
          <div className="no-likes">No Likes Here</div>
        )}
      </div>
    </div>
  );
};

export default Likes;
