import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators } from '../state/index'; // import your action creator

function ProfileSwitcher(props) {
  const profiles = useSelector(state => state.profiles);
  const activeProfile = useSelector(state => state.activeProfile);
  const dispatch = useDispatch();

  const handleProfileClick = (profile) => {
    dispatch(actionCreators(profile)); // set the active profile
  };
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleChangedd(e) {
    setDescription(e.target.value);
}
function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name, date, description);
    setName("");
}

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            <button
              onClick={() => handleProfileClick(profile)}
              disabled={profile.id === activeProfile.id}
            >
              {profile.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSwitcher;
