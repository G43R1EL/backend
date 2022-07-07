const Container = require('./container')
const container = new Container('productos.txt')

async function main() {
    const producto = {
        title : 'Producto 1',
        price : 10,
        thumbnail : 'https://via.placeholder.com/150',
    }
    const otroProducto = {
        title : 'Producto 2',
        price : 20,
        thumbnail : 'https://via.placeholder.com/150',
    }
    // Se agrega el producto... Si no existe el archivo, se crea... Si existe, se agrega al array...
    await container.save(producto).then(
        id => console.log(`Se guardó el producto con id: ${id}`)
    )

    // Se agrega otro producto para que hayan dos o más, dependiendo si ya tenía algo el archivo...
    await container.save(otroProducto).then(
        id => console.log(`Se guardó el otro producto con id: ${id}`)
    )

    // Se muestra la cantidad de productos...
    await container.getAll().then(
        objects => console.log(`Se encontraron ${objects.length} productos`)
    )

    // Se muestra el producto con id 1...
    await container.getById(1).then(
        object => object.length > 0 ? console.log(`Se encontro el producto con title: ${object[0].title}`) : console.log('No se encontró el producto')
    )

    // Se muestra el producto con id 10... El cual no debería existir...
    await container.getById(10).then(
        object => object.length > 0 ? console.log(`Se encontro el producto con title: ${object[0].title}`) : console.log('No se encontró el producto')
    )

    // Se elimina el producto con id 1...
    await container.deleteById(1).then(
        () => console.log('Se eliminó el producto con id 1')
    )

    // Se muestra la cantidad de productos nuevamente... Debería haber uno menos...
    await container.getAll().then(
        objects => console.log(`Se encontraron ${objects.length} productos`)
    )

    // Se vuelve a agregar el producto... Pero esta vez ya no tendra el id anterior ya que se eliminó uno antes...
    await container.save(producto).then(
        id => console.log(`Se guardó el producto con id: ${id}`)
    )

    // Se borran todos los productos...
    await container.deleteAll().then(
        () => console.log('Se eliminaron todos los productos')
    )
    
    // Se muestra la cantidad de productos nuevamente... Debería haber 0...
    await container.getAll().then(
        objects => console.log(`Se encontraron ${objects.length} productos`)
    )
}

main()