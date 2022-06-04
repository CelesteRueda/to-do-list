import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Item from "./Item";
import { tasks } from "../mocks/api";

const ToDoList = () => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const response = tasks;
    setTaskList(response);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setNewTask("");
    setIsOpen(false);
  };

  const handleAddTask = () => {
    if (taskList.includes(newTask)) {
      setIsError(true);
    } else {
      setIsError(false);
      const newTasks = taskList.map((task) => task);
      newTasks.push(newTask);
      setTaskList(newTasks);
      handleClose();
    }
  };

  const handleEditTask = (idTask, newLabelTask) => {
    const newTasks = taskList.map((task) => task);
    const element = newTasks.indexOf(idTask);
    newTasks[element] = newLabelTask;
    setTaskList(newTasks);
  };

  const handleDeleteTask = (idTask) => {
    const newTasks = taskList.filter((task) => task !== idTask);
    setTaskList(newTasks);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            minWidth: mobileScreen ? 250 : 500,
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#6a4512" }}
            onClick={handleOpen}
          >
            Add task
          </Button>
        </Box>
        <List>
          {taskList.map((value) => (
            <ListItem key={value}>
              <Item
                id={value}
                label={value}
                mobile={mobileScreen}
                OnSave={handleEditTask}
                OnDelete={handleDeleteTask}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Dialog open={isOpen}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            px: 15,
            pt: 6,
            fontSize: "30px",
          }}
        >
          Add task
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            px: 15,
            pb: 6,
          }}
        >
          <DialogContentText>
            Then type the name of the new task:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="tag"
            type="text"
            fullWidth
            variant="standard"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          {isError && (
            <DialogContentText variant="body2" color="error">
              A task with that name already exists.
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddTask}>Agregar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ToDoList;
