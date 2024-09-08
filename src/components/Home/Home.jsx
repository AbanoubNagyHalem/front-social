/* eslint-disable react/prop-types */
import AddPost from "../AddPost/AddPost";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = ({
  data,
  changeLike,
  handleComment,
  handleAddPost,
  handleDelete,
}) => {
  return (
    <div className="home">
      <div className="container">
        <AddPost handleAddPost={handleAddPost} />
        <Posts
          data={data}
          changeLike={changeLike}
          handleComment={handleComment}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Home;
