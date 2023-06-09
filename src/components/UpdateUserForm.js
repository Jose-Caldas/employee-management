'use client';
import { BiBrush } from 'react-icons/bi';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getUser, getUsers, updteUser } from '@/lib/helper';

const UpdateUserForm = ({ formId, formData, setFormData }) => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(['users', formId], () =>
    getUser(formId)
  );

  const UpdateMutation = useMutation((newData) => updteUser(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery('users', getUsers);
    },
  });

  if (isLoading) return <div>Loading...!</div>;
  if (isError) return <div>Error!</div>;

  const { name, email, salary, date, status } = data;
  const [firstname, lastname] = name ? name.split(' ') : formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });
    console.log(updated);
    UpdateMutation.mutate(updated);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type ">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          defaultValue={firstname}
          className="min-w-full px-5 py-3 focus:outline-none border rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          defaultValue={lastname}
          className="min-w-full px-5 py-3 focus:outline-none border rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          placeholder="Email"
          defaultValue={email}
          className="min-w-full px-5 py-3 focus:outline-none border rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          defaultValue={salary}
          className="min-w-full px-5 py-3 focus:outline-none border rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          className="px-5 py-3 focus:outline-none border rounded-md"
          defaultValue={date}
          onChange={setFormData}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            defaultChecked={status === 'Active'}
            onChange={setFormData}
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            defaultChecked={status !== 'Active'}
            onChange={setFormData}
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update
        <span className="px-1">
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
};

export default UpdateUserForm;
