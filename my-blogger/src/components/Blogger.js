import React, { useState, useEffect } from "react";
import { CreateBlogs } from "../modals/CreateBlogs";
import Card from "./Card";

export const Blogger = () => {
  const [modal, setModal] = useState(false);

  const [bloggerList, setBloggerList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let arr = localStorage.getItem("bloggerList");

    if (arr) {
      let obj = JSON.parse(arr);

      setBloggerList(obj);
    }
  }, []);
  const saveBlog = (blogObj) => {
    setBloggerList((prep) => {
      return [...prep, blogObj];
    });
    setModal(false);
  };

  const deleteTask = (index) => {
    let tempList = [...bloggerList];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setBloggerList(tempList);
  };

  const updateListArray = (obj, index, toggle) => {
    console.log(obj);
    let tempList = [...bloggerList];
    tempList[index] = obj;
    localStorage.setItem("bloggerList", JSON.stringify(tempList));
    setBloggerList(tempList);
    toggle();
  };
  return (
    <>
      <div className="header text-center">
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Blog
        </button>
      </div>
      <div className="task-container">
        {bloggerList.length > 0 &&
          bloggerList.map((obj, index) => (
            <Card
              blogObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              key={`${obj.Title}${index}`}
            />
          ))}
      </div>
      <CreateBlogs
        toggle={toggle}
        modal={modal}
        saveBlog={saveBlog}
        purpose="Create"
      />
    </>
  );
};
