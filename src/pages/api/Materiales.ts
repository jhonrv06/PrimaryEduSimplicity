import {getCurses} from '../../lib/WorpressH';
import type { APIRoute } from 'astro';


export const GET: APIRoute = async () =>  {
    try{ 
        const contenido = await getCurses("curso");
        console.log(contenido);
        return new Response(JSON.stringify(contenido), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
        },      
        })

    }catch(error){
        return new Response(JSON.stringify({error:  `Error al obteneer datos${error}`}),{
            status: 404,
         })
    }

}