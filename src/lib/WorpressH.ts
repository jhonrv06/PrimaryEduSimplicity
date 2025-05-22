
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

export async function getGrados() {
    try{
        const response = await fetch(`${WP}${routeApi}grado`);
        const dataGrado = await response.json();

        const getValueGrados = dataGrado.map( grado =>{
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
        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&grado=${dataG}`);
        const dataMedia = await response.json();

        const getDataMedia = dataMedia.map( data =>{
        
            const {link, title } = data;

            return{link, title}
        })
        return getDataMedia

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}