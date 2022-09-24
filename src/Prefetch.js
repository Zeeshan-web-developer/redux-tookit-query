import store from "./store/store";
import { bootcampsApi } from "./store/slices/bootcampSlice";
import { usersApi } from "./store/slices/usersSlice";
import { useEffect } from "react";

import React from "react";

function Prefetch() {
  useEffect(() => {
    console.log("subscribing to");
    const bootcamp = store.dispatch(
      bootcampsApi.endpoints.getAllBootCamps.initiate()
    );
    const users = store.dispatch(usersApi.endpoints.getUsers.initiate());

    return () => {
      console.log("unsb");
      bootcamp.unsubscribe();
      users.unsubscribe();
    };
  }, []);
  return <></>;
}

export default Prefetch;
