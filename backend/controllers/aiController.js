import AIRequest from '../models/AIRequest.js';

export const aiChat = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = 'AI response placeholder';
    const aiRequest = await AIRequest.create({ user: req.user._id, prompt, response, type: 'chat' });
    res.json(aiRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
