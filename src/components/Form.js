import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';

const flag = true;

const Form = () => {
  return (
    <div className="container mx-auto py-5">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
};

export default Form;
