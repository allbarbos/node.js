# Commands

### Debug
```
functions inspect <NAME FUNCTION>
```
Adicionar no launch.json
```
{
    "name": "Attach to Process",
    "type": "node",
    "request": "attach",
    "port": 9229
}
```
Clicar no Play para attachar ao processo da function e em seguida é só debugar.

Para retirar a function do modo debug executar:
```
functions reset <NAME FUNCTION>
```

### Deploy local
```
functions deploy <NAME FUNCTION> --trigger-http
```
