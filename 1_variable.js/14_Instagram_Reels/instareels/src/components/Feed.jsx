import React from 'react';
import "./feed.css";

function Feed() {
  return (
    <>
      <div className="header">
        <img src="
        https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png
        " alt="" className="insta_img" />
        <img src="https://scontent.fdel1-1.fna.fbcdn.net/v/t1.6435-9/127559621_708095620129665_2050487984136993537_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Bw5KZnAcFjMAX_jVRa3&_nc_ht=scontent.fdel1-1.fna&oh=00_AT-pJyOlO1fyoioCkGxkw99VW9PBAmw6pvvj0YAFMKbMdg&oe=62F87667"
          alt=""
          className="profile_img" />
      </div>
      <div className="main_continer">
        <div className="upload_container">
          <i 
            className="movie_icon fa-solid fa-clapperboard"
          ></i>
          <div className="upload_text">UPLOAD</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}
export default Feed;