import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AccountCircleIcon from "../Assets/male_user.png";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ReactGiphySearchbox from "react-giphy-searchbox";
import { useForm } from "react-hook-form";

export default function Popup(props) {
  const { handleClose, setPostGif, postGif } = props;
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = useState("");
  const [ShowGif, SetShwoGif] = useState(false);
  const [newGif, setNewGif] = useState("");

  const onSubmit = (data) => {
    setResult(data.name);
    reset();
  };
  const colors = [
    "#A2416B",
    "#DEEDF0",
    "#FF5DA2",
    "#3F0713",
    "#FCFFA6",
    "#B97A95",
    "#290FBA",
    "#716F81",
    "#FF3D68",
    "#7952B3",
    "#890596",
    "#F8A1D1",
    "#64DFDF",
    "#7F7C82",
    "#FAFF00",
  ];
  const post = () => {
    setPostGif([...postGif, { gif: newGif, caption: result }]);
    handleClose();
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="Popup_Nav">
          <div className="Nav_Item">
            <CreateIcon />
            <p> Compose Post</p>
            <div className="vl"></div>
            <PhotoLibraryIcon />
            <p className="Nav_P">Photo/video Album</p>
            <div className="vl"></div>
            <VideoCameraFrontIcon />
            <p className="Nav_P">Live video</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="SearchBar">
            <img className="male_user" src={AccountCircleIcon} alt="male" />
            <div>
              <input
                className="Serch_Input"
                placeholder="Write Something Here..."
                {...register("name")}
              />
              <p>{result}</p>
              {/* <input type="submit" /> */}
            </div>
          </div>
          <div className="Colors">
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  className="Colors_btn"
                  style={{ background: color }}
                ></button>
              );
            })}
            <SentimentVerySatisfiedIcon
              style={{ color: "gray", width: "5rem", marginTop: "-2rem" }}
            />
          </div>
          <hr />
          <div className="Features">
            <button className="Features_Buttons">Tag Friends</button>
            <button className="Features_Buttons"> Check In</button>
            <button
              className="Features_Buttons"
              onClick={() => {
                SetShwoGif(!ShowGif);
              }}
            >
              GIF{" "}
            </button>
            <button className="Features_Buttons"> Tag Event</button>
          </div>
          <hr></hr>
          <diV className="Post_Button">
            <button className="Only_me">Only ME</button>
            <button className="Post" onClick={post}>
              Post
            </button>
          </diV>
        </form>
        <div className={ShowGif ? "searchboxWrapper" : "none"}>
          <ReactGiphySearchbox
            apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
            onSelect={(item) => {
              setNewGif(item);
            }}
            masonryConfig={[
              { columns: 2, imageWidth: 110, gutter: 5 },
              { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
