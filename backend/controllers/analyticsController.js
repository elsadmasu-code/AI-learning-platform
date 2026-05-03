export const getAnalytics = async (req, res) => {
  try {
    res.json({ message: 'Analytics endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
