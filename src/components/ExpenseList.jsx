import React from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

const ExpenseList = ({ expenses }) => {
  return (
    <Paper sx={{ mt: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Expenses
      </Typography>
      <List>
        {expenses.map((expense) => (
          <ListItem key={expense._id}>
            <ListItemText
              primary={expense.title}
              secondary={`$${expense.amount} - ${expense.category}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ExpenseList;