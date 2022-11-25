import React from "react";

interface User {
  name: string;
  mobile: string;
}
interface UserList {
  userList: User[];
}
const List = (props: UserList) => {
  return (
    <div>
      {props.userList.map((value) => {
        return (
          <div>
            <div>{value.name}</div>
            <div>{value.mobile}</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
