import { container } from 'tsyringe'
import { UserRepository } from '../../modules/accounts/repostiories/implementacions/UserRepository'
import { IUserRepository } from '../../modules/accounts/repostiories/IUserRepository'

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationsRepository
)

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository

)