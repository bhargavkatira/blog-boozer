import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const EditBlogs = ({ modal, toggle, updateTask, blogObj }) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [images, setImages] = useState(null);
  const [blogWriter, setBlogWriter] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "blogTitle") {
      setBlogTitle(value);
    } else if (name == "blogWriter") {
      setBlogWriter(value);
    } else {
      setImages(e.target.files);
    }
  };

  useEffect(() => {
    setBlogTitle(blogObj.Title);
    setImages(blogObj.Images);
    setBlogWriter(blogObj.BlogWriter);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Title"] = blogTitle;
    tempObj["BlogWriter"] = blogWriter;
    tempObj["Images"] = images;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={titleName}
            onChange={handleChange}
            name="titleName"
          />
        </div>
        <div className="form-group">
          <label>images</label>
          <input
            type="file"
            className="form-control"
            // value={images}
            onChange={handleChange}
            name="images"
          />
        </div>

        <div className="form-group">
          <label>Blog Name</label>
          <input
            type="text"
            className="form-control"
            value={blogWriter}
            onChange={handleChange}
            name="blogWriter"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
