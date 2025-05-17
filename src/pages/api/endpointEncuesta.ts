//import {supabase} from '../../lib/supabase.ts';
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
   
    try {
        const {question, text } = await request.json();

        console.log(question + "  " + text);

     return Response.json({mensaje: "hola"});
    }
    catch (error) {
        console.error('Error:', error);}

    
    /*
    const {data, error} = await supabase.from('encuestas_respuestas').insert([
       {
        question,
       } 
    ])*/
     
}
 

