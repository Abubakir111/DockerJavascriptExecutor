import express from 'express';
import cors from 'cors';
import vm from 'vm'; // Для выполнения кода

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/execute-js', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    // Массив для перехвата вывода консоли
    let consoleOutput = [];

    // Переопределяем console.log
    const customConsole = {
      log: (...args) => {
        consoleOutput.push(...args); // Сохраняем все аргументы
      }
    };

    // Динамический объект `data`
    const contextData = {};

    // Контекст выполнения
    const context = vm.createContext({
      console: customConsole,
      data: contextData
    });

    let result;
    try {
      result = vm.runInContext(code, context);
    } catch (executionError) {
      // Если ошибка при выполнении кода
      return res.status(400).json({
        error: `Execution Error: ${executionError.message}`,
        stack: executionError.stack // Детали стека ошибки (строка и позиция)
      });
    }

    res.json({ consoleOutput, result }); // Возвращаем вывод консоли и результат
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
