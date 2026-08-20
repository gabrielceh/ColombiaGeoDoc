---
sidebar_position: 2
---

# Ciudades

Los endpoints de **Cities** permiten consultar información de las ciudades y municipios de Colombia, incluyendo su departamento, código DANE, código postal, población, área, capitalidad y características de distrito.

---

## Obtener ciudad por ID

Obtiene información detallada de una ciudad utilizando su identificador único.

### Endpoint

```http
GET /cities/{id}
```

### Parámetros

|Parámetro|Tipo|Requerido|Descripción                     |
|---------|----|---------|--------------------------------|
|`id`     |UUID|Sí       |Identificador único de la ciudad|

### Ejemplo

GET /cities/7b672475-1afc-4617-b118-c2b8efd61709

### Respuesta

```json
{

  "data": {
    "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
    "departmentId": "7b672475-1afc-4617-b118-c2b8efd61709",
    "daneCode": "08001",
    "name": "Barranquilla",
    "areaKm2": 166.00,
    "population": 1279344,
    "zipCode": "080001",
    "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/cities/08/08001.svg",
    "isDepartmentCapital": true,
    "isDistrict": true,
    "districtName": "Distrito Especial, Industrial y Portuario",
    "department": {
      "id": "7b672475-1afc-4617-b118-c2b8efd61709",
      "daneCode": "08",
      "name": "Atlántico"
    }
  },
  "message": "City retrieved successfully",
  "statusCode": 200

}
```

---

## Obtener ciudades por departamento ID

Obtiene todas las ciudades pertenecientes a un departamento específico.

### Endpoint

```http
GET /cities/department/{departmentId}
```

### Parámetros

|Parámetro     |Tipo |Requerido |Descripción                    |
|--------------|-----|----------|-------------------------------|
|`departmentId`|UUID |Sí        |Identificador del departamento |

### Ejemplo

```http
GET /cities/department/7b672475-1afc-4617-b118-c2b8efd61709
```

### Respuesta

```json
{
  "data": [
    {
      "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
      "daneCode": "08001",
      "name": "Barranquilla",
    },
    ...
  ],
  "message": "Cities retrieved successfully",
  "statusCode": 200

}
```

---

## Obtener ciudades por departamento ID paginadas

Permite obtener las ciudades de un departamento utilizando paginación y ordenamiento.

### Endpoint

```http
GET /cities/paged/department/{departmentId}
```

### Parámetros

|Parámetro      |Tipo   |Requerido|Descripción                      | 
|---------------|-------|---------|---------------------------------|
|`departmentId` |UUID   |Sí       |Identificador del departamento   |
|`page`         |integer|No       |Número de página                 |
|`pageSize`     |integer|No       |Cantidad de resultados por página|
|`sortBy`       |string |No       |Campo utilizado para ordenar     |
|`sortDirection`|string |No       |Dirección del ordenamiento       |

### Ejemplo

GET /cities/paged/department/7b672475-1afc-4617-b118-c2b8efd61709?page=1&pageSize=10&sortBy=name&sortDirection=asc

### Respuesta

```json
{
  "data": {
    "items": [
      {
        "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
        "departmentId": "7b672475-1afc-4617-b118-c2b8efd61709",
        "daneCode": "08001",
        "name": "Barranquilla",
        "areaKm2": 166.00,
        "population": 1279344,
        "zipCode": "080001",
        "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/cities/08/08001.svg",
        "isDepartmentCapital": true,
        "isDistrict": true,
        "districtName": "Distrito Especial, Industrial y Portuario",
        "department": {
          "id": "7b672475-1afc-4617-b118-c2b8efd61709",
          "daneCode": "08",
          "name": "Atlántico"
        }
      },
      ...
    ],
    "page": 1,
    "pageSize": 10,
    "totalCount": 23,
    "totalPages": 3
  },
  "message": "Cities retrieved successfully",
  "statusCode": 200
}
```

---

## Obtener todas las ciudades paginadas

Obtiene todas las ciudades disponibles utilizando paginación.

### Endpoint

```http
GET /cities/paged
```

### Parámetros

|Parámetro      |Tipo    |Requerido |Descripción                             |
|---------------|--------|----------|----------------------------------------|
|`page`         |integer |No        |Número de página                        |
|`pageSize`     |integer |No        |Cantidad de resultados por página       |
|`sortBy`       |string  |No        |Campo utilizado para ordenar            |
|`sortDirection`|string  |No        |Dirección del ordenamiento `asc / desc` |

### Ejemplo

GET /cities/paged?page=1&pageSize=20&sortBy=name&sortDirection=asc

### Respuesta

```json
{
  "data": {
    "items": [
      {
        "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
        "departmentId": "7b672475-1afc-4617-b118-c2b8efd61709",
        "daneCode": "08001",
        "name": "Barranquilla",
        "areaKm2": 166.00,
        "population": 1279344,
        "zipCode": "080001",
        "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/cities/08/08001.svg",
        "isDepartmentCapital": true,
        "isDistrict": true,
        "districtName": "Distrito Especial, Industrial y Portuario",
        "department": {
          "id": "7b672475-1afc-4617-b118-c2b8efd61709",
          "daneCode": "08",
          "name": "Atlántico"
        }
      },
      ...
    ],
    "page": 1,
    "pageSize": 20,
    "totalCount": 1100,
    "totalPages": 55
  },
  "message": "Cities retrieved successfully",
  "statusCode": 200
}
```

