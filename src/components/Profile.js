import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators } from '../state/index'; // import your action creator

function ProfileSwitcher() {
  const profiles = useSelector(state => state.profiles);
  const activeProfile = useSelector(state => state.activeProfile);
  const dispatch = useDispatch();

  const handleProfileClick = (profile) => {
    dispatch(actionCreators(profile)); // set the active profile
  };

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
