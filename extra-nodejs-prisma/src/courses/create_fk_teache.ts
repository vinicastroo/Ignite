import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de ReactJs',
      description: 'Curso excelente de React JS',
      duration: 300,
      fk_id_teacher: 'd014a915-e31b-4bd4-bebd-4d9c4fb0e5f8'
    }
  })

  console.log(result)
}

main()