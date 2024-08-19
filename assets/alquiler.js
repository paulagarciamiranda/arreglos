const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banios: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banios: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banios: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en las afueras de la ciudad",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWZCiaPKOtsoLiBbJzRMyg1K31Bp07LdOyA&s",
    descripcion:
      "Este penthouse nuevo está situado en el centro de la ciudad, cerca de todo lo que necesitas",
    ubicacion: "789 Central Av, Central Town, CA 98345",
    habitaciones: 3,
    banios: 2,
    costo: 2000,
    smoke: true,
    pets: true,
  },
  {
      nombre: "Clásico apartamento en el centro",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccCytMJFJ25UpXeaeUv86OFSxKzJqhqcjnw&s",
      descripcion:
        "Este apartamento nuevo está situado en el centro de la ciudad, cerca de todo lo que necesitas",
      ubicacion: "789 Central Av, Central Town, CA 98345",
      habitaciones: 2,
      banios: 1,
      costo: 1900,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Casa de contemporánea",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADJl0oAQX23CKY9RWTn8Yn6AL8_Rk6UJqPJC1_zIBTvrVOnUeyAQbj2FM5dHzCDVyoPs&usqp=CAU",
      descripcion:
        "Esta moderna casa situada en el campo es perfecta para un descanso",
      ubicacion: "789 Central Av, Central Town, CA 98345",
      habitaciones: 5,
      banios: 3,
      costo: 4900,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Moderna casa en el centro",
      src: "https://http2.mlstatic.com/D_NQ_NP_2X_784294-MLC77706891354_072024-O.webp",
      descripcion:
        "Este apartamento nuevo está situado en el centro de la ciudad, cerca de todo lo que necesitas",
      ubicacion: "789 Central Av, Central Town, CA 98345",
      habitaciones: 2,
      banios: 2,
      costo: 3000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Sasa en la playa",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDu-ayCgv9xElzO_WNFwbM0o9m6E2Y-OTxg&s",
      descripcion:
        "Esta casa familiar está situado a 40 minutos del centro de la ciudad",
      ubicacion: "984 Quiet Av, Green Suburb, CA 12385",
      habitaciones: 2,
      banios: 1,
      costo: 2900,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Casa familiar en la ciudad",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RmbsUCNs3wjEdP3FaP051nKWaqI7dDwpfA&s",
      descripcion:
        "Esta casa está situada a minutos del centro de la ciudad, cerca de todo lo que necesitas",
      ubicacion: "789 Central Av, Central Town, CA 98345",
      habitaciones: 4,
      banios: 3,
      costo: 4000,
      smoke: true,
      pets: true,
    }
];
const venta = document.getElementById("lista-cards");
for (let propiedad of propiedades_alquiler) {

  let fumar = "";
  if (propiedad.smoke == true) {
    fumar = `<p class="text-success">
                      <i class="fas fa-smoking"></i> Permitido fumar
                    </p>`;
  } else {
    fumar = `<p class="text-danger">
                      <i class="fas fa-smoking-ban"></i> No se permite fumar
                     </p>`;
  }

  let mascotas = "";
  if (propiedad.pets == true) {
    mascotas = `<p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>`;
  } else {
    mascotas = `<p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>`;
  }

  const template = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img class="card-img-top" src=${propiedad.src}/>
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banios} Baños
        </p>
        <p>
          <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
        </p>
        ${fumar}
        ${mascotas}
      </div>
    </div>       
  </div>`;

  venta.innerHTML += template;
}