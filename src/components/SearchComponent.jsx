// import { FwInput } from "@freshworks/crayons/react";

const SearchComponent = ({ userId, setUserId }) => {
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    console.log(userId);
  };

  return (
    <div>
      <form className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-start md:items-center text-2xl ">
        <label htmlFor="userId" className="font-bold min-w-fit">
          Search User By:
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          placeholder="By User ID"
          value={userId}
          onChange={handleUserIdChange}
          className=" border-4 border-black px-2 py-3 w-full  "
        />
      </form>
    </div>
  );
};
export default SearchComponent;
