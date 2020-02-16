import React from 'react';

const AutoSuggestion = ({ isOpen, listToRender }) =>
  isOpen && (
    <ul>
      {listToRender.map(({ id, address, type, price }) => (
        <li key={id}>
          {id}: {address}-{type} - {price}
        </li>
      ))}
    </ul>
  );

export default AutoSuggestion;
