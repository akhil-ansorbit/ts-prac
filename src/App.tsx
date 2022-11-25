import React from "react";
import Form from "./Form";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <div>
        <Profile id={0} age={21} name={"Demo"} status={"commited"}>
          <span>salary = 5ctc</span>
        </Profile>
        <Form />
      </div>
    </>
  );
};

export default App;
