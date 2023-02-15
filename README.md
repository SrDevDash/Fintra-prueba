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

 En Angular, existen dos formas de trabajar con formularios:

Formularios de plantilla: se definen en la plantilla HTML y utilizan el databinding para interactuar con los datos del formulario.

Formularios reactivos: se definen en el componente utilizando un modelo de datos y se actualizan utilizando programación.

5. ¿Cuál es el propósito de una tubería asíncrona?
6. ¿Qué es ngOnInit? ¿Cómo se define?
7. ¿Cuál es el propósito de FormBuilder?
  
8. Enumere cuales son los pasos para actualizar de la versión 13 a la actual
