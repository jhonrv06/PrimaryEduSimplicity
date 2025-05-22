import {useEffect} from  'preact/hooks'

export default  function contentCourse (){
    
    useEffect(()=>{
        const obtenerData  = async () =>{
            try{
                const materiales = await fetch('api/Materiales');
                const dataM = await materiales.json();
                console.log(dataM)
            }catch(error){
                console.log(error)
            }
        }
        obtenerData()
    })

    
    return(
        <>
        <section className="container">
            <section className="container__data">
                <h3>Primero periodo</h3>
                <details>
                <summary>lección 1</summary>
                    <h4>Actividad 1</h4> 
                    <h4>Actividad 1</h4> 
                    <h4>Actividad 1</h4> 
            </details>

            </section>
            
            <article class="section__container --primero">
                <h3>Primero</h3>
                <p></p>
            </article>  
            <article class="section__container --segundo">
                <h3>Segundo</h3>
                <p></p>
            </article>
            <article class="section__container --tercero">
                <h3>Tercero</h3>
                <p></p>
            </article>
        </section>
        </>
    ) 
}