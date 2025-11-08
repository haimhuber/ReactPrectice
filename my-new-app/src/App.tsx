import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductCard } from "./RouterComponents/ProductCard/ProductCard";

export const App = () => {
  const matches = [
    { id: "1", title: "Lakers vs Warriors", price: 99.99 },
    { id: "2", title: "Real Madrid vs Barcelona", price: 90.85 },
    { id: "3", title: "Patriots vs Eagles", price: 10.2 },
    { id: "4", title: "Yankees vs Red Sox", price: 50.2 },
    { id: "5", title: "Bulls vs Celtics", price: 85.5 },
    { id: "6", title: "Dodgers vs Cubs", price: 70.0 },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {matches.map((match) => (
                <ProductCard match={{
                  id: "",
                  title: "",
                  price: 0
                }} key={match.id} {...match} />
              ))}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
