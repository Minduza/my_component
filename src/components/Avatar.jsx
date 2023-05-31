import { useState } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({ image, userName, userEmail, userAge }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [age, setAge] = useState(userAge);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="avatar">
      <div className="avatarPic">
        <img src={image} alt="" />
      </div>
      {isEditing ? (
        <input
          type="text"
          value={nickname}
          onChange={handleChangeNickname}
          placeholder="nickname"
        />
      ) : (
        <span className="nickname">
          {nickname}, {age}
        </span>
      )}
      {isEditing ? (
        <input
          type="text"
          value={email}
          onChange={handleChangeEmail}
          placeholder="email"
        />
      ) : (
        <span className="email">{email}</span>
      )}
      {isEditing && (
        <input
          type="number"
          value={age}
          onChange={handleChangeAge}
          placeholder="age"
        />
      )}

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAge: PropTypes.number.isRequired,
};

export default Avatar;
