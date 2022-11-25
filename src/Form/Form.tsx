import React, { useState } from "react";
import List from "./List";

const Form = () => {
  interface User {
    name: string;
    mobile: string;
  }
  const [data, setData] = useState<User>({
    name: "",
    mobile: "",
  });
  const [dataList, setDataList] = useState<User[]>([]);
  return (
    <>
      <div>
        <hr />
        <h1>User Data</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDataList([...dataList, data]);
            setData({ name: "", mobile: "" });
          }}
        >
          <tr>
            <td>
              <label htmlFor="name">Name :</label>
            </td>
            <td>
              <input
                id="name"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              ></input>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label htmlFor="mobile">Mobile No :</label>
            </td>
            <td>
              <input
                id="mobile"
                value={data.mobile ?? ""}
                onChange={(e) => {
                  setData({ ...data, mobile: e.target.value });
                }}
              ></input>
            </td>
          </tr>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <List userList={dataList} />
      </div>
    </>
  );
};

export default Form;
