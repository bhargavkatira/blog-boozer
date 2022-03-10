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
    // let tempList = [bloggerList];
    // tempList.push(blogObj);
    setBloggerList((prep) => {
      return [...prep, blogObj];
    });
    setModal(false);
    setBloggerList(bloggerList);
  };
    useEffect(() => {
     
  }, [])
  return (
    <>
      <div className="header text-center">
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Blog
        </button>
      </div>
      <div className="task-container">
        {bloggerList.length > 0 &&
          bloggerList.map((obj, index) => <Card blogObj={obj} index={index} />)}
      </div>
      <CreateBlogs toggle={toggle} modal={modal} saveBlog={saveBlog} />
    </>
  );
};
