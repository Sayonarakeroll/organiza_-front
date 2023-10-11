var cadastros = [
  {
    nome: 'Arthur José',
    senha: '1234',
    cpf: '00000000000',
    data: '20/02/2004',
    saldo: 7200,
    email: 'example@com',
    entradas: [{ valor: 5600, data: '20/10/2022' }],
    saidas: [{ categoria: 'farmácia', valor: 500, data: '21/10/2022' }, { categoria: 'shopping', valor: 100, data: '22/10/2022' }]
  },
  {
    nome: 'Heitor Souza',
    senha: '12345',
    data: '24/10/2000',
    cpf: '00000000001',
    saldo: 400,
    email: 'example2@com',
    entradas: [{ valor: 1000, data: '20/10/2022' }],
    saidas: [{ categoria: 'farmácia', valor: 500, data: '22/10/2022' }, { categoria: 'shopping', valor: 100, data: '22/10/2022' }]
  },
];

export default function handler(req, res) {
  if (req.method == 'POST') {
    var info = req.body
    cadastros.push(info);
    res.status(200).json(info);
  } else if (req.method == 'GET' && req.query.cpf != null) {
    var get = cadastros.filter(cadastro => cadastro.cpf == req.query.cpf)
    res.status(200).json(get);
  } else if (req.method == 'GET') {
    res.status(200).json(cadastros);
  }
}