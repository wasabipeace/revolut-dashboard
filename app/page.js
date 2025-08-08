"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const balance = 145333;

const transactions = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  amount: (Math.random() * 1500 - 500).toFixed(2),
  currency: ["BTC", "ETH", "USDT"][i % 3],
  direction: i % 2 === 0 ? "To Binance" : "From Binance",
}));

const portfolioData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2024, i).toLocaleString("default", { month: "short" }),
  value: Math.round(15000 + i * 11000),
}));

export default function Page() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#f4f4f4", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "960px", margin: "auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#0b0b0b" }}>Revolut</h1>
        <p style={{ color: "#666" }}>Account Holder: Carlos de Aubeyzon Peirano</p>

        <div style={{ background: "white", borderRadius: "1rem", padding: "2rem", marginTop: "1rem", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
          <h2>Account Balance</h2>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>${balance.toLocaleString()}</p>
        </div>

        <div style={{ background: "white", borderRadius: "1rem", padding: "2rem", marginTop: "1rem", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
          <h2>Recent Transactions</h2>
          <div style={{ maxHeight: "300px", overflowY: "scroll", marginTop: "1rem" }}>
            {transactions.map(tx => (
              <div key={tx.id} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
                <span>{tx.date}</span>
                <span>{tx.direction}</span>
                <span>{tx.currency} {tx.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "1rem", padding: "2rem", marginTop: "1rem", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
          <h2>Portfolio Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}