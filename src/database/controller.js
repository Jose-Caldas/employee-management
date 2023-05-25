import Users from '../model/user';

export async function getUsers(res, req) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: 'Data not found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}
