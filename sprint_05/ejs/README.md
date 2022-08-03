Express Server - RESTful API - Coderhouse Backend:
-
Objetivos: Establecer servidor API RESTful con Express

Endpoints:
-
* "api/productos" >> GET >> Muestra todos los productos

* "api/productos" >> POST >> Recibe JSON "title, price, thumbnail" y devuelve objeto en formato JSON con ID y ruta a imagen cargada

* "api/productos/:id" >> GET >> Recibe parametro id y devuelve producto con ese id... Si no existe devuelve objeto JSON {error: 'product not found'}

* "api/productos/:id" >> PUT >> Recibe parametro id, JSON en body "title, price, thumbnail" y actualiza el elemento en el array, en caso de éxito devuelve JSON {success: 'product updated'}... Si no existe devuelve objeto JSON {error: 'product not found'}

* "api/productos/:id" >> DELETE >> Recibe parametro id, JSON en body "title, price, thumbnail" y borra el elemento del array, en caso de éxito devuelve JSON {success: 'product deleted'}... Si no existe devuelve objeto JSON {error: 'product not found'}

Librerías utilizadas:
-
> Express

> Multer

> Nodemon