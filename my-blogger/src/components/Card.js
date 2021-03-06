import React, { useState } from "react";
import { CreateBlogs } from "../modals/CreateBlogs";
const Card = ({ blogObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div
      class="card-wrapper mr-5"
      style={{ marginLeft: "50px", height: "60%" }}
    >
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": "#5DC250",
            "border-radius": "10px",
          }}
        >
          {blogObj.Title}
        </span>
        <img
          className="mt-3"
          src={blogObj.Images}
          height="100px"
          width="100px"
        />
        <p className="mt-3">{blogObj.BlogWriter}</p>

        <div style={{ flex: 0.5, right: "20px", bottom: "20px" }}>
          <button
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            onClick={() => {
              setModal(true);
            }}
          >
            Update
          </button>
          <button
            class="fas fa-trash-alt"
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
              backgroundColor: "transparent",
              marginLeft: 10,
            }}
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      </div>
      <CreateBlogs
        modal={modal}
        toggle={toggle}
        saveBlog={updateListArray}
        purpose="Update"
        taskObj={blogObj}
        index={index}
      />
    </div>
  );
};

export default Card;
