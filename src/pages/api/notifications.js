let notifications = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(notifications);
  } else if (req.method === 'POST') {
    const { date } = req.body;
    if (date) {
      notifications.push(date);
      res.status(201).json({ message: 'Notificação adicionada com sucesso' });
    } else {
      res.status(400).json({ error: 'A data da notificação é obrigatória' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}