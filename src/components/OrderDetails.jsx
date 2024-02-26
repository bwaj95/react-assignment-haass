const OrderDetails = ({ data }) => {
  if (!data || data.length === 0)
    return <p className=" w-full my-4 ">No order data available.</p>;

  const { orderId, date } = data;

  return (
    <div className="flex flex-col items-start gap-y-1 font-semibold text-2xl text-black ">
      <div className="flex flex-col gap-y-2 items-start my-1 ">
        <p>Latest Order:</p>
        <p>{`#${orderId}`}</p>
        <p className="flex flex-col sm:flex-row items-start gap-x-1 ">
          <span>Purchase Date: </span>
          <span>{date}</span>
        </p>
      </div>

      <div className="flex flex-row  gap-x-2 w-full items-start ">
        <button className="bg-[rgba(168,196,244,255)] px-4 py-2 cursor-pointer border-4 border-black rounded-md w-[45%]  ">
          Online
        </button>
        <button className="bg-[rgba(158,194,132,255)] px-4 py-2 cursor-pointer border-4 border-black rounded-md w-[45%] ">
          Shipped
        </button>
      </div>
    </div>
  );
};
export default OrderDetails;
