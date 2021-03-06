/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
        - Todos los datos del objeto son obligatorios.
        - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
           7 restantes números.
        - Valida que el título no rebase los 100 caracteres.
        - Valida que el director no rebase los 50 caracteres.
        - Valida que el año de estreno sea un número entero de 4 dígitos.
        - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
        - Valida que los géneros introducidos esten dentro de los géneros
           aceptados*.
        - Crea un método estático que devuelva los géneros aceptados*.
        - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
          decimal de una posición.
        - Crea un método que devuelva toda la ficha técnica de la película.
        - Apartir de un arreglo con la información de 3 películas genera 3
          instancias de la clase de forma automatizada e imprime la ficha técnica
          de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`La propiedad ${propiedad} esta vacío/a`);

    if (typeof valor !== "string")
      return console.error(
        `El valor: ${valor} ingresado, no es una cadena de texto`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`La propiedad ${propiedad} esta vacío/a`);

    if (!(valor instanceof Array))
      return console.error(
        `El valor de la propiedad ${propiedad} no es un arreglo`
      );

    if (valor.length === 0)
      return console.error(
        `El arreglo de la propiedad ${propiedad} está vacio`
      );

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor: ${valor} ingresado de la propiedad ${propiedad} requiere que sea un string`
        );
    }

    return true;
  }

  validarLonguitudCadena(propiedad, valor, longuitud) {
    if (valor.length > longuitud)
      return console.error(
        `${propiedad}: ${valor} excede el número de caracteres permitidos (max:${longuitud} caracteres).`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`La propiedad ${propiedad} esta vacio/a`);

    if (typeof valor !== "number")
      return console.error(`El valor: ${valor} ingresado no es un número`);

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB id:${id} no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas y los 7 restantes números.`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLonguitudCadena("Título", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLonguitudCadena("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de estreno:${estreno} no es válido, debe tener cuatro digitos.`
        );
      }
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género/s incorrectos: ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificación tiene que estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica:\nTítulo:${this.titulo}\nDirector:${
        this.director
      }\nPaís:${this.pais.join(", ")}\nGéneros:${this.generos.join(
        ", "
      )}\nCalificación:${this.calificacion}\nIMDB id:${this.id}`
    );
  }
}

/* Pelicula.generosAceptados();
const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Título de la pelicula",
  director: "Director de la pelicula",
  estreno: 1875,
  pais: ["Spain", "Portugal"],
  generos: ["Comedy", "Sport"],
  calificacion: 7.4,
});

peli.fichaTecnica(); */

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Chirstopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
