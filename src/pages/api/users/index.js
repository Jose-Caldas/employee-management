// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/database/conn';
import { getUsers } from '@/database/controller';

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
      res.status(200).json({ method, name: 'POST request' });
      break;
    case 'PUT':
      res.status(200).json({ method, name: 'PUT request' });
      break;
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE request' });
      break;
    default:
      res.setHeader(`Allow ['GET', 'POST', 'PUT', 'DELETE']`);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
