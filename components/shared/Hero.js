

const Hero = () =>
  <section className="fj-hero">
    <div className="fj-hero-wrapper row">
      <div className="hero-left col-md-6">
        <h1 className="white hero-title">Olá eu sou o Guilherme M.Munis. Full Stack Developer</h1>
        <h2 className="white hero-subtitle">Confira meu portfolio</h2>
        <div className="button-container">
          <a href="https://github.com/gmmunis" className="btn btn-main bg-blue ttu">Dê uma olhada no meu trabalho</a>
        </div>
      </div>
      <div className="hero-right col-md-6">
        <div className="hero-image-container">
          <a className="grow hero-link">
            <img
              className="hero-image"
              src="https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg"></img>
          </a>
        </div>
      </div>
    </div>
  </section>

export default Hero;