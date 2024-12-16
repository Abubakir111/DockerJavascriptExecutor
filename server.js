import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';

const app = express();
// Разрешаем запросы от всех источников
app.use(cors());
const port = 5000;

app.use(express.json());

app.post('/execute-js', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  exec(`node -e "${code}"`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: stderr || err.message });
    }
    res.json({ result: stdout });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
