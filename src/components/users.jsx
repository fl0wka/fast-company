import { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    const cases = ['человек', 'человека'];
    let messege = 'тусанут с тобой сегодня';
    if (
      (number > 4 && number < 20) ||
      (number >= 20 && (number % 10 <= 1 || number % 10 >= 5))
    ) {
      return `${number} ${cases[0]} ${messege}`;
    } else if (number === 1) {
      return `${number} ${cases[0]} ${messege.replace('тусанут', 'тусанет')}`;
    } else {
      return `${number} ${cases[1]} ${messege}`;
    }
  };

  if (users.length !== 0) {
    return (
      <div>
        <span className="badge bg-primary p-2 fs-6">
          {renderPhrase(users.length)}
        </span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((value) => (
                    <span
                      key={value._id}
                      className={`badge bg-${value.color} m-1`}
                    >
                      {value.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <span className="badge bg-danger p-2 fs-6">Никто с тобой не тусанет</span>
  );
};

export default Users;
