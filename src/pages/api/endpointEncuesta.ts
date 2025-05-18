import {supabase} from '../../lib/supabase.ts';
import type { APIRoute } from 'astro';
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
   
    try {   
        const {question, text } = await request.json();
        
        const {data, error} = await supabase
            .from('encuestas_respuestas')
            .insert([
            {
                respuesta: question,
                respuesta_texto: text,
                fecha: new Date(),
            }
            
        ])
        
       if(error){
        console.log("error al insertar datos", error);
       }else{
        console.log("datos insertados ", data);
       }

     return Response.json({mensaje: "funciona"});
    }
    catch (error) {
        console.error('Error:', error);}
        return Response.json( "Error interno", {status: 500}); 
}
 

