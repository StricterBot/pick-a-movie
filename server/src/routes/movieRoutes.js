const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/movies', movieController.getMovies);
router.get('/genres', movieController.getGenres); // Rota para buscar gêneros, útil para o filtro.
// TO-DO: Incrementar novas rotas de buscas e novos tipos de pesquisa.

module.exports = router;