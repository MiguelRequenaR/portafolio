import './styles/style.css'
import perfil from './../public/images/perfil1.jpg';
import javascript from './../public/images/javascript.jpg';


function App() {
  
  return (
    <>
      
    <header className="header">
        <a href="#" className="logo">Portafolio</a>

        <nav className="navbar">
            <a href="#" className="active">Bienvenida e Introducción</a>
            <a href="#">Tabla de contenido</a>
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
                <a href="#">Hire Me</a>
                <a href="#">Lets Talk</a> 
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
                        <h4>¿Qué es Javascript</h4>
                        <span className='casa'>Javascript es un lenguaje de programación</span>
                        <span className='fecha'>2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere sed, obcaecati sit iusto in, earum voluptatibus 
                            ducimus, adipisci enim deleniti sint neque laboriosam? 
                            Voluptates hic modi cumque autem accusantium magni?</p>
                        <div className='conectori'>
                            <div className='circuloi'></div>
                        </div>
                    </div>
                    
                    <div className='item izq'>
                        <h4>¿Qué es Javascript</h4>
                        <span className='casa'>Javascript es un lenguaje de programación</span>
                        <span className='fecha'>2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere sed, obcaecati sit iusto in, earum voluptatibus 
                            ducimus, adipisci enim deleniti sint neque laboriosam? 
                            Voluptates hic modi cumque autem accusantium magni?</p>
                        <div className='conectori'>
                            <div className='circuloi'></div>
                        </div>
                    </div>

                    <div className='item izq'>
                        <h4>¿Qué es Javascript</h4>
                        <span className='casa'>Javascript es un lenguaje de programación</span>
                        <span className='fecha'>2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere sed, obcaecati sit iusto in, earum voluptatibus 
                            ducimus, adipisci enim deleniti sint neque laboriosam? 
                            Voluptates hic modi cumque autem accusantium magni?</p>
                        <div className='conectori'>
                            <div className='circuloi'></div>
                        </div>
                    </div>

                </div>

                <div className='col derecha'>
                    <h3>Semana 2</h3>
                    <div className='item der'>
                        <h4>¿Qué es Javascript</h4>
                        <span className='casa'>Javascript es un lenguaje de programación</span>
                        <span className='fecha'>2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere sed, obcaecati sit iusto in, earum voluptatibus 
                            ducimus, adipisci enim deleniti sint neque laboriosam? 
                            Voluptates hic modi cumque autem accusantium magni?</p>
                        <div className='conectord'>
                            <div className='circulod'></div>
                        </div>
                    </div>
                    
                    <div className='item der'>
                        <h4>¿Qué es Javascript</h4>
                        <span className='casa'>Javascript es un lenguaje de programación</span>
                        <span className='fecha'>2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere sed, obcaecati sit iusto in, earum voluptatibus 
                            ducimus, adipisci enim deleniti sint neque laboriosam? 
                            Voluptates hic modi cumque autem accusantium magni?</p>
                        <div className='conectord'>
                            <div className='circulod'></div>
                        </div>
                    </div>

                    <div className='item der'>
                        <h4>¿Qué es Javascript</h4>
                        <span className='casa'>Javascript es un lenguaje de programación</span>
                        <span className='fecha'>2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere sed, obcaecati sit iusto in, earum voluptatibus 
                            ducimus, adipisci enim deleniti sint neque laboriosam? 
                            Voluptates hic modi cumque autem accusantium magni?</p>
                        <div className='conectord'>
                            <div className='circulod'></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section id="images" className='images'>
        <div className='content-images'>
            <h2>Galeria de imagenes</h2>
            <div className='galeria'>
                <div className='proyecto'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem omnis accusamus aut autem! Tempora ex 
                            fugiat doloremque illo temporibus ducimus repellat 
                            nostrum delectus voluptate?</p>
                    </div>
                </div>
                <div className='proyecto'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem omnis accusamus aut autem! Tempora ex 
                            fugiat doloremque illo temporibus ducimus repellat 
                            nostrum delectus voluptate?</p>
                    </div>
                </div>
                <div className='proyecto'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem omnis accusamus aut autem! Tempora ex 
                            fugiat doloremque illo temporibus ducimus repellat 
                            nostrum delectus voluptate?</p>
                    </div>
                </div>
                <div className='proyecto'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem omnis accusamus aut autem! Tempora ex 
                            fugiat doloremque illo temporibus ducimus repellat 
                            nostrum delectus voluptate?</p>
                    </div>
                </div>
                <div className='proyecto'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem omnis accusamus aut autem! Tempora ex 
                            fugiat doloremque illo temporibus ducimus repellat 
                            nostrum delectus voluptate?</p>
                    </div>
                </div>
                <div className='proyecto'>
                    <img src={javascript} alt="" />
                    <div className='overlay'>
                        <h3>Imagen número 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat quaerat suscipit nisi sit! Fugiat 
                            exercitationem omnis accusamus aut autem! Tempora ex 
                            fugiat doloremque illo temporibus ducimus repellat 
                            nostrum delectus voluptate?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default App
