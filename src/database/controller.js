import Users from '../model/user';

export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: 'Data not found!' });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ error: 'Error While Fetching Data!' });
  }
}

export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findById(userId);
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    return res.status(404).json({ error: 'Cannot Get User...!' });
  }
}

export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: 'Form Data Not Provided...!' });
    const newUser = await Users.create(formData);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(405).json({ error });
  }
}

export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    return res.status(405).json({ error: 'Error While Updating the Data!' });
  }
}

export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: user });
    }
    return res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    return res.status(404).json({ error: 'Error While deleting the User' });
  }
}
