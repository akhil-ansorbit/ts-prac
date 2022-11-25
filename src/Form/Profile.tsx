import React from "react";

interface User {
  id: number;
  name: string;
  age: number;
  status: "single" | "married" | "commited";
  children?: React.ReactNode;
}
const Profile = (props: User) => {
  return (
    <>
      <h1>{props.id}</h1>
      <h1>{props.age}</h1>
      <h1>{props.name}</h1>
      <h1>{props.status}</h1>
      <h1>{props.children}</h1>
    </>
  );
};

export default Profile;
