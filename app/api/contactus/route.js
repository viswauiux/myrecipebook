import ContactUs from "@models/contactus";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { email,fullname,description } = await request.json();
    try {
        await connectToDB();
        const newContatus = new ContactUs({ email,fullname,description });
        console.log(newContatus);
        await newContatus.save();
        return new Response(JSON.stringify(newContatus), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}