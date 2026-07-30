console.log("ÁNGEL STORE iniciada 🚀");

const contenedor = document.querySelector(".grid-productos");
const botones = document.querySelectorAll(".filtro");
const buscador = document.querySelector("#buscar");

function mostrarProductos(lista){

    contenedor.innerHTML = "";

    lista.forEach(producto=>{

        contenedor.innerHTML += `

        <div class="producto">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="contenido-producto">

                <span class="categoria">${producto.categoria}</span>

                <h3>${producto.nombre}</h3>

                <p class="precio">$${producto.precio}</p>

                <p class="disponibilidad">

                    ${
                        producto.stock
                        ? '<span class="verde">🟢 Disponible</span>'
                        : '<span class="rojo">🔴 Agotado</span>'
                    }

                </p>

                <a
                    class="comprar"
                    href="https://wa.me/5578922414?text=Hola,%20me%20interesa%20la%20playera%20${encodeURIComponent(producto.nombre)}"
                    target="_blank">

                    Comprar por WhatsApp

                </a>

            </div>

        </div>

        `;

    });

}

mostrarProductos(productos);

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        botones.forEach(b=>b.classList.remove("activo"));

        boton.classList.add("activo");

        const categoria = boton.dataset.categoria;

        if(categoria==="Todos"){

            mostrarProductos(productos);

        }else{

            const filtrados = productos.filter(producto=>producto.categoria===categoria);

            mostrarProductos(filtrados);

        }

    });

});
buscador.addEventListener("keyup",()=>{

    const texto = buscador.value.toLowerCase();

    const resultado = productos.filter(producto=>

        producto.nombre.toLowerCase().includes(texto)

    );

    mostrarProductos(resultado);

});