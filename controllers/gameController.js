const Game = require('../models/Game');

// GET todos os jogos
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar jogos', error });
  }
};

// GET jogo por ID
exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Jogo não encontrado' });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar jogo', error });
  }
};

// POST criar novo jogo
exports.createGame = async (req, res) => {
  try {
    const { title, platform, genre, releaseYear } = req.body;
    const imageUrl = req.file?.path || null;

    const newGame = new Game({
      title,
      platform,
      genre,
      releaseYear,
      imageUrl,
    });

    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar jogo', error });
  }
};

// PUT atualizar jogo
exports.updateGame = async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGame) return res.status(404).json({ message: 'Jogo não encontrado' });
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar jogo', error });
  }
};

// DELETE remover jogo
exports.deleteGame = async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ message: 'Jogo não encontrado' });
    res.status(200).json({ message: 'Jogo removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover jogo', error });
  }
};
