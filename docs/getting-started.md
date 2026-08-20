---
sidebar_position: 2
---

# Getting Started

Realizar una solicitud a Colombia Geo API es sencillo. Todos los endpoints públicos utilizan HTTP y devuelven información en formato JSON.

## Base URL

```text
https://colombiageoapi.onrender.com/api/v1
```

## Tu primera petición

Para comenzar, puedes consultar todos los departamentos disponibles:

```text
GET /departments
```

La URL completa sería:

```text
https://colombiageoapi.onrender.com/api/v1/departments
```

- cURL

```bash
curl https://colombiageoapi.onrender.com/api/v1/departments
```

- JavaScript

```js
const response = await fetch(
  'https://colombiageoapi.onrender.com/api/v1/departments'
);

const data = await response.json();

console.log(data);
```

- C#

```csharp
using HttpClient client = new();

var response = await client.GetAsync(
    "https://colombiageoapi.onrender.com/api/v1/departments"
);

var data = await response.Content.ReadAsStringAsync();

Console.WriteLine(data);
```

- Python

```python
import requests

response = requests.get(
    "https://colombiageoapi.onrender.com/api/v1/departments"
)

data = response.json()

print(data)
```

## Respuesta

Una solicitud exitosa devuelve una respuesta JSON con la siguiente estructura:

```json
{
  "data": [],
  "message": "Departments retrieved successfully.",
  "statusCode": 200
}
```