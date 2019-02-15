# Commands

### GCP Functions Emulator
npm install -g @google-cloud/functions-emulator

### Deploy local
```
functions deploy <NAME FUNCTION> --trigger-http
```


### Debug
Realizar o deploy local antes e depois executar:
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
