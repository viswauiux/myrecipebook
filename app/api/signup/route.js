import SignUp from "@models/signup";
import bcrypt from 'bcrypt';

import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { email,fullname,password } = await request.json();
    try {
        await connectToDB();
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new SignUp({ email,fullname,password:hashedPassword });
        console.log(newUser);

        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a newUser", { status: 500 });
    }
}