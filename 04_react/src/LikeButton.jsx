import { useState } from "react";

const LikeButton = () => {
  const [isliked, setIsLiked] = useState(false);
  const [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isliked);
    setClicks(clicks + 1);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p>Clicks = {clicks}</p>
      <p onClick={toggleLike}>
        {isliked ? (
          <i className="fa-regular fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-solid fa-heart"></i>
        )}
      </p>
    </div>
  );
};

export default LikeButton;
