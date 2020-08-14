import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        // Use this url when using the web app
        image_url: `http://localhost:3333/uploads/${item.image}`
        // Use this url when using the mobile app with an emulator
        // image_url: `http://192.168.0.3:3333/uploads/${item.image}`
      };
    });
  
    return response.json(serializedItems);
  }
}

export default ItemsController;