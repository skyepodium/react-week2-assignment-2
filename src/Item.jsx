import React from 'react';

export default function Item({ task: { id, title }, onClickDelete }) {
  return (
    <li>
      { title}
      <button type="button" onClick={() => onClickDelete(id)}>
        Done
      </button>
    </li>
  );
}
