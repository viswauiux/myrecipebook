'use client'
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const RecipeForm = () => {
 
    const {data:session}=useSession()
    console.log(session);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [instructions, setInstructions] = useState(['']);
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: 'gms' }]);

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addInstruction = () => setInstructions([...instructions, '']);
  const removeInstruction = (index) => setInstructions(instructions.filter((_, i) => i !== index));

  const addIngredient = () => setIngredients([...ingredients, { name: '', quantity: '', unit: 'gms' }]);
  const removeIngredient = (index) => setIngredients(ingredients.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeData = {
      email:session?.user?.email,
      title,
      description,
      tags,
      prepTime,
      cookTime,
      servings,
      instructions,
      ingredients,
    };
    console.log(recipeData);
    try {
      console.log('trying');
      const response = await fetch("/api/createrecipe", {
        method: "POST",
        body: JSON.stringify({
          ...recipeData
        }),
      });

      if (response.ok) {
         console.log("Submitted Succesfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      
    }
    // Handle submission logic (e.g., send data to server)
  };

  return (
    <div className='border-2 p-5 flex-col justify-center items-center rounded-lg w-3/5 border-cyan-500'>
          <h1 className='text-center text-2xl font-bold'>Create Recipe</h1>

    <form onSubmit={handleSubmit}>

      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Tags:</label>
        <input
          type="text"
          value={tags.join(', ')}
          onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
        />
      </div>
      <div>
        <label>Preparation Time (minutes):</label>
        <input type="number" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
      </div>
      <div>
        <label>Cooking Time (minutes):</label>
        <input type="number" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
      </div>
      <div>
        <label>Servings:</label>
        <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
      </div>

      <div>
        <label>Instructions:</label>
        {instructions.map((instruction, index) => (
          <div key={index}>
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeInstruction(index)} className=' border-[1px] rounded-md bg-red-500 py-2 text-white'>Delete</button>
          </div>
        ))}
        <button type="button" onClick={addInstruction} className=' border-[1px] rounded-md bg-green-500 py-2 text-white'>Add Instruction</button>
      </div>

      <div>
        <label>Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              required
            />
            <select
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            >
              <option value="gms">gms</option>
              <option value="ml">ml</option>
              <option value="tbs">Tbs</option>
              <option value="ts">Ts</option>
              <option value="piece">Piece</option>
            </select>
            <button type="button" onClick={() => removeIngredient(index)} className=' border-[1px] rounded-md bg-red-500 py-2 text-white'>Delete</button>
          </div>
        ))}
        <button type="button" onClick={addIngredient} className=' border-[1px] rounded-md bg-green-500 py-2 text-white'>Add Ingredient</button>
      </div>

      <button type="submit" className='w-full border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Submit Recipe</button>
    </form>
    </div>
  );
};

export default RecipeForm;