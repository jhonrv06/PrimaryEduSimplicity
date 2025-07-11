import { number } from "astro:schema";
import { console } from "inspector";

const WP = import.meta.env.WP_BASE_URL;
const routeApi: string = "/wp-json/wp/v2/";

export async function getCurses(data: string){
    try{
        const response = await fetch(`${WP}${routeApi}${data}`);
        const dataCourses = await response.json();
        const first = dataCourses.length;
        
        console.log("Datos obtenidos exitosamente")
        return first;
    }catch(error){
        console.log(`Problema al obtener datos${error}`)
    }
    //const link = `${WP}${routeApi}${data}`;
}

export async function getRecurses(data: string) {
    const dataRecurse = ["habilidad", "grado", "periodo"];
    const indice = dataRecurse.indexOf(data)

    try{
        const response = await Promise.all(

           dataRecurse.map( async recursos =>{
            const respon = await fetch(`${WP}${routeApi}${recursos}`)
            const dataGrado = await respon.json();
            return dataGrado
            
           } )
        )
        
        const getValueGrados = response[indice].map( grado =>{

            const  {name, id, slug, orden} = grado;

            return {name, id, slug, orden}
        })
        console.log("Habilidades, grados y periodos obtenidos exitosamente")
        return getValueGrados;
        
    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}

export async function getMedia(dataG: string) {
    try{
        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&grado=${dataG}&per_page=100`);
        const dataMedia = await response.json();

        const filtermedia = dataMedia.map( ({title, link, periodo}) => {

            return {title, link, periodo}
        })
        console.log("Datos Obtenidos 2 getMedia")
        return filtermedia

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}



export async function getHabilitis(idHabilidades: string) {
    try{
        console.log("Iniciando obtención de los recursos habilidades")
        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100&habilidad=${idHabilidades}`);
        const dataMedia = await response.json();

        const habillities = dataMedia.map(({title, link, habilidad}) =>{
            const titleModific = title.rendered.replace("#"," ");
          
            return {titleModific, link, habilidad}
        }

        )
        console.log("Datos Obtenidos 3 getHabilities")
        return habillities

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}

export async function  getAllMedia() {
    
      try{
        console.log("Iniciando obtención de los recursos")
        let totalData = [];

        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100`);
        const pagesTotal = response.headers.get('X-WP-TotalPages');
        const dataMedia = await response.json();
        

       for( let i = 1; i < pagesTotal; i++){
        const response1 = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100&page=${pagesTotal}`);
        const dataMedia1 = await response1.json();
        
        totalData = [...dataMedia1, ...dataMedia]
       }
       
       const filterMedia = totalData.map(({title, guid, periodo, grado}) => {
        let order = [];
        const link = guid.rendered;
        //Es necesario quitar el signo # para poder obtener los nombres de las imágenes
        const titleModific = title.rendered.replace("#"," ");

        for (const letter of titleModific) {
            
            
            if(!isNaN(letter) && letter !== " "){
                order.push(letter)
            }
           
        }
        const orderCommas = order.join().replaceAll(",","");
        const orderToNumber = Number(orderCommas);

        return {titleModific, link, periodo, grado, orderToNumber };
       })
       
        console.log(filterMedia)
        console.log("Recursos obtenidos exitosamente")
        return filterMedia

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }

}