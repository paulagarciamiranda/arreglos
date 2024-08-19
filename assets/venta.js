const propiedades_venta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banios: 4,
      costo: 5000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banios: 1,
      costo: 1200,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Casa de estilo contemporáneo en playa exclusiva",
      src: "https://assets.easybroker.com/property_images/1283387/19096261/EB-DX3387.jpg?version=1570650225",
      descripcion:
        "Este casa de estilo contemporáneo está ubicada en una frente al mar",
      ubicacion: "893 Beach Lane, Prestige Suburb, CA 45678",
      habitaciones: 3,
      banios: 2,
      costo: 4000,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Penthouse de lujo",
      src: "https://i.ytimg.com/vi/ZoMlQ6fezbc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-o5ctacr--HXsHNhhqyvXbyDlNw",
      descripcion:
        "Este penthouse nuevo está situado en el centro de la ciudad, cerca de todo lo que necesitas",
      ubicacion: "789 Central Av, Central Town, CA 98345",
      habitaciones: 7,
      banios: 7,
      costo: 10000,
      smoke: true,
      pets: true,
    },
    {
        nombre: "Moderno apartamento en el centro",
        src: "https://i0.wp.com/bonainmobiliaria.com/wp-content/uploads/2022/06/IMG_6701-scaled.webp?resize=836%2C950&ssl=1",
        descripcion:
          "Este apartamento nuevo está situado en el centro de la ciudad, cerca de todo lo que necesitas",
        ubicacion: "789 Central Av, Central Town, CA 98345",
        habitaciones: 2,
        banios: 1,
        costo: 3000,
        smoke: false,
        pets: true,
      },
      {
        nombre: "Casa de campo en viñedo",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJUXWzkhL7axyrUwGxWYwNL2Ch39Ay7HvGw&s",
        descripcion:
          "Esta histórica casa situada en una antigua viña es la escapada perfecta para un descanso",
        ubicacion: "789 Central Av, Central Town, CA 98345",
        habitaciones: 5,
        banios: 3,
        costo: 4900,
        smoke: true,
        pets: true,
      },
      {
        nombre: "Moderno apartamento en el centro",
        src: "https://http2.mlstatic.com/D_NQ_NP_2X_865590-MLC75832591234_042024-O.webp",
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
        nombre: "Acogedora casa a las afueras de la ciudad",
        src: "https://http2.mlstatic.com/D_NQ_NP_839640-MLC53605509708_022023-O.webp",
        descripcion:
          "Esta casa familiar está situado a 40 minutos del centro de la ciudad",
        ubicacion: "984 Quiet Av, Green Suburb, CA 12385",
        habitaciones: 2,
        banios: 1,
        costo: 2000,
        smoke: true,
        pets: true,
      },
      {
        nombre: "Moderna casa en la playa",
        src: "https://img10.naventcdn.com/avisos/18/00/90/44/32/33/720x532/1095956244.jpg?isFirstImage=true",
        descripcion:
          "Este apartamento nuevo está situado en el centro de la ciudad, cerca de todo lo que necesitas",
        ubicacion: "789 Central Av, Central Town, CA 98345",
        habitaciones: 2,
        banios: 2,
        costo: 4000,
        smoke: true,
        pets: true,
      }
  ];
  const venta = document.getElementById("lista-cards");
  for (let propiedad of propiedades_venta) {
  
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