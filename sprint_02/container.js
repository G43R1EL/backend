const fs = require('fs');

export default class Container {
  constructor(filename) {
    this.filename = filename
  }

  save = async (object) => {
    try {

    } catch (error) {
      console.error(error)
    }
  }

  getAll = async () => {
    try {
        const objects = await fs.promises.readFile(this.filename, 'utf8')
        return JSON.parse(objects)
    } catch (error) {
      console.error(error)
    }
  }

  getById = async (id) => {
    try {
        const object = this.getAll().then(objects => {
            return objects.filter(object => object.id === id)
        })
        return object
    } catch (error) {
      console.error(error)
    }
  }

  deleteById = async (id) => {
    try {

    } catch (error) {
      console.error(error)
    }
  }

  deleteAll = async () => {
    try {
        await fs.promises.writeFile(this.filename, '[]')
    } catch (error) {
      console.error(error)
    }
  }

}