import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/tasks";
import { Button, Modal, Box } from "@mui/material";

import "../styles.css";

function AddForm() {
  const dispatch = useDispatch();

  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleNewId = (e) => {
    setNewId(e.target.value);
  };

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleNewDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addTask(newId, newTitle, newDescription));
    setIsOpen(false)
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div class="outer">
            <div>
              <form style={{ margin: "100px", display: "inline-block" }}>
                <input
                  value={newId}
                  onChange={handleNewId}
                  placeholder="ID"
                  type="number"
                  name="id"
                  required
                />
                <input
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  value={newTitle}
                  onChange={handleNewTitle}
                  placeholder="title"
                  type="text"
                  name="title"
                  required
                />
                <input
                  value={newDescription}
                  onChange={handleNewDescription}
                  placeholder="description"
                  type="text"
                  name="description"
                  required
                />
                <div style={{marginTop:"10px"}}>
                <Button style={{float:"right"}} variant="contained" onClick={handleAdd}>confirm</Button>
                <Button style={{float:"left"}}  variant="contained" onClick={handleClose}>cancel</Button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      <Button variant="contained" style={{margin:"20px"}} onClick={handleOpen}>Add new task</Button>
    </>
  );
}

export default AddForm;