---

## Obtener todos los distritos

Obtiene las ciudades que tienen la condición de distrito.

### Endpoint

```http
GET /cities/districts
```

### Ejemplo

```http
GET /cities/districts?page=1&pageSize=10&sortBy=population&sortDirection=asc
```

### Respuesta

```json
{
  "data": {
    "page": 1,
    "pageSize": 10,
    "totalItems": 4,
    "totalPages": 1,
    "items": [
      {
        "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
        "departmentId": "7b672475-1afc-4617-b118-c2b8efd61709",
        "daneCode": "08001",
        "name": "Barranquilla",
        "areaKm2": 166.00,
        "population": 1279344,
        "zipCode": "080001",
        "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/cities/08/08001.svg",
        "isDepartmentCapital": true,
        "isDistrict": true,
        "districtName": "Distrito Especial, Industrial y Portuario",
        "department": {
          "id": "7b672475-1afc-4617-b118-c2b8efd61709",
          "daneCode": "08",
          "name": "Atlántico"
        }
      },
      ...
    ]
  },
  "message": "Districts retrieved successfully",
  "statusCode": 200
}
```
---

## Obtener todas las ciudades capitales

Obtiene todas las ciudades que están marcadas como capitales de departamento.

### Endpoint

```http
GET /cities/capitals
```

### Ejemplo

```http
GET /cities/capitals?page=1&pageSize=10&sortBy=population&sortDirection=asc
```

### Respuesta

```json
{
  "data": {
    "page": 1,
    "pageSize": 10,
    "totalItems": 4,
    "totalPages": 1,
    "items": [
      {
        "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
        "departmentId": "7b672475-1afc-4617-b118-c2b8efd61709",
        "daneCode": "08001",
        "name": "Barranquilla",
        "areaKm2": 166.00,
        "population": 1279344,
        "zipCode": "080001",
        "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/cities/08/08001.svg",
        "isDepartmentCapital": true,
        "isDistrict": true,
        "districtName": "Distrito Especial, Industrial y Portuario",
        "department": {
          "id": "7b672475-1afc-4617-b118-c2b8efd61709",
          "daneCode": "08",
          "name": "Atlántico"
        }
      },
      ...
    ]
  },
  "message": "Capitals Cities retrieved successfully",
  "statusCode": 200
}
```

---

## Buscar ciudades

Permite buscar ciudades utilizando su nombre o código DANE.

### Endpoint

GET /cities/search?value=001&pageSize=20&page=1&sortBy=population&sortDirection=desc

### Query parameters

|Parámetro|Tipo  |Requerido|Descripción                      |
|---------|------|---------|---------------------------------|
|`value`  |string|Sí       |Nombre o código DANE de la ciudad|

### Ejemplo

Buscar por nombre:

```http
GET /cities/search?value=Barranquilla&pageSize=20&page=1&sortBy=population&sortDirection=desc
```

Buscar por código DANE:

```http
GET /cities/search?value=001&pageSize=20&page=1&sortBy=population&sortDirection=desc
```

### Respuesta
```json
{
  "data": [
    {
      "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
      "departmentId": "7b672475-1afc-4617-b118-c2b8efd61709",
      "daneCode": "08001",
      "name": "Barranquilla",
      "areaKm2": 166.00,
      "population": 1279344,
      "zipCode": "080001",
      "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/cities/08/08001.svg",
      "isDepartmentCapital": true,
      "isDistrict": true,
      "districtName": "Distrito Especial, Industrial y Portuario",
      "department": {
        "id": "7b672475-1afc-4617-b118-c2b8efd61709",
        "daneCode": "08",
        "name": "Atlántico"
      }
    },
    ...
  ],
  "message": "Cities found successfully",
  "statusCode": 200
}
```
---

## Parámetros de ordenamiento

Los endpoints paginados permiten ordenar los resultados mediante `sortBy` y `sortDirection`.

### `sortDirection`

|Valor |Descripción      |
|------|-----------------|
|`asc` |Orden ascendente |
|`desc`|Orden descendente|

### `sortBy`

Los campos disponibles dependen de los criterios implementados por el endpoint.

|Parámetro       |Descripción                         |
|----------------|------------------------------------|
|`name`          |Ordenar por nombre                  |
|`daneCode`      |Ordenar por código DANE             |
|`population`    |Ordenar por población               |
|`area`          |Ordenar por área                    |

Ejemplo:

```http
GET /cities/paged?page=1&pageSize=10&sortBy=population&sortDirection=desc
```

---

## Códigos de estado HTTP

|Código|Descripción                        |
|------|-----------------------------------|
|`200` |Solicitud procesada correctamente  |
|`400` |Solicitud inválida                 |
|`404` |Ciudad o departamento no encontrado|
|`429` |Límite de solicitudes excedido     |
|`500` |Error interno del servidor         |