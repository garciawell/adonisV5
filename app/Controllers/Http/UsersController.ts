import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async ({request, response}: HttpContextContract) {
        const email = request.input("email")
        const password = request.input("password")

        
    }
    
}
