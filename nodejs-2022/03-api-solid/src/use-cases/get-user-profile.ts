import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetUseCaseRequest {
  userId: string
}

interface GetUseCaseResponse {
  user: User
}

export class GetProfileUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ userId }: GetUseCaseRequest): Promise<GetUseCaseResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}
