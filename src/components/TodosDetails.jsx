const TodosDetails = ({ data }) => {
  if (!data || data.length === 0)
    return <p className=" w-full my-4 ">No todos data available.</p>;

  return (
    <div className="w-full flex flex-col items-start gap-y-1 font-semibold text-2xl text-black my-6 ">
      <table className="table-auto w-full border-4 border-black">
        <thead className="bg-gray-300">
          <tr>
            <th>Todo Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white  even:bg-gray-100">
            <td className=" text-left py-1 px-2 ">{data[0].title}</td>
            <td>{data[0].completed ? "Yes" : "No"}</td>
          </tr>
          <tr className="odd:bg-white  even:bg-gray-100">
            <td className=" text-left py-1 px-2 ">{data[1].title}</td>
            <td>{data[1].completed ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>

      <div className="my-2">
        <p>Total Todos: {data.length}</p>
      </div>

      <div className="w-full flex flex-col sm:flex-row md:justify-between gap-x-4 gap-y-6 my-2">
        <button className=" w-48 border-4 border-black  px-4 py-2  card-shadow">
          Cancel Order
        </button>
        <button className=" w-48 border-4 border-black  px-4 py-2  card-shadow">
          Refund Order
        </button>
        <button className=" w-48 border-4 border-black  px-4 py-2  card-shadow">
          Order Details
        </button>
      </div>

      <div className=" w-full text-left my-4 ">
        <p className=" text-blue-300 cursor-pointer ">View in OMS</p>
      </div>
    </div>
  );
};
export default TodosDetails;
