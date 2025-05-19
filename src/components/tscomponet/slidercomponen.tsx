import { useEffect, useState, useRef} from  'preact/hooks'
import  './sliderstyle.css';
import left from '../../assets/inicio/leftbutton.svg'
import Right from '../../assets/inicio/rightbutton.svg'
import Timetolearn from '../../assets/inicio/Timetolearn.svg'
import imagensilder from '../../assets/inicio/Imagen2.png'

export default function SliderComponent(){
    const elementRef = useRef<HTMLElement | null>(null);
    const [currenWith, setCurrent] = useState(0);
  
    const movRight = () =>{
        if(elementRef.current){
            elementRef.current.scrollBy({ 
                left: currenWith, 
                behavior: 'smooth' })
        }
    };

    const movLeft = () =>{
        if(elementRef.current){
            elementRef.current.scrollBy({ 
                left: -currenWith, 
                behavior: 'smooth' })
        }
    };

    useEffect(() =>{
        
        if(elementRef.current){
            setCurrent(elementRef.current.offsetWidth);
        }
    },[])

    return(
        <>
        <article class="slider" ref={elementRef}>
            <div class="slider__container" >
            <section class="slider__section" id="slider1">
				<article class="slider__text">
					<h2>Bienvenido</h2>
					<p>En <span class="container__span --Primary">Primary </span><span class="container__span --Edu">Edu </span><span class="container__span --simplicity">Simplicity</span> Creamos materiales que motivan a los niños y facilitan tu trabajo</p> <button class="button__span"> Unete ahora</button>
                </article>
                <img src={imagensilder.src} alt="Primary" />
			</section>
			<section class="slider__section" id="slider2">
				<article class="slider__text">
					<p>Docentes ayudando a docentes. Comparte ideas y crece junto a otros educadores.</p> 
					<a href="/tusClases">Explora nuestros materiales</a>
				</article>
                <img src={Timetolearn.src} alt="Tiempo de aprender" />
			</section>
            </div>
        </article>
        <section class="buttons__container">
            <button onClick={movLeft} class="button__event">
                <img src={left.src} alt="Mover slider" />
            </button>
            <button onClick={movRight} class="button__event">
                <img src={Right.src} alt="Mover slider" />
            </button>
        </section>
        </>
    );
}

