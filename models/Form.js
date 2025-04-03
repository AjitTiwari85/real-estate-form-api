import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    budget: { type: String, required: true, enum: ["<1M", "1-3M", "3-10M", "10M+ AED"] },
    purpose: { type: String, required: true, enum: ["Investment", "Second Home", "Relocation"] },
    timeline: { type: String, required: true, enum: ["Now", "1-3 Months", "6+ Months"] },
    whatsappNumber: { type: String, required: true, match: /^[0-9]{10,15}$/ },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);
export default Form;
