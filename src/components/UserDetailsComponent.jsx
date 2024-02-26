import { useCallback, useEffect, useState } from "react";
import { FETCH_USERS_API } from "../constants";
import Shimmer from "./Shimmer";
import UserDetails from "./UserDetails";

const UserDetailsComponent = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);

  const fetchUserData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FETCH_USERS_API + userId);
      const data = await response.json();

      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    if (userId) fetchUserData();
  }, [userId, fetchUserData]);

  let content;

  if (isLoading) {
    content = <Shimmer />;
  } else if (error) {
    content = <p className=" w-full my-4 ">{error.message}</p>;
  } else {
    content = <UserDetails data={userData} />;
  }

  return <div className=" w-full my-4 min-h-fit  ">{content}</div>;
};
export default UserDetailsComponent;
