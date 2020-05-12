import db from '../../database/index';

class User {
  async index(request, response) {
    const data = await db('users');

    return response.status(200).json({ data });
  }

  async store(request, response) {
    const { id, name } = request.body;

    await db('users').insert({
      id,
      name,
    });

    return response.status(200).json({
      id,
      name,
    });
  }
}

export default new User();
