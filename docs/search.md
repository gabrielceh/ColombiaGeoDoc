---
sidebar_position: 3
---

# Búsqueda

Colombia Geo API permite buscar ciudades utilizando su nombre o código DANE.

La búsqueda se realiza mediante el parámetro `value`.

## Buscar ciudades

### Endpoint

GET /cities/search

### Parámetro

|Parámetro|Tipo  |Requerido|Descripción                  |
|---------|------|---------|-----------------------------|
|`value`  |string|Sí       |Nombre o código DANE a buscar|

### Por nombre

```http
GET /cities/search?value=Barranquilla
```

### Por código DANE

```
GET /cities/search?value=08001
```

## Notas

- La búsqueda acepta nombres o códigos DANE.
- El parámetro `value` es obligatorio.
- Los resultados se devuelven en formato JSON.
- Estos endpoints son públicos y no requieren autenticación.