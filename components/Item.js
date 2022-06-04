import React, { useState } from "react";
import { Delete, Edit, Save } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";

const Item = ({ id, label, mobile, OnSave, OnDelete }) => {
  const [text, setText] = useState(label);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      OnSave(id, text);
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        m: "auto",
        p: 2,
        display: "flex",
        alignItems: "center",
        mt: 2,
        width: mobile ? 250 : 500,
      }}
    >
      <InputBase
        value={text}
        readOnly={!isEdit}
        onChange={(e) => setText(e.target.value)}
        sx={{ color: !isEdit ? "#976b30" : "#1976d2", fontSize: "21px" }}
      />
      <IconButton
        color="primary"
        aria-label="Edit"
        sx={{ ml: "auto" }}
        onClick={handleEdit}
      >
        {!isEdit ? <Edit fontSize="small" /> : <Save fontSize="small" />}
      </IconButton>
      <IconButton
        color="error"
        aria-label="Delete"
        onClick={() => OnDelete(id)}
      >
        <Delete fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default Item;
