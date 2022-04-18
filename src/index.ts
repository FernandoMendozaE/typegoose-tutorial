import { connect } from 'mongoose'
import User from './model/User'
import Product from './model/Product'
import Role from './model/Role'
;(async () => {
  try {
    const db = await connect('mongodb://localhost/typegoosedb')
    console.log('Database is connected to', db.connection.db.databaseName)
  } catch (error) {
    console.error(error)
  }
})()

async function executeQueries() {
  // * Crear un usuario
  // const user = new User({
  //   firstname: 'Joe',
  //   lastname: 'Doe',
  //   email: '   joedoe@gmaiul.com  ',
  //   password: '123456'
  // })
  // await user.save()
  // console.log(user)
  // * Obtener los usuarios
  // const users = await User.find({}, { firstname: 1, _id: 0 })
  // console.log(users)
  // * Obtener un usuario
  // const user = await User.findById('625b668543b501244bfb3900', { firstname: 1, _id: 0 })
  // console.log(user)
  // * Actualizar un usuario por id
  // const user = await User.findByIdAndUpdate(
  //   '625b668543b501244bfb3900',
  //   { firstname: 'Ryan' },
  //   { new: true }
  // )
  // console.log(user)
  // * Elimina todos los usuarios con el email 'joedoe@gmaiul.com'
  // const user = await User.deleteMany({ email: 'joedoe@gmaiul.com' })
  // console.log(user)
  // * Crear un producto
  //   const product = await Product.create({
  //     name: 'laptop',
  //     price: 30,
  //     url: 'product-01',
  //     tags: ['laptop', 'computers', 'gaming'],
  //     comments: [
  //       {
  //         text: 'This is a good product'
  //       },
  //       {
  //         text: 'This is a bad product'
  //       }
  //     ],
  //     owner: '625c5f1e9c3142233b7a25b0'
  //   })
  //   console.log(product)
  // * Obtener un producto y su usuario
  // // ? populate() = Obtiene los datos de una relación y los asigna a una propiedad del modelo
  // const product = await Product.findById('625c5f611add648c4ff4ceb7').populate('owner')
  // console.log(product)
  // * Crear roles
  // // ? insertMany() = Inserta varios documentos en una colección
  // const result = await Role.insertMany([{ name: 'admin' }, { name: 'guest' }, { name: 'user' }])
  // console.log(result)
  // * Crear un usuario con roles
  // const user = new User({
  //   firstname: 'Joe',
  //   lastname: 'Doe',
  //   email: 'joe@gmail.com',
  //   password: '123456',
  //   roles: ['625c62fbe4531d8fcdce0d1c', '625c62fbe4531d8fcdce0d1d']
  // })
  // await user.save()
  // console.log(user)
  // * Obtener un usuario con sus roles
  // const user = await User.findById('625ca53208b7bc0ef206080e').populate('roles', 'name -_id')
  // console.log(user)

  // * Buscar usuarios con firstname 'Joe' llamando a una función estática del modelo User (findByFirstName)
  // const result = await User.findByFirstName('Joe')
  // console.log(result)

  // ? instanciando una clase
  const user = new User({
    firstname: 'marco',
    lastname: 'ryan',
    email: 'jose@gmail.com'
  })

  // ? llamando a la instancia de la clase User (user) encrryptPassword()
  user.password = user.encryptPassword('123456')
  await user.save()
  console.log(user)
}

executeQueries()
