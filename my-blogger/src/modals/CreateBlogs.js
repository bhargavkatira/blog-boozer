import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const CreateBlogs = ({ modal, toggle, saveBlog }) => {
  const [titleName, setTitleName] = useState("");
  const [images, setImages] = useState(null);
  const [blogWriter, setBlogWriter] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "titleName") {
      setTitleName(value);
    } else if (name === "blogWriter") {
      setBlogWriter(value);
    } else {
      setImages(e.target.files);
    }
  };

  useEffect(() => {
    if (images != null) {
      const imgUrl = URL.createObjectURL(images[0]);
      setImageUrl(imgUrl);
    }
  }, [images]);

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Title"] = titleName;
    taskObj["BlogWriter"] = blogWriter;
    taskObj["Images"] = imageUrl;
    saveBlog(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Blogz</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
