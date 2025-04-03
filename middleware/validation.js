export const validateForm = (req, res, next) => {
  const { budget, purpose, timeline, whatsappNumber } = req.body;

  if (!["<1M", "1-3M", "3-10M", "10M+ AED"].includes(budget)) {
    return res.status(400).json({ error: "Invalid budget option" });
  }

  if (!["Investment", "Second Home", "Relocation"].includes(purpose)) {
    return res.status(400).json({ error: "Invalid purpose option" });
  }

  if (!["Now", "1-3 Months", "6+ Months"].includes(timeline)) {
    return res.status(400).json({ error: "Invalid timeline option" });
  }

  if (!/^[0-9]{10,15}$/.test(whatsappNumber)) {
    return res.status(400).json({ error: "Invalid WhatsApp number format" });
  }

  next();
};
