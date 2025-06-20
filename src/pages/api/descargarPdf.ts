import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const pdfUrl = req.query.url as string;

  if (!pdfUrl) {
    return res.status(400).send('Falta el parámetro "url"');
  }

  try {
    const response = await fetch(pdfUrl);
    const buffer = await response.buffer();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="archivo.pdf"');
    res.send(buffer);
  } catch (err) {
    res.status(500).send('Error al descargar el PDF'+ err);
  }
};