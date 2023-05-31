import './styles/style.css'
import perfil from './assets/images/perfil1.jpg';
import javascript from './assets/images/javascript.jpg';
import html from './assets/images/html.png';
import css from './assets/images/css.png';
import trabajo1 from './assets/images/trabajo1.png';


function App() {
  
  return (
    <>
      
    <header className="header">
        <a href="#" className="logo">Portafolio</a>

        <nav className="navbar">
            <a href="#" className="active">Bienvenida e Introducción</a>
            <a href="#weeks">Tabla de contenido</a>
            <a href="#">Información sobre mí</a>
            
        </nav>
    </header>

    <section className="home">
        <div className="home-content">
            <h1>Hola, Bienvenidos</h1>
            <h3>Portafolio de Desarrollo de Aplicaciones Web</h3>
            <p>Hola!!! Soy Miguel, estudiante de la UNCP, en la carrera profesional 
                de Ingeniería de Sistemas, soy una persona aficionada por la tecnología,
                y por la ciberseguridad.
                Este portafolio esta destinado principalmente, al curso de Desarrollo de
                Aplicaciones Web.</p>

            <div className="btn-box">
                <a href="#">Contácto</a>
                <a href="#">Sobre mí</a> 
            </div>

        </div>
        <div className='photo'>
          <img className='photo-perfil' src={perfil} alt="" />
        </div>
    </section>

    <section id='weeks' className='weeks'>
        <div className='content-weeks'>
            <h2>Contenido de clases</h2>
            <div className='fila'>
                <div className='col izquierda'>
                    <h3>Semana 1</h3>
                    <div className='item izq'>
                        <h4>Fundamentos de la tecnología web</h4>
                        <span className='casa'>Tecnologías de desarrollo de software</span>
                        <span className='fecha'>Tecnologías web</span>
                        <p>Básicas: HTML, CSS y HTTP. <br/>
                        Lenguajes de escritura: JavaScript, WebAPIS. <br />
                        Gráficos: SVG, WebGL y MathML. <br /><br />
                        ¿Cómo funciona la Web? <br />
                        Es un directorio telefónico de Internet, las personas
                        acceden a la información en línea a través de nombres
                        de dominio. Los navegadores web interactuan mediante
                        direcciones de Protocolo de Internet (IP).
                        </p>
                        <div className='conectori'>
                            <div className='circuloi'></div>
                        </div>
                    </div>
                    
                    <div className='item izq'>
                        <h4></h4>
                        <span className='casa'>FrontEnd</span>
                        <span className='fecha'>Lado cliente</span>
                        <p>
                        Es la interfaz visible y accesible para los
                        usuarios con la que interactúan 
                        directamente. <br /> <br />
                        Incorpora: <br />
                        HTML: Canvas, Geolocalización, WebOnline. <br />
                        CSS: Framework CSS, proporcesadores. <br />
                        JS: Framework JS, librerías JS, herramientas
                        de compilación. <br />
                        </p>
                        <div className='conectori'>
                            <div className='circuloi'></div>
                        </div>
                    </div>

                    <div className='item izq'>
                        <h4></h4>
                        <span className='casa'>BackEnd</span>
                        <span className='fecha'>Lado servidor</span>
                        <p>Es la parte de un sitio web o una aplicación que se
                            ocupa del procesamiento y la gestión de los datos
                            en el servidor. <br /> <br />
                            Lenguajes de BackEnd: <br />
                            PHP Frameworks: Laravel, Symfony, CakePHP. <br />
                            JAVA Frameworks: Spring, Blade, Dropwizard. <br />
                            PYTHON Frameworks: Django, Pyramid, Flask. <br />
                            ASP.NET Frameworks: .NET <br />
                            Ruby Frameworks: Rails. <br />
                            JSNode Frameworks: Express Koa. <br /> <br />
                            Gestores de bases de datos: <br />
                            SQLite (Si se requiere seguridad), SQL Server (de
                            alto perfomance), oracle, MYSql (menos performance),
                            MariaDB, PostgreSQL.
                        </p>
                        <div className='conectori'>
                            <div className='circuloi'></div>
                        </div>
                    </div>

                </div>

                <div className='col derecha'>
                    <h3>Semana 2</h3>
                    <div className='item der'>
                        <h4></h4>
                        <span className='casa'>Tecnologías web</span>
                        <span className='fecha'></span>
                        <p>HTML: No es un lenguaje de programación, es un 
                        lenguaje de marcado, usado para estructurar una página. <br /> <br />
                        CSS: Hojas de estilo, Cascading Styke Sheets. <br />
                        Existen diferentes formas de importar los estilos en
                        la página web, insertar la etiqueta style en el head,
                        en otro archivo CSS. <br />
                        Para definir una clase se usa un punto que define una
                        clase, y un * cualquier elemento que tenga la clase. <br />
                        Estilos con ID, el # define un ID, y el *  cualquier elemento 
                        que tenga el ID, por temas de buenas prácticas el ID debería 
                        ser único. <br /> <br />
                        VSC: Es un editor de código fuente desarrollado por Microsoft,
                        para el trabajo de las clases se realizará la instalación, de 
                        igual manera se instalará, Node JS.

                        </p>
                        <div className='conectord'>
                            <div className='circulod'></div>
                        </div>
                    </div>
                    
                    <div className='item der'>
                        <h4></h4>
                        <span className='casa'>Trabajo de laboratorio</span>
                        <span className='fecha'>Figma</span>
                        <p>Ingresar al programa de Figma, diseñar la UI interactiva del 
                            portafolio electrónico en Figma, como trabajo de laboratorio.
                        </p>
                        <div className='conectord'>
                            <div className='circulod'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='work'>
        <h2>Trabajo de laboratorio</h2>
        <h3>Portafolio desarrollado en Figma.</h3>
        <div className='work-content'>
            <figure>
                <img src={trabajo1} alt=""/>
            </figure>
        </div>
    </section>


    <section id="images" className='images'>
        <div className='content-images'>
            <h2>Galeria de imagenes</h2>
            <div className='galeria'>
                <div className='proyecto hover:scale-105 duration-200 ease-in-out'>
                    <img src={html} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem.</p>
                    </div>
                </div>
                <div className='proyecto hover:scale-105 duration-200 ease-in-out'>
                    <img src={css} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem.</p>
                    </div>
                </div>
                <div className='proyecto hover:scale-105 duration-200 ease-in-out'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem.</p>
                    </div>
                </div>
                <div className='proyecto hover:scale-105 duration-200 ease-in-out'>
                    <img src={html} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem.</p>
                    </div>
                </div>
                <div className='proyecto hover:scale-105 duration-200 ease-in-out'>
                    <img src={css} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem.</p>
                    </div>
                </div>
                <div className='proyecto hover:scale-105 duration-200 ease-in-out'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='gallery'>
        <h2>Temario de contenido</h2>
        <div className='gallery-content'>
            <div className='card'>
                <h1>Semana 1</h1> <br />
                <img src={html} alt="" />
            </div>
            <div className='card'>
            <h1>Semana 2</h1> <br />
                <img src={css} alt="" />
            </div>
            <div className='card'>
            <h1>Semana 3</h1> <br />
                <img src={javascript} alt="" />
            </div>
            <div className='card'>
            <h1>Semana 4</h1> <br />
                <img src={html} alt="" />
            </div>
        </div>
    </section>

    </>
  )
}

export default App
