import React, { useState } from 'react';
import SearchStatus from './components/searchStatus';
import Users from './components/users';
import api from './api';

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  // Не догадался, как использовать эту функцию в компоненте BookMark, если по ТЗ нельзя менять значение по ключу 'bookmark'
  // const handleToggleBookMark = (id) => {
  //   users.find((user) => {
  //     if (user._id === id) {
  //     if (!user.bookmark) {
  //       user.bookmark = true
  //       console.log(user.bookmark);
  //     } else {
  //         user.bookmark = false
  //         console.log(user.bookmark);
  //       }
  //     }
  //   });
  // };

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDeleteUsers={handleDelete}
      // onToggleBookMark={handleToggleBookMark}
      />
    </div>
  );
}

export default App;
