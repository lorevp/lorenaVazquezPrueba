### lorenaVazquezPrueba

Para facilitar la prueba de este repositorio no se incluyeron en el gitignore los archivos .env que deberían ser omitidos del repositorio.

Decidí hacer la prueba en react para el front y node para el back, ya que me siento bastante cómoda trabajando con ellos teniendo en cuenta que es con lo que hice mi proyecto de fin de ciclo.

En un primer momento cuando leí lo que se pedía tuve dudas de cómo hacer que se enviasen los datos incluso después de cerrar la pestaña, entonces opté por solucionarlo enviando las localizaciones a un backend node y que éste se encargue de seguir enviando después de recibirlas.

Para mantener la consistencia en el intervalo de un segundo se necesitaría una cola para evitar que se amontonen los timeouts (solución que sé que no es adecuada para producción).

En el front creé un formulario usando material-ui y para acotar las coordenadas puse un slider poniendo un máximo y un mínimo usando como referencia los ejemplos que dais en el enunciado de la prueba que cuadrarían dentro del edificio.

Para la petición llamé al endpoint de realtime usando las cabeceras que aparecen en la documentación en la sección de autenticación.

Aproximadamente, entre implementación y pensar la solución, habré tardado cerca de 6 horas o un poco más.