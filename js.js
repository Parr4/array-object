const venta = document.querySelector('#venta');
const alquiler = document.querySelector('#alquiler');

const propiedades_venta = [
    {
        nombre: 'Mansion lujosa sector exclusivo',
        src: "1.webp",
        descripcion: 'Hermosa mansion ubicada en el centro de la ciudad',
        ubicacion: 'Los quechuas 01521, Puente alto',
        habitaciones: 5,
        baños: 3,
        costo: 15000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa Pequeña bien ubicada',
        src: '2.webp',
        descripcion: 'Pequeña chosa ubicada en buen sector capitalino, con buen desvan, incluye noctulo',
        ubicacion: 'Avenida siempreviva 1525, Tokyo',
        habitaciones: 3,
        baños: 3,
        costo: 5000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Departamento con vista a sector rural',
        src: '3.jpeg',
        descripcion: 'Exclente departamento estudio con vista a sector rural con abundancia de pastabaseros',
        ubicacion: 'Calle buenavista, peor es nada',
        habitaciones: 2,
        baños: 3,
        costo: 9990000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Chosa roñosa con buena conectividad',
        src: '4.jpg',
        descripcion: 'Casa fea y chica, pero con metro cerca',
        ubicacion: 'Los quechuas 01521, Puente alto',
        habitaciones: 5,
        baños: 3,
        costo: 15000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa grande mal ubicada',
        src: '5.jpeg',
        descripcion: 'Casa para familias grandes y con muchas necesidades, pero al final del mundo',
        ubicacion: 'Avenida rancagua 1312, Panguipulli',
        habitaciones: 3,
        baños: 3,
        costo: 5000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casita con vista a sector central',
        src: '6.jpeg',
        descripcion: 'Casa ubicada en el sector mas urbano de la ciudad',
        ubicacion: 'pasaje los mayas 07543, temuco',
        habitaciones: 2,
        baños: 3,
        costo: 9990000,
        smoke: false,
        pets: true
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Chosa roñosa con buena conectividad',
        src: '4.jpg',
        descripcion: 'Casa fea y chica, pero con metro cerca',
        ubicacion: 'Los quechuas 01521, Puente alto',
        habitaciones: 5,
        baños: 3,
        costo: 15000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa grande mal ubicada',
        src: '5.jpeg',
        descripcion: 'Casa para familias grandes y con muchas necesidades, pero al final del mundo',
        ubicacion: 'Avenida rancagua 1312, Panguipulli',
        habitaciones: 4,
        baños: 3,
        costo: 5000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casita con vista a sector central',
        src: '3.jpeg',
        descripcion: 'Casa ubicada en el sector mas urbano de la ciudad',
        ubicacion: 'pasaje los mayas 07543, temuco',
        habitaciones: 2,
        baños: 3,
        costo: 9990000,
        smoke: false,
        pets: true
    }
    ,
    {
        nombre: 'Departamento con vista a sector rural',
        src: '2.webp',
        descripcion: 'Exclente departamento estudio con vista a sector rural con abundancia de pastabaseros',
        ubicacion: 'Calle buenavista, peor es nada',
        habitaciones: 2,
        baños: 3,
        costo: 9990000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Mansion lujosa sector exclusivo',
        src: '1.webp',
        descripcion: 'Hermosa mansion ubicada en el centro de la ciudad',
        ubicacion: 'Los quechuas 01521, Puente alto',
        habitaciones: 5,
        baños: 3,
        costo: 15000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa Pequeña bien ubicada',
        src: '6.jpeg',
        descripcion: 'Pequeña chosa ubicada en buen sector capitalino, con buen desvan, incluye noctulo',
        ubicacion: 'Avenida siempreviva 1525, Tokyo',
        habitaciones: 2,
        baños: 3,
        costo: 5000000,
        smoke: true,
        pets: false
    }
]
console.log(location.pathname)
let page = location.pathname
let ventaSection = '';
let alquilerSection = '';

function card(type, section, cantidad, part) {

    for (let i = 0; i <= cantidad; i++) {
        section += `
    <article class="card col-3">
        <img class="card-img-top" src='./statics/${type[i].src}'>
        <div class="card-body">
            <h2 class="card-title">${type[i].nombre} </h2>
            <h4 class="card-subtitle mb-2 text-body-secondary">${type[i].descripcion}</h4>
            <h4 class="card-text">${type[i].ubicacion}</h4>
            <div class='rooms'>
            <div class='room'>
                <i class="fa-solid fa-house"></i>
                <p> ${type[i].habitaciones} Habitaciones </p>
            </div>
            <div class='room'>
                <i class="fa-solid fa-toilet"></i>
                <p> ${type[i].baños} baños</p>
            </div>

            </div>
            <h4>$${type[i].costo}</h4>
            <div  class="allow">${type[i].smoke === true ? `<i class="fa-solid green fa-smoking"></i><p class= 'green'>Permitido Fumar</p> ` : ` <i class="fa-solid red fa-ban-smoking"></i><p class='red'>No se permite fumar</p>`}</div>
            <div  class="allow">${type[i].pets === true ? `<i class="fa-solid green fa-paw"></i><p class= 'green'>Mascotas Permitidas</p> ` : ` <i class="fa-solid red fa-paw"></i><p class='red'>No se permiten mascotas</p>`}</div>
        </div>
    </article>
    `
    }
    part.innerHTML = section;
}

if (venta !== null) {
    let cantidad = 0
    if (page !== '/array-object/index.html') {
        cantidad = propiedades_venta.length - 1
        card(propiedades_venta, ventaSection, cantidad, venta)
    } else {
        cantidad = 2
        card(propiedades_venta, ventaSection, cantidad, venta)
    };}

if (alquiler !== null) {
    let cantidad = 0
    if (page !== '/array-object/index.html') {
        cantidad = propiedades_alquiler.length - 1
        card(propiedades_alquiler, alquilerSection, cantidad, alquiler)
    } else {
        cantidad = 2
        card(propiedades_alquiler, alquilerSection, cantidad, alquiler)
    };
}

