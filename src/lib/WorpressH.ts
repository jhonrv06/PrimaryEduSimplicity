const WP = import.meta.env.WP_BASE_URL;
const routeApi: string = "/wp-json/wp/v2/";

export async function getCurses(data: string){

    try{
        const response = await fetch(`${WP}${routeApi}${data}`);
        const dataCourses = await response.json();
        const first = dataCourses.length;
       
        return first
    }catch(error){
        console.log(`Problema al obtener datos${error}`)
    }
    //const link = `${WP}${routeApi}${data}`;
}
