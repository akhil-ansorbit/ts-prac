import React from "react";
import Form from "./Form/Form";
import Profile from "./Form/Profile";
import Parent1 from "./Utilities types/Parent1";
import Parent2 from "./Utilities types/Parent2";

const App = () => {
  return (
    <>
      <div>
        <Profile id={0} age={21} name={"Demo"} status={"commited"}>
          <span>salary = 5ctc</span>
        </Profile>
        <Form />
        <hr />
        <Parent1 />
        <Parent2 />
      </div>
    </>
  );
};

export default App;
