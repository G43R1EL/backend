class User {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `Apellido y nombre: ${this.apellido}, ${this.nombre}`
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({nombre, autor})
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }
}



const books = [
    { nombre: 'It ends with us', autor: 'Coollen Hoover' },
    { nombre: 'El señor de las moscas', autor: 'William Golding' }
]

const pets = [
    'Toby',
    'Crixo',
    'Ginger',
    'Cotton',
    'Bichita'
]

const usuario = new User('Nelson', 'Hernández', books, pets)
usuario.addBook('Fundación', 'Isaac Asimov')
usuario.addMascota(['Tota', 'Fake', 'Ipa'])
console.log(usuario.getFullName())
console.log(usuario.getBookNames())
console.log(usuario.countMascotas())