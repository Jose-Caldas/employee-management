// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/database/conn';
import { getUsers, postUser, putUser, deleteUser } from '@/database/controller';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(res, req);
      break;
    case 'POST':
      postUser(res, req);
      break;
    case 'PUT':
      putUser(res, req);
      break;
    case 'DELETE':
      deleteUser(req, res);
      break;
    default:
      res.setHeader(`Allow ['GET', 'POST', 'PUT', 'DELETE']`);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
