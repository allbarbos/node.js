# Commands

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

### Deploy local
```
functions deploy expenses --trigger-http
```
