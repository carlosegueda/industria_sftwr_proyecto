import { useRef, useState, useEffect } from "react";

export default function TestimoniosCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonios = [
    {
      id: 1,
      nombre: "María González",
      cargo: "Paciente con tratamiento crónico",
      texto: "PillBuddy ha sido fundamental para organizar mi medicación diaria. Antes olvidaba tomar mis pastillas con frecuencia, pero ahora las notificaciones me mantienen al día. ¡Mi salud ha mejorado notablemente!",
      fecha: "15 Mayo, 2023",
      rating: 5,
      imagen: "/mujer1.jpg"
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      cargo: "Usuario desde 2022",
      texto: "Después de usar la app por más de un año, puedo decir que ha transformado completamente cómo manejo mis medicamentos. La función de geolocalización me ha ayudado a encontrar farmacias con mis medicamentos cuando viajo.",
      fecha: "22 Junio, 2023",
      rating: 5,
      imagen: "/hombre1.jpg"
    },
    {
      id: 3,
      nombre: "Laura Jiménez",
      cargo: "Cuidadora de adulto mayor",
      texto: "Como cuidadora de mi abuelo, PillBuddy me ha dado tranquilidad. Puedo monitorear su medicación remotamente y recibir alertas si hay algún problema. La interfaz es tan simple que hasta mi abuelo la puede usar.",
      fecha: "3 Julio, 2023",
      rating: 4,
      imagen: "/enfermera.jpg"
    },
    {
      id: 4,
      nombre: "Javier Ruiz",
      cargo: "Estudiante universitario",
      texto: "Al principio pensé que no necesitaba una app para mis medicamentos, pero PillBuddy me sorprendió. La función de historial me ayuda a llevar control exacto de lo que tomo y cuándo, perfecto para mi vida ocupada.",
      rating: 4,
      imagen: "/estudiante.jpg"
    },
    {
      id: 5,
      nombre: "Ana Torres",
      cargo: "Madre de familia",
      texto: "Para mí como madre, gestionar las medicinas de toda la familia era un caos. Ahora con PillBuddy puedo tener todos los tratamientos organizados en un solo lugar, con recordatorios personalizados para cada miembro.",
      rating: 5,
      imagen: "/mujer3.jpeg"
    },
    {
      id: 6,
      nombre: "Roberto Sánchez",
      cargo: "Farmacéutico asociado",
      texto: "Desde el punto de vista profesional, PillBuddy ha mejorado nuestra relación con los pacientes. Podemos actualizar nuestro inventario y los clientes nos encuentran fácilmente cuando necesitan sus medicamentos.",
      fecha: "18 Julio, 2023",
      rating: 4,
      imagen: "/farmaceutico.jpeg"
    }
  ];


  // Auto-desplazamiento
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext(true);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const goToNext = (isAuto = false) => {
    const newIndex = (currentIndex + 1) % testimonios.length;
    scrollToTestimonio(newIndex);
    if (!isAuto) setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + testimonios.length) % testimonios.length;
    scrollToTestimonio(newIndex);
    setIsAutoPlaying(false);
  };

  const scrollToTestimonio = (index) => {
    const track = carouselRef.current;
    if (!track) return;
    
    const card = track.querySelector(".opinion");
    if (!card) return;
    
    const cardWidth = card.offsetWidth + 20;
    track.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    
    setCurrentIndex(index);
  };


  return (
    <div className="testimonios-carousel">
      <h1>Testimonios de nuestros usuarios</h1>
      
      <div className="carousel-container">
        <button 
          className="carousel-button prev"
          onClick={goToPrev}
          aria-label="Testimonio anterior"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>
        
        <div className="carousel-track" ref={carouselRef}>
          {testimonios.map((testimonio) => (
            <div className="opinion" key={testimonio.id}>
              <div className="perfil-container">
                <img src={testimonio.imagen} alt={testimonio.nombre} className="foto-perfil" />
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonio.rating ? "estrella" : "estrella vacia"}>
                      {i < testimonio.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              <h2>{testimonio.nombre}</h2>
              <p className="cargo">{testimonio.cargo}</p>
              <div className="testimonio-texto">
                <p>{testimonio.texto}</p>
              </div>
              {testimonio.fecha && <p className="fecha">{testimonio.fecha}</p>}
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-button next"
          onClick={goToNext}
          aria-label="Siguiente testimonio"
        >
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {testimonios.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => scrollToTestimonio(index)}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}