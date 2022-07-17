import React from 'react';

const SearchStatus = ({ length }) => {
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

  return length !== 0 ? (
    <span className="badge bg-primary p-2 fs-6">{renderPhrase(length)}</span>
  ) : (
    <span className="badge bg-danger p-2 fs-6">Никто с тобой не тусанет</span>
  );
};

export default SearchStatus;
