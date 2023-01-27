import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso excelente de React Native',
      duration: 300,
      teacher: {
        connect: {
          id: "b7f91b8c-0b56-4c69-8f7e-488373db377c"
        }
      },
    }
  })

  console.log(result)
}

main()