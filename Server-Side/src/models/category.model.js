import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: [3, "Category name must be atleast 3 letters"],
        maxLength: [20, "Category name must be maximum 20 letters"],
    },
    bio: {
        type: String,
        trim: true,
        minLength: [20, "bio name must be atleast 20 letters"],
        maxLength: [100, "bio name must be maximum 100 letters"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
})

export const categoryModel = mongoose.model('categorie', categorySchema)