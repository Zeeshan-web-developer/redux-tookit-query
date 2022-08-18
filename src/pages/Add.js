import React from "react";
import { useAddAreaMutation } from "../services/users";

function Add() {
  const [addArea, { isLoading, isError }] = useAddAreaMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: (Math.random() + 1).toString(36).substring(7),
      description: "js bootca,mp",
      email: (Math.random() + 1).toString(36).substring(7) + "@gmail.com",
      address: "frasthar baramulla,jk",
      careers: ["Web Development", "UI/UX", "Business"],
    };
    addArea(body);
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <h2>Add Bootcamp</h2>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Add;
