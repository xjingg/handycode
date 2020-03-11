import React, { useContext } from "react";

import { UsersContext } from "./context";

const UsersList = props => {
  const usersContext = useContext(UsersContext);

  const { users, selectedUser, setSelectedUser } = usersContext;

  return (
    <div>
      <h4>Users: </h4>
      {users.map(user => {
        // compose class name
        const userItemClassNames = "user-item" ? 
          "user-item-selected": user.id === selectedUser.id;

        return (
          <div
            className={userItemClassNames}
            key={user.id}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
