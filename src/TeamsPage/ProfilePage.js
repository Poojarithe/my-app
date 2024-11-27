import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { name } = useParams();

  return (
    <div>
      <h1>{name}'s Profile</h1>
      {/* Add more profile details here */}
    </div>
  );
}

export default ProfilePage;
