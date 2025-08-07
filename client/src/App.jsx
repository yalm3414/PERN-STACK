import { useState, useEffect } from "react";

//TODO Form, table, some js to push the dara from the form to the table
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
//Create a App component to render as our main component

function App() {
  //Capitalize component names

  //All components have to return some JSX-- thats it

  const [favLinks, setFavLinks] = useState([]);

  const fetchLinks = async () => {
    try {
      let response = await fetch("/links");
      console.log(response);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createLink = async (newLink) => {
    try {
      let response = await fetch("/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLink),
      });
      console.log(response);
      let message = await response.text();
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createLink();
  }, []);

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data]);
  };

  return (
    //Form
    <div>
      <h1 className="testclass">Submit your fav links!</h1>

      <Form onNewSubmit={handleNewSubmission} />

      <Table links={favLinks} />
    </div>
  );
}

export default App;
