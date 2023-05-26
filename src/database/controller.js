import Users from '../model/user';

//Get: http://localhost:3000/api/users
export async function getUsers(res, req) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: 'Data not found!' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data!' });
  }
}

//Post: http://localhost:3000/api/users
export async function postUser(res, req) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: 'Form Data Not Provided...!' });
    const newUser = await Users.create(formData);
    res.status(201).json(newUser);
  } catch (error) {
    return res.status(405).json({ error });
  }
}

//Put: http://localhost:3000/api/users/:id
export async function putUser(res, req) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    res.status(405).json({ error: 'Error While Updating the Data!' });
  }
}

//Delete: http://localhost:3000/api/users/:id
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }
    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    return res.status(404).json({ error: 'Error While deleting the User' });
  }
}
