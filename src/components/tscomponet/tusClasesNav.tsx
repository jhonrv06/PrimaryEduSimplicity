import {useEffect} from  'preact/hooks'
import  './styles/navGrados.css';

export default  function contentNav (){



    return(
        <>
            <button className="grados">Grados</button>
            <nav class="grados_list" >
                <ul>
                    <li>Transición</li>
                    <li>Primero</li>
                    <li>Segundo</li>
                    <li>Tercero</li>
                    <li>Cuarto</li>
                    <li>Quinto</li>
                </ul>
            </nav>
            <button className="Habilidades">Habilidades</button>
            <nav class="habilidades_list" >
                <ul>
                    <li>Escucha</li>
                    <li>Lectura</li>
                    <li>Habla</li>
                    <li>Tercero</li>
                    <li>Cuarto</li>
                    <li>Quinto</li>
                </ul>
            </nav>
        </>
    ) 
}