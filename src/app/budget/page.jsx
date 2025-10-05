"use client";
import React, { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "../firebase";
import styles from "./budget.module.css";
import Navbar from "../components/navbar";

const Page = () => {
  const [budget, setBudget] = useState(0);
  const [moneySpent, setMoneySpent] = useState(0);
  const [newBudget, setNewBudget] = useState("");

  useEffect(() => {
    const budgetRef = ref(database, "budget");
    const moneyRef = ref(database, "Money");

    const unsubscribeBudget = onValue(budgetRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) setBudget(value);
    });

    const unsubscribeMoney = onValue(moneyRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) setMoneySpent(value);
    });

    return () => {
      unsubscribeBudget();
      unsubscribeMoney();
    };
  }, []);

  const handleAddBudget = async (e) => {
    e.preventDefault();
    const budgetValue = parseFloat(newBudget);
    if (!isNaN(budgetValue)) {
      await set(ref(database, "budget"), budgetValue);
      setNewBudget("");
    }
  };

  const percentSpent = budget > 0 ? Math.min((moneySpent / budget) * 100, 100) : 0;

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <h1>💰 Budget Overview</h1>

      <div className={styles.card}>
        <h2>Current Budget: <span>${budget}</span></h2>
        <h2>Money Spent: <span>${moneySpent}</span></h2>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${percentSpent}%` }}
          ></div>
        </div>
        <p>{percentSpent.toFixed(1)}% of your budget spent</p>
      </div>

      <div className={styles.card}>
        <h2>Update Budget</h2>
        <form onSubmit={handleAddBudget} className={styles.form}>
          <input
            type="number"
            step="0.01"
            placeholder="Enter new budget"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
            required
          />
          <button type="submit">Save Budget</button>
        </form>
      </div>

      <div className={styles.summary}>
        <h3>Remaining: <span>${(budget - moneySpent).toFixed(2)}</span></h3>
      </div>
    </div>
    </>
  );
};

export default Page;
