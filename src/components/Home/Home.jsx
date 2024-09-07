/* eslint-disable react/prop-types */
import AddPost from "../AddPost/AddPost";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = ({ data }) => {
  return (
    <div className="home">
      <div className="container">
        <AddPost />
        <Posts data={data} />
      </div>
    </div>
  );
};

export default Home;
