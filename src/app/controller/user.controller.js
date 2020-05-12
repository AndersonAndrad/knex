import db from '../../database/index';

class User {
  async index(request, response) {
    const data = await db('users');

    return response.status(200).json({ data });
  }
}

export default new User();
