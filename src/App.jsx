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

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 1</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 2</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 3</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 4</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 5</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 6</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 7</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 8</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 9</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 10</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 11</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 12</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 13</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 14</h1>
        </div>
    </section>

    <section className='weeks'>
        <div className='weeks-content'>
            <h1>Semana 15</h1>
        </div>
    </section>

    <section className='weeks2'>
        <div className='weeks2-content'>
            <h1>Semana 16</h1>
        </div>
    </section>
    </>
  )
}

export default App
