import { useState } from 'react';
import { BiUserPlus } from 'react-icons/bi';
import Table from '@/components/Table';
import Form from '@/components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '@/redux/reducer';

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(toggleChangeAction());
  };

  return (
    <main className="p-5">
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Employee Management
      </h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button
            className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-gray-800 hover:text-gray-800"
            onClick={handleForm}
          >
            Add Employee
            <span className="px-1">
              <BiUserPlus size={23} />
            </span>
          </button>
        </div>
      </div>

      {visible ? <Form /> : <></>}

      <div className="container mx-auto">
        <Table />
      </div>
    </main>
  );
}
