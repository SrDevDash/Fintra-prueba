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
4. ¿Qué son los formularios de plantilla y reactivos?
5. ¿Cuál es el propósito de una tubería asíncrona?
6. ¿Qué es ngOnInit? ¿Cómo se define?
7. ¿Cuál es el propósito de FormBuilder?
  
8. Enumere cuales son los pasos para actualizar de la versión 13 a la actual
