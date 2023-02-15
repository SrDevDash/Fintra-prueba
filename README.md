# FintraPrueba

### Questions

1. ¿Cómo se comparten datos entre componentes en Angular? regale uno ejemplo de
   cada uno

Hay varias formas de comunicar datos entre componentes, se puede hacer usando los decoradores:

  `@input` para pasar datos mediante el propety binding a un child component

  `@output` haciendo un event emiter al componente padre

Tambien puedes hacerlo utilizando creando un servicio

2. ¿Qué son los decoradores en Angular?

  Los decoradores son principalmente son provinientes de typescript y Angular los utiliza para identificar que se esta utilizando, como por ejempo un `@component`, `@injectable` o los anterior mente mencionados

3. ¿Qué es la carga ansiosa y perezosa?
   
  En Angular, los decoradores son funciones que se utilizan para modificar la funcionalidad de una clase, propiedad, método o parámetro. Los decoradores se identifican con un signo `@` y se utilizan para definir metadata sobre la clase, como la plantilla asociada a ella, la inyección de dependencias, la visibilidad, entre otros.

4. ¿Qué son los formularios de plantilla y reactivos?

Formularios de plantilla: se definen en la plantilla HTML y utilizan el databinding para interactuar con los datos del formulario.

Formularios reactivos: se definen en el componente utilizando un modelo de datos y se actualizan utilizando programación.

1. ¿Cuál es el propósito de una tubería asíncrona?

  Las tuberías asíncronas se utilizan para trabajar con datos asincrónicos en Angular, como por ejemplo las peticiones HTTP. El propósito de una tubería asíncrona es transformar los datos antes de ser renderizados en la plantilla, permitiendo mostrar datos en diferentes formatos, como fechas, monedas, entre otros.

6. ¿Qué es ngOnInit? ¿Cómo se define?

  ngOnInit es un método del ciclo de vida de un componente en Angular que se ejecuta después de que se hayan inicializado todas las propiedades vinculadas y que se haya resuelto el cambio de datos iniciales en un componente. Se utiliza para realizar cualquier inicialización necesaria del componente, como suscribirse a un servicio o recuperar datos iniciales.

7. ¿Cuál es el propósito de FormBuilder?
  
  `ngOnInit` es un método del ciclo de vida de un componente en Angular que se ejecuta después de que se hayan inicializado todas las propiedades vinculadas y que se haya resuelto el cambio de datos iniciales en un componente. Se utiliza para realizar cualquier inicialización necesaria del componente, como suscribirse a un servicio o recuperar datos iniciales.

8. Enumere cuales son los pasos para actualizar de la versión 13 a la actual

  Solo es necesario ejecutar el siguiente comando en Angular CLI :  `ng update @angular`

# APP

Clonar el repositorio `git clone https://github.com/SrDevDash/Fintra-prueba.git`

Instalar los modulos con `npm i`

Levantar servidor `ng serve -o`

### Dentro de la app

Puedes navegar dentro de la aplicacion mediante el navbar


## Login

Las crenciales son: 

`{ email: test@gmail.com,
  password: 123456
}`

no es necesario loguearse para cambiar de proyecto
