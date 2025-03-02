import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
import API from "../utils/api";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await API.get("/expenses");
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseChart expenses={expenses} />
        <ExpenseList expenses={expenses} />
      </Box>
    </Box>
  );
};

export default Dashboard;