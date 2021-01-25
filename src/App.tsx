import "./styles.css";
import React, { useEffect } from "react";

import { Button } from "semantic-ui-react";

import axios from "axios";

interface User {
  id: number;
}

export default function App() {
  useEffect(() => {
    axios
      .get<User[]>("https://box.aowebdev.com/api/users.json")
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Everything is awesome</h1>
      <Button>Click Here</Button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
