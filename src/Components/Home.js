import React, { useState } from "react";
import Popup from "./Popup";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [postGif, setPostGif] = useState([]);
  return (
    <div>
      <div className="Home_Navbar">
        <h1 className="Nav_Heading">Facebook Post clone</h1>
      </div>
      <div>
        <h2>
          Hello users , Clicking on this button you can create a post which you
          can see below .{" "}
        </h2>
        <div className="Post_button">
          <input
            className="Post_btn"
            type="button"
            value="Post"
            onClick={togglePopup}
          />
        </div>
        <hr></hr>
      </div>
      <h1 style={{ textAlign: "center" }}>
        You will see all the post you Posted below{" "}
      </h1>
      <div className="Card">
        {console.log(postGif)}
        {postGif.map((post, index) => {
          return (
            <div key={index}>
              <img src={post.gif.images.fixed_height.url} alt="" />
              <h2>{post.caption}</h2>
            </div>
          );
        })}
      </div>
      {isOpen && (
        <Popup
          handleClose={togglePopup}
          postGif={postGif}
          setPostGif={setPostGif}
        />
      )}
    </div>
  );
}

export default Home;
