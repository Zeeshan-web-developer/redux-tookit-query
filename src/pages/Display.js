import React from "react";
import { useGetUsersQuery } from "../services/users";

function Display() {
  const { data, loading, error } = useGetUsersQuery();
  console.log(data);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      {data?.map((user) => (
        <div key={user.id}>
          <div>
            <strong>{user.name}</strong> <span>{user.email}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Display;
