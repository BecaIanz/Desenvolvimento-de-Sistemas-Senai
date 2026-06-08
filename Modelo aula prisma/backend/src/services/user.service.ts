import { registerUserDto, updateUserDto } from "../dtos/userDTO"
import { prisma }  from '../lib/prisma'

export const registerUser = async (data: registerUserDto) => {
   const { name, email, password } = data
   return await prisma.user.create({
    data: {name,email,password}
   })

}

export const showUsers = async () => {
    return await prisma.user.findMany()   
}
export const getUserById = async (id: number) => {
    return await prisma.user.findFirstOrThrow({
        where: {
            id: id
        }
    })   
}

export const updateUser = async (data: updateUserDto, id: number) => {
   const {name, email, password} = data
   return await prisma.user.update({
    where: {
        id: id
    },
    data: {
        name: name,
        email: email,
        password: password
    }
   })
}

export const deleteUser = async (id: number) => {
   return await prisma.user.delete({
    where: {
        id: id
    }
   })
}