---
sidebar_position: 1
---

# Departamentos

Los endpoints de **Departments** permiten consultar información de los departamentos de Colombia.

La API proporciona diferentes formas de acceder a la información: listado general, consulta individual, búsqueda y resultados paginados.

## Lista de departamentos

Obtiene todos los departamentos disponibles.

### Endpoint

```http
GET /departments
```

### URL completa

```text
https://colombiageoapi.onrender.com/api/v1/departments
```

### Request

Este endpoint no requiere parámetros.

### Ejemplo

```httph
GET /departments
 ```

### Response

```json
{
  "data": [
    {
      "id": "54a01b92-6944-4b6a-8461-27e649b8a4dd",
      "daneCode": "91",
      "name": "Amazonas"
    },
    {
      "id": "2a7b4918-065b-418a-842e-024cef8b2ccc",
      "daneCode": "05",
      "name": "Antioquia"
    },
    ...
  ],
  "message": "Departments retrieved successfully",
  "statusCode": 200
}
```

Los endpoints públicos de consulta no requieren autenticación.

---

## Obtener departamento

Obtiene información detallada de un departamento utilizando su identificador.

### Endpoint

```http
GET /departments/{id}
```

### Parameters

|Parámetro|Tipo|Requerido|Descripción|
|---|---|---|---|
|`id`|UUID|Sí|Identificador único del departamento|

### Ejemplo

```http
GET /departments/7b672475-1afc-4617-b118-c2b8efd61709
```

### Response

```json
{
  "data": {
    "id": "7b672475-1afc-4617-b118-c2b8efd61709",
    "daneCode": "08",
    "name": "Atlántico",
    "municipalities": 23,
    "areaKm2": 3386,
    "population": 2865034,
    "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/departments/08.svg",
    "capital": {
      "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
      "name": "Barranquilla",
      "daneCode": "08001"
    },
    "districts": [
      {
        "districtName": "Distrito Especial, Industrial y Portuario",
        "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
        "name": "Barranquilla",
        "daneCode": "08001"
      }
    ]
  },
  "message": "Department retrieved successfully",
  "statusCode": 200
}
```
---

## Paged departments

Obtiene departamentos utilizando paginación y ordenamiento.

### Endpoint

```http
GET /departments/paged
```

### Query parameters

| Parámetro       | Tipo    | Requerido | Descripción                             |
| --------------- | ------- | --------- | --------------------------------------- |
| `page`          | integer | No        | Número de página                        | 
| `pageSize`      | integer | No        | Cantidad de elementos por página        |
| `sortBy`        | string  | No        | Campo utilizado para ordenar            |
| `sortDirection` | string  | No        | Dirección del ordenamiento `asc / desc` |


### Ejemplo

```text
GET /departments/paged?page=1&pageSize=10&sortBy=name&sortDirection=asc
```

### Response

```json
{
  "data": {
    "items": [
       {
        "id": "7b672475-1afc-4617-b118-c2b8efd61709",
        "daneCode": "08",
        "name": "Atlántico",
        "municipalities": 23,
        "areaKm2": 3386,
        "population": 2865034,
        "flagUrl": "https://raw.githubusercontent.com/gabrielceh/ColombiaFlags/main/departments/08.svg",
        "capital": {
          "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
          "name": "Barranquilla",
          "daneCode": "08001"
        },
        "districts": [
          {
            "districtName": "Distrito Especial, Industrial y Portuario",
            "id": "c5a23b46-4b7b-4885-a96b-6027dfd285dd",
            "name": "Barranquilla",
            "daneCode": "08001"
          }
        ]
      },
      ...
    ],
    "page": 1,
    "pageSize": 10,
    "totalCount": 32,
    "totalPages": 4
  },
  "message": "Departments retrieved successfully",
  "statusCode": 200
}
```

Puedes utilizar `sortDirection=asc` para ordenar ascendentemente o `sortDirection=desc` para ordenar descendentemente.

### sortBy

|Parámetro       |Descripción                         |
|----------------|------------------------------------|
|`name`          |Ordenar por nombre                  |
|`daneCode`      |Ordenar por código DANE             |
|`population`    |Ordenar por población               |
|`area`          |Ordenar por área                    |
|`municipalities`|Ordenar por cantidad de municipios  |

---

## HTTP status codes

|Status|Description                    |
|------|-------------------------------|
|`200` |Request completed successfully |
|`400` |Invalid request                |
|`404` |Department not found           |
|`429` |Too many requests              |
|`500` |Internal server error          |