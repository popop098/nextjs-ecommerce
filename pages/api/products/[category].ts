import type { NextApiRequest, NextApiResponse } from 'next';

import data from './data.json';

export function getProductsByCategory(category: string | string[] | undefined) {
  return data.filter((product) => product.category === category);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}
