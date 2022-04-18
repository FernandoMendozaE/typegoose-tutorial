import { prop, getModelForClass, Ref, ReturnModelType, pre, post } from '@typegoose/typegoose'
import { Role } from './Role'
import bcrypt from 'bcryptjs'

// * Definiciones de @typegoose
// ? @prop(): Define una propiedad en el modelo, con un nombre y un tipo de dato (string, number, boolean, etc)
// ? @getModelForClass(): Crea un modelo a partir de una clase.
// ? ReturnModelType<T>(): Devuelve un modelo de tipo T (User) que se ha creado a partir de la clase User.
// ? typeof es una palabra reservada que indica que el tipo de dato es una instancia de la clase.
// ? static: Define una propiedad estática en la clase, nos permite acceder a ella desde la clase para no tener que instanciarla.
// ? @pre(): Define una función que se ejecuta antes de guardar un documento en la base de datos.
// ? @post(): Define una función que se ejecuta después de guardar un documento en la base de datos.

@pre<User>('save', async function () {
  this.firstname = this.firstname + 'algo'
  this.password = await bcrypt.hash(this.password, 10)
})
@post<User>('save', () => {
  console.log('User saved')
})
export class User {
  @prop({ required: true }) // mongoose
  firstname: string // typescript

  @prop({ required: true })
  lastname: string

  @prop({ required: true, trim: true })
  email: string

  @prop({ required: true, minlength: 6 })
  password: string

  @prop({ ref: () => Role })
  // ? Ref<Role>[] es una referencia a una clase de [] de Role
  roles: Ref<Role>[]

  static async findByFirstName(this: ReturnModelType<typeof User>, firstname: string) {
    return this.find({ firstname })
  }

  encryptPassword(password: string) {
    return '123xyz' + password
  }
}

const UserModel = getModelForClass(User)
export default UserModel
