import { useCallback, useEffect, useState } from "react";
import { FETCH_TODOS_API } from "../constants";
import Shimmer from "./Shimmer";
import TodosDetails from "./TodosDetails";

const TodosDetailsComponent = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todosData, setTodosData] = useState([]);

  const fetchTodosDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FETCH_TODOS_API + userId);
      const data = await response.json();

      setTodosData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    if (userId) fetchTodosDetails();
  }, [userId, fetchTodosDetails]);

  let content;

  if (isLoading) {
    content = <Shimmer />;
  } else if (error) {
    content = <p className=" w-full my-4 ">{error.message}</p>;
  } else {
    content = <TodosDetails data={todosData} />;
  }

  return <div>{content}</div>;
};
export default TodosDetailsComponent;
