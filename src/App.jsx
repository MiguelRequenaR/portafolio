import './styles/style.css'
import 'boxicons'
import cabra from './../public/images/cabrita.png'

function App() {
  
  return (
    <>
      
    <header className="header">
        <a href="#" className="logo">Miguel</a>

        <nav className="navbar">
            <a href="#" className="active">Inicio</a>
            <a href="#">Semanas</a>
            <a href="#">Sobre el curso</a>
            <a href="#">Portafolio</a>
            <a href="#"></a>
        </nav>
    </header>

    <section className="home">
        <div className="home-content">
            <h1>Hola, Bienvenidos</h1>
            <h3>Cybersecurity</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam alias accusamus quis 
            harum veritatis fugit perspiciatis. Quaerat, vero inventore! Dolor aut dolorum itaque fugit
            quam facilis explicabo impedit molestias accusantium?</p>

            <div className="btn-box">
                <a href="#">Hire Me</a>
                <a href="#">Lets Talk</a> 
            </div>

        </div>
        <div className='photo'>
          <img className='photo-perfil' src={cabra} alt="" />
        </div>
    </section>

    </>
  )
}

export default App
