import { useState, useEffect } from "react";
import Form from "./Form";
//import List from "./List";
import Table from "./Table";

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users"); // ["users", "posts", "comments"]
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        //console.log(data);
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();

  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/*<List items={items} />*/}
      <Table items={items} />
    </div>
  );
}

export default App;
