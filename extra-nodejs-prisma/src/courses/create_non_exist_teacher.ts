import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Elixir',
      description: 'Curso excelente de React Native',
      duration: 300,
      teacher: {
        create: {
          name: 'Vini Castro'
        }
      },
    }
  })

  console.log(result)
}

main()