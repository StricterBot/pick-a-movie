require('dotenv').config(); // Carrega as variáveis de ambiente do .env (Seu token da API deve tá lá)
const app = require('./app');
const PORT = process.env.PORT || 3001; // Define a porta aqui

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});