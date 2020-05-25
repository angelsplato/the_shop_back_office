import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase/firebase";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <div className="">
      <div className="">
        <div className="border border-blue-300"></div>
        <div className="">
          <h2 className="">{displayName}</h2>
          <h3 className="">{email}</h3>
        </div>
      </div>
      <button
        className=""
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};
export default ProfilePage;
