import React, { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import API from "../utils/api";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Food", "Transport", "Entertainment", "Utilities", "Other"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/expenses", { title, amount, category });
      onAddExpense(response.data);
      setTitle("");
      setAmount("");
      setCategory("");
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;