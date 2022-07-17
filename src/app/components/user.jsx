import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({ users, onDeleteUsers }) => {
  return users.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        <Qualitie
          qualitie={user.qualities}
          // Не догадался, как отработать отрисовку <span> в компоненте, если переданы те props, что указаны ниже
          // color={user.qualities.map((qualitie) => qualitie.color)}
          // name={user.qualities.map((qualitie) => qualitie.name)}
          // _id={user.qualities.map((qualitie) => qualitie._id)}
        />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td>
        <BookMark
        // status={user}
        // onToggleBookMark={onToggleBookMark}
        />
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteUsers(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
};

export default User;
