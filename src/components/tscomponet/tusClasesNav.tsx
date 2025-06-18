import  './styles/navGrados.css';

export default  function contentNav (){


    return(
        <>  
            <section className="menu --grados">
                <button className="grados">Grados</button>
                <nav class="grados_list" >
                    <ul>
                        <li><a href="#Transición">Transición</a></li>
                        <li><a href="#Primero">Primero</a></li>
                        <li><a href="#Segundo">Segundo</a></li>
                        <li><a href="#Tercero">Tercero</a></li>
                        <li><a href="#Cuarto">Cuarto</a></li>
                        <li><a href="#Quinto">Quinto</a></li>
                    </ul>
                </nav>
            </section>
            <section className="menu --habilidades">
                <button className="Habilidades">Habilidades</button>
                <nav class="habilidades_list" >
                    <ul>
                        <li><a href="#Listening">Listening</a></li>
                        <li><a href="#Reading">Reading</a></li>
                        <li><a href="#Speaking">Speaking</a></li>
                        <li><a href="#Vocabulary">Vocabulary</a></li>
                        <li><a href="#Writing">Writing</a></li>
                        <li><a href="#Quiz Time">Quiz Time</a></li>
                    </ul>
                </nav>
            </section>
            
        </>
    ) 
}