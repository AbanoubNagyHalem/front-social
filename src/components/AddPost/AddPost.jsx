import profile from "../../assets/profilePic.jpg";
import "./AddPost.css";

const AddPost = () => {
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
      />
      <label htmlFor="photo" className="custom-file-upload">
        Choose a Photo
      </label>
      <input type="file" name="photo" id="photo" />
      <br />
      <button className="postbutton">Post</button>
    </div>
  );
};

export default AddPost;
