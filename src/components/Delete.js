import React from 'react';
import { BiX, BiCheck } from 'react-icons/bi';

const Delete = ({ deleteHandler, cancelHandler }) => {
  return (
    <div className="flex gap-5">
      <button>Are you sure?</button>
      <button
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500
     hover:border-red-500 hover:text-gray-50"
        onClick={deleteHandler}
      >
        Yes
        <span className="px-1">
          <BiX size={25} color={'rgb(255,255,255)'} />
        </span>
      </button>
      <button
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-500
     hover:border-green-500 hover:text-gray-50"
        onClick={cancelHandler}
      >
        No
        <span className="px-1">
          <BiCheck size={25} color={'rgb(255,255,255)'} />
        </span>
      </button>
    </div>
  );
};

export default Delete;
