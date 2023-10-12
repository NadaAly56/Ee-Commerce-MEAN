import Joi from "joi";

export const addCategorySchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    bio: Joi.string().min(20).max(100),
    isDeleted: Joi.boolean().default(false)
})