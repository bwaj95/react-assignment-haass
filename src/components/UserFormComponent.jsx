import { useState } from "react";

import SearchComponent from "./SearchComponent";
import UserDetailsComponent from "./UserDetailsComponent";
import OrderDetailsComponent from "./OrderDetailsComponent";
import TodosDetailsComponent from "./TodosDetailsComponent";

const UserFormComponent = () => {
  const [userId, setUserId] = useState("");

  return (
    <div>
      <SearchComponent userId={userId} setUserId={setUserId} />
      <UserDetailsComponent userId={userId} />
      <OrderDetailsComponent userId={userId} />
      <TodosDetailsComponent userId={userId} />
    </div>
  );
};
export default UserFormComponent;
