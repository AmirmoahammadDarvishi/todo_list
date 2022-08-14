import TextBox from "./Components/TextBox";
import TodoItem from "./Components/TodoItem";
import React, { useState } from "react";

function App() {
      const date = new Date();
      const data = [
            {
                  id: 0,
                  text: "go to gym",
                  date: date.toLocaleDateString(),
                  time: date.toLocaleTimeString(),
                  edit: false,
                  done: false,
                  priority: 0,
            },
            {
                  id: 1,
                  text: "buy something",
                  date: date.toLocaleDateString(),
                  time: date.toLocaleTimeString(),
                  edit: false,
                  done: false,
                  priority: 0,
            },
            {
                  id: 2,
                  text: "meditation",
                  date: date.toLocaleDateString(),
                  time: date.toLocaleTimeString(),
                  edit: false,
                  done: false,
                  priority: 0,
            },
            {
                  id: 3,
                  text: "catch the mali card",
                  date: date.toLocaleDateString(),
                  time: date.toLocaleTimeString(),
                  edit: false,
                  done: false,
                  priority: 0,
            },
      ];
      const [info, setInfo] = useState([...data]);
      const [text, setText] = useState("");
      const [editText, setEditText] = useState("");
      const handleInsert = e => {
            e.preventDefault();
            setInfo(items => [
                  {
                        id: 0,
                        text: text,
                        date: date.toLocaleDateString(),
                        time: date.toLocaleTimeString(),
                        edit: false,
                        done: false,
                        priority: 0,
                  },
                  ...items,
            ]);
            setText("");
      };
      const handlePriority = (number, index) => {
            console.log(number, index);
            setInfo(
                  info.filter((item, ind) =>
                        index === ind ? (item.priority = number) : item
                  )
            );
      };
      const deleteItem = index => {
            console.log(index);
            setInfo(info.filter((item, count) => index !== count));
      };
      const editHandler = () => {};
      const toggleDoneItem = index => {
            setInfo(
                  info.filter((item, counter) =>
                        index === counter ? (item.done = !item.done) : item
                  )
            );
      };
      return (
            <div className="App">
                  <div className="container">
                        <TextBox
                              handleInsert={handleInsert}
                              text={text}
                              setText={setText}
                        />
                        <TodoItem
                              handlePriority={handlePriority}
                              toggleDoneItem={toggleDoneItem}
                              setEditText={setEditText}
                              editText={editText}
                              editHandler={editHandler}
                              data={info}
                              deleteItem={deleteItem}
                        />
                  </div>
            </div>
      );
}

export default App;
