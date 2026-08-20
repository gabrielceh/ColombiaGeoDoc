---
sidebar_position: 5
---

# Respuestas

Colombia Geo API utiliza una estructura de respuesta consistente para facilitar el consumo de sus endpoints.

Todas las respuestas utilizan formato **JSON**.

## Estructura general

Una respuesta exitosa sigue esta estructura:

```json
{
  "data": {},
  "message": "Request completed successfully",
  "statusCode": 200
}
```

### Propiedades

|Propiedad   |Tipo          |Descripción                         |  
|------------|--------------|------------------------------------|
|`data`      |object / array|Información devuelta por el endpoint|
|`message`   |string        |Mensaje descriptivo de la operación |
|`statusCode`|integer       |Código de estado HTTP               |  

## Respuestas con objetos

Cuando un endpoint devuelve un único recurso, `data` contiene un objeto.

```json
{
  "data": {
    "id": "7b672475-1afc-4617-b118-c2b8efd61709",
    "daneCode": "08",
    "name": "Atlántico"
  },
  "message": "Department retrieved successfully",
  "statusCode": 200
}
```

## Respuestas con listas

Cuando un endpoint devuelve múltiples recursos, `data` contiene un arreglo.

```json
{
  "data": [
    {
      "id": "uuid",
      "daneCode": "05",
      "name": "Antioquia"
    },
    {
      "id": "uuid",
      "daneCode": "08",
      "name": "Atlántico"
    }
  ],
  "message": "Departments retrieved successfully",
  "statusCode": 200
}
```

## Respuestas paginadas

Los endpoints que utilizan paginación contienen información adicional dentro de `data`.

```json
{
  "data": {
    "items": [],
    "page": 1,
    "pageSize": 20,
    "totalCount": 32,
    "totalPages": 2
  },
  "message": "Departments retrieved successfully",
  "statusCode": 200
}
```

### Propiedades de paginación

|Propiedad   |Descripción                                  |  
|------------|---------------------------------------------|
|`items`     |Elementos correspondientes a la página actual|
|`page`      |Página actual                                |
|`pageSize`  |Cantidad solicitada por página               |
|`totalCount`|Cantidad total de elementos                  |  
|`totalPages`|Cantidad total de páginas                    |

Para más información, consulta Paginación y ordenamiento.

## Respuestas de error

Cuando ocurre un error, la API mantiene la misma estructura general de respuesta.

```json
{
  "data": null,
  "message": "Department not found",
  "statusCode": 404
}
```

Esto permite manejar respuestas exitosas y errores utilizando una estructura predecible.

## Códigos HTTP

La API utiliza códigos HTTP estándar para indicar el resultado de cada solicitud.

|Código|Significado                      |
|------|---------------------------------|
|`200` |Solicitud procesada correctamente|
|`400` |Solicitud inválida               |  
|`401` |No autenticado                   |
|`403` |No autorizado                    |
|`404` |Recurso no encontrado            |
|`409` |Conflicto                        |
|`429` |Límite de solicitudes excedido   |
|`500` |Error interno del servidor       |

Los códigos disponibles pueden variar dependiendo del endpoint y de la operación realizada.

## Manejo recomendado

Al consumir la API, se recomienda verificar tanto el código HTTP como el contenido de la respuesta.

Por ejemplo:

```js
const response = await fetch(
  'https://colombiageoapi.onrender.com/api/v1/departments'
);
const result = await response.json();

if (!response.ok) {
  console.error(result.message);
  return;
}
console.log(result.data);
```

De esta manera puedes utilizar:

- `response.status` para conocer el código HTTP.
- `result.data` para acceder a los datos.
- `result.message` para obtener información descriptiva de la operación.
- `result.statusCode` como representación del código de estado dentro de la respuesta.