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

### cURL
```
curl -X POST \
  http://localhost:8010/utilidades/us-central1/expenses \
  -H 'Content-Type: text/plain' \
  -d 'date,category,title,amount
2019-01-02,Restaurante,XPTO,110
2019-01-02,Restaurante,XPTO,25
2019-01-02,Restaurante,XPTO,15.3
2019-01-02,Vestuário,ABC,63
2019-01-02,Supermercado,WYZ,5.9'
```
