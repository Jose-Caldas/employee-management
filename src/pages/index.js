import { BiUserPlus } from 'react-icons/bi';
import Table from '@/components/Table';
import Form from '@/components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, deleteAction } from '@/redux/reducer';
import { deleteUser, getUsers } from '@/lib/helper';
import { useQueryClient } from 'react-query';
import Delete from '@/components/Delete';

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();

  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(toggleChangeAction());
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery('users', getUsers);
      dispatch(deleteAction(null));
    }
  };

  const cancelHandler = () => {
    dispatch(deleteAction(null));
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
        {deleteId ? (
          <Delete deleteHandler={deleteHandler} cancelHandler={cancelHandler} />
        ) : (
          <></>
        )}
      </div>

      {visible ? <Form /> : <></>}

      <div className="container mx-auto">
        <Table />
      </div>
    </main>
  );
}
