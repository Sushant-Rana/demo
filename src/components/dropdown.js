import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import imgsrc from '../assets/proficon.svg';
const ProfileDropdown = (props) => {
  const [expanded, setExpanded] = useState(false);
  const selectedProfile = useSelector(state => state.selectedProfile);
  const profiles = useSelector(state => state.profiles);
  const dispatch = useDispatch();

  const handleClick = profile => {
    //dispatch(selectProfile(profile));
    setExpanded(false);
    props.setProf(props.name);
  };

  return (
    <div
      className="profile-dropdown"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button className="selected-profile">{selectedProfile.name}</button>
      {expanded && (
        <ul className="profile-menu">
          {profiles.map(profile => (
            <li key={profile.id}>
              <button
                className="profile-option"
                onClick={() => handleClick(profile)}
              >
                {profile.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};





function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(props.profiles[0]);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setExpanded(false);
    props.setProf(profile);
  };

  return (
    <div className="profile-dropdown">
      <button
        onClick={() => {setExpanded(true)}}
      > 
      <figure align="center">
      <img src={imgsrc} alt="Profile" height="30" width="30" ></img>
      <figcaption>{selectedProfile}</figcaption>
    </figure>
      </button>
      {expanded && (
        <ul className="profile-list">
          {props.profiles.map((profile) => (
            <li key={profile}>
            <button
              className="profile-option"
              key={profile}
              onClick={() => handleProfileSelect(profile)}
            >
              {profile}
            </button>
            </li>
          ))}
          
        </ul>
      )}
   
</div>)
}

export default Dropdown;