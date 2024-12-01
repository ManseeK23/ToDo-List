import "./App.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      toast.error("Task cannot be empty or only spaces!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setTaskList([...taskList, task]);
    setTask("");
    console.log("taskList", taskList);
  };
  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };
  return (
    <>
    <ToastContainer />
      <Container>
        <Row>
          <Col xs={10}>
            <TextField
              id="standard-basic"
              required="true"
              className="textfield"
              label="Add Task"
              variant="standard"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </Col>
          <Col xs={2}>
            <Button variant="contained" onClick={addTask}>
              Add Task
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
          <br></br>
          <br></br>
            <Box
              sx={{bgcolor: "background.paper" }}
            >
              <List className="list">
                {taskList.map((item, index) => (
                  <ListItem
                    disablePadding
                    key={index}
                    secondaryAction={
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => deleteTask(index)}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    }
                  >
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
