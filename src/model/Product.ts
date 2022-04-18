import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Comment } from './Comments'
import { nanoid } from 'nanoid'
import { User } from './User'

// * Definiciones de @typegoose
// ? Ref = Referencia a un objeto de otro modelo

class Product {
  @prop({ type: String, required: true, trim: true })
  name: string

  @prop({ required: true, default: () => nanoid() }) // ? default: () => nanoid() nos permite generar un id aleatorios
  sku: string

  @prop({ type: Number, default: 0 })
  price: number

  @prop({ type: String, lowercase: true })
  url: string

  @prop({ type: () => [String] })
  tags: string[]

  @prop({ type: () => [Comment] })
  comments: Comment[]

  // * Ej. relación de 1 a 1
  @prop({ ref: () => User }) // ? ref: () => User = Referencia a un objeto de otro modelo
  owner: Ref<User>
}

const ProductModel = getModelForClass(Product)
export default ProductModel
