import Form from "../models/Form.js";

export const submitForm = async (req, res) => {
  try {
    const { budget, purpose, timeline, whatsappNumber } = req.body;
    
    const form = new Form({ budget, purpose, timeline, whatsappNumber });
    await form.save();

    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
