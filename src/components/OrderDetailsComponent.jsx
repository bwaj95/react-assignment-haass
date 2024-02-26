import { useEffect, useState } from "react";
import { getOrderDetails } from "../utils/orderDetails";
import Shimmer from "./Shimmer";
import OrderDetails from "./OrderDetails";

const OrderDetailsComponent = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setIsLoading(true);
      try {
        const response = getOrderDetails();

        setOrderData(response);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    if (userId) fetchOrderDetails();
  }, [userId]);

  let content;

  if (isLoading) {
    content = <Shimmer />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else {
    content = <OrderDetails data={orderData} />;
  }

  return <div>{content}</div>;
};
export default OrderDetailsComponent;
