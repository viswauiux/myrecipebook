import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { email,title,description,tags,ingredients,instructions,prepTime,cookTime,servings} = await request.json();
    try {
        await connectToDB();
        const newRecipe = new Recipe({ email,title,description,tags,ingredients,instructions,prepTime,cookTime,servings});
        console.log(newRecipe);
        await newRecipe.save();
        return new Response(JSON.stringify(newRecipe),{ status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}