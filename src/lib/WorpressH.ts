
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
            const  {name, id} = grado;

            return {name, id}
        })
        
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

        return filtermedia

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}

export async function getAllMedia(idHabilidades) {
    try{
        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100&habilidad=${idHabilidades}`);
        const dataMedia = await response.json();
        return dataMedia

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}