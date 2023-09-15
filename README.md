# Elysia swagger malformed response schema

Posts schema:

```json
{
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string"
            }
        },
        "required": ["title"]
    }
}
```

Generated Posts response schema:

```json
{
    "responses": {
        "200": {
            "items": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    }
                },
                "required": ["title"]
            },
            "content": {
                "application/json": {
                    "schema": {
                        "type": "array"
                    }
                }
            }
        }
    }
}
```

The expected schema is:

```json
{
    "responses": {
        "200": {
            "content": {
                "application/json": {
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "title": {
                                    "type": "string"
                                }
                            },
                            "required": ["title"]
                        }
                    }
                }
            }
        }
    }
}
```
