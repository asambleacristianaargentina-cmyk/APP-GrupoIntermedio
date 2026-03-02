const filiales = [
{
provincia:"Buenos Aires",
ciudad:"La Plata",
nombre:"Filial La Plata",
telefono:"221-1234567",
direccion:"Calle 123 N°456"
},
{
provincia:"Córdoba",
ciudad:"Córdoba",
nombre:"Filial Córdoba Centro",
telefono:"351-9876543",
direccion:"Av. Siempre Viva 742"
}
];

function buscar(){

const provincia = document.getElementById("provincia").value.toLowerCase();
const ciudad = document.getElementById("ciudad").value.toLowerCase();

const resultadosDiv = document.getElementById("resultados");
resultadosDiv.innerHTML="";

const resultados = filiales.filter(f =>
f.provincia.toLowerCase().includes(provincia) &&
f.ciudad.toLowerCase().includes(ciudad)
);

if(resultados.length===0){
resultadosDiv.innerHTML="<p>No se encontraron resultados.</p>";
return;
}

resultados.forEach(f=>{
const card = document.createElement("div");
card.className="card-filial";

card.innerHTML=`
<h3>${f.nombre}</h3>
<p><strong>Provincia:</strong> ${f.provincia}</p>
<p><strong>Ciudad:</strong> ${f.ciudad}</p>
<p><strong>Tel:</strong> ${f.telefono}</p>
<p><strong>Dirección:</strong> ${f.direccion}</p>
<a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.direccion + ' ' + f.ciudad)}">
Ver en Google Maps
</a>
`;

resultadosDiv.appendChild(card);
});

}
