import mongoose from "mongoose"

export const studentSchema = new mongoose.Schema(
{
    Name: String,
    Age: String,
    City: String
},
{
    timestamps: true,
    
}
)

export const Student =
mongoose.models.Student || mongoose.model("Student", studentSchema)