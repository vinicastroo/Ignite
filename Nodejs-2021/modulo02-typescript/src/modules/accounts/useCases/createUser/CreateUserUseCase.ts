import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repostiories/IUserRepository";
import { hash } from 'bcrypt'
import { AppError } from "../../../../erros/AppError";
@injectable()
export class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) { }

  async execute({
    name,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists")
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.created({
      name,
      driver_license,
      email,
      password: passwordHash,
    })
  }
}