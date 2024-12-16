# Используем официальный Node.js образ
FROM node:16-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Открываем порт 5000
EXPOSE 5000

# Запускаем сервер
CMD ["node", "server.js"]
