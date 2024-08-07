import { Schema, model, models } from 'mongoose';


const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  unit: { type: String, required: true },
 
});

const recipeSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
  },
  title: { type: String, required: true },
  description: { type: String },
  tags: { type: [String], required: true },
  ingredients: { type: [ingredientSchema], required: true },
  instructions: { type: [String], required: true },
  prepTime: { type: Number }, // in minutes
  cookTime: { type: Number }, // in minutes
  servings: { type: Number },
});

const Recipe = models.Recipe || model('Recipe', recipeSchema);

export default Recipe;