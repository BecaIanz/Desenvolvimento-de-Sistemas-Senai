import { registerUserDto } from "../DTO/userDTO";
import { prisma } from "../lib/prisma";

export const registerUser = async (data: registerUserDto) => {
    const { name, email, password, birth_date} = data
    await prisma.Us

}