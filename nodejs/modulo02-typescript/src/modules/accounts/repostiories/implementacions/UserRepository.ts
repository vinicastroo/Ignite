import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      id
    })

    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      email
    })

    return user
  }

  async created({
    name,
    driver_license,
    email,
    password,
    avatar,
    id
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      avatar,
      name,
      driver_license,
      email,
      password,
    })

    await this.repository.save(user)
  }
}