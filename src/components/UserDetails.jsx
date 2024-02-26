const UserDetails = ({ data }) => {
  if (data.length === 0) return <p>No user data available.</p>;

  const { name, email, phone } = data[0];

  return (
    <div className="flex flex-col items-start gap-y-1 font-semibold text-2xl text-black ">
      <div className=" flex flex-row flex-wrap items-start ">
        <span>Name: </span>
        <span className=" mx-2 ">{name}</span>
      </div>
      <div className=" flex flex-row flex-wrap items-start ">
        <span>Email: </span>
        <span className=" mx-2 ">{email}</span>
      </div>
      <div className=" flex flex-row flex-wrap items-start ">
        <span>Phone: </span>
        <span className=" mx-2 ">{phone}</span>
      </div>
    </div>
  );
};
export default UserDetails;
