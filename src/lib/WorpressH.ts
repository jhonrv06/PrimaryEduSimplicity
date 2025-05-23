
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

export async function getRecurses(data) {
    const dataRecurse = ["habilidad", "grado"];
    const indice = dataRecurse.indexOf(data)
    
    try{
        const response = await Promise.all(

           dataRecurse.map( async recursos =>{
            const respon = await fetch(`${WP}${routeApi}${recursos}`)
            
            const dataGrado = await respon.json();

            return dataGrado
            
           } )
        )

        console.log(response[indice])
        //const response = await fetch(`${WP}${routeApi}${data}`);

        const getValueGrados = response.map( grado =>{
            const  {name, id} = grado;
            return {name, id}
        })
        
        return getValueGrados;

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}

export async function getGrados() {
    try{
         const response = await fetch(`${WP}${routeApi}grado`)

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

export async function getPeriodos() {
    try{
        const response = await fetch(`${WP}${routeApi}periodo`);
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
        return dataMedia

    }catch(error){
        console.log(`Error al obtener los datos ${error}`)
    }
}
