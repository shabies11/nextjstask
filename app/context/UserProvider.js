"use client";
import { useEffect, useState } from "react";
import UserContext from "./userContext";

export default function UserProvider({ children }) {
  const [loggedUser, setloggedUser] = useState();
  useEffect(() => {
    let load = async () => {
      let user = await fetch("/api/usercheck");
        user = await user.json();
      setloggedUser(user); 
      console.log(user)
    };
    load();
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser,setloggedUser }}>
      {children}
    </UserContext.Provider>
  );
}
