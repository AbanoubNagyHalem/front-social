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
        {data.map((post) => post).length === 0 && (
          <div className="no-posts">
            No Posts Here <br /> Please Add New Post
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
