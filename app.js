 const argv = require('./configuracion/yargs').argv;
 const lugar = require('./lugar/lugar');
 const clima = require('./clima/clima');
 //console.log(argv.dirrecion);


 //let codeURI = encodeURI(argv.dirrecion);

 /*lugar.getLugarLatLgn(encodeURI(argv.dirrecion))
     .then(response => {
         console.log(response);
     })
     .catch(error => console.log(error));*/
 /*clima.getClima(20.8654356, -89.5798217)
     .then(resp => {
     console.log(resp);
     })
     .catch(err => console.log(err))*/

 let getInfo = async(dirrecion) => {

     try {

         let coord = await lugar.getLugarLatLgn(encodeURI(dirrecion));
         let clim = await clima.getClima(coord.lat, coord.lng);

         return `La temperatura de ${coord.direccion} es de : ${clim}`

     } catch (error) {

         return `No se determino la temperatura de: ${dirrecion}`
     }

 }

 getInfo(argv.dirrecion)
     .then(response => {
         console.log(response);
     })
     .catch(err => console.log(err));