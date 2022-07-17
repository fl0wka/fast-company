import React from 'react';
import User from './user';

const Users = ({ users, ...rest }) => {
  if (users.length !== 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <User
            users={users}
            onDeleteUsers={rest.onDeleteUsers}
            // onToggleBookMark={rest.onToggleBookMark}
          />
        </tbody>
      </table>
    );
  }
};

export default Users;
