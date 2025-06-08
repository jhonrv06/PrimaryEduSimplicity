import { useEffect, useState, useRef} from  'preact/hooks'

export default function Guias(){

    const canva = useRef<HTMLCanvasElement>(null);

    
    

    useEffect(() =>{
        const canvasCurrent = canva.current;
        const canvasContex = canvasCurrent?.getContext('2d');

        canvasContex.fillStyle = 'blue';
        canvasContex.fillRect(50, 50, 100, 75);

        //console.log(canvasCurrent);
    },[])
   



    
     return(
        <>
        
            <canvas width={"40"} height={"40"} ref={canva} style={{ border: '1px solid black' }}>
                
            </canvas>
        </>
)}