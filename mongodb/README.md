## DB
    - Conectar
        mongo --username <user> --password <pass> --authenticationDatabase admin

    - Criar ou setar DB para uso
        use <nome_db>;

    - Listar dbs
        show dbs;

    - Excluir db
        use <nome_db>;
        db.dropDatabase();

## Collections
    - Criar collection
        db.createCollection("<nome_collection>")

    - Listar collections
        db.getCollectionNames()

    - Excluir collections
        db.<nome_collection>.drop()

## Documents
    - Salvar documentos
        db.<nome_collection>.save({ nome: 'Allan' })

    - Obter último documento
        db.<nome_collection>.findOne()
        db.<nome_collection>.findOne().pretty()

    - Obter todos documentos
        db.<nome_collection>.find()
        db.<nome_collection>.find().pretty()

## Operators
| Operador SQL | Operador | Nome                  | Operação           |
|--------------|----------|-----------------------|--------------------|
| =            | $eq      | Equals                | É igual a          |
| >            | $gt      | Greater Than          | É maior que        |
| >=           | $gte     | Greater Than or Equal | É maior ou igual a |
| <            | $lt      | Less Than             | É menor que        |
| <=           | $lte     | Less Than or equal    | É menor ou igual a |
| != / <>      | $ne      | Not Equal             | É diferente de     |

    - nome = 'allan'
        db.<nome_collection>.find({ nome: {$eq: "allan"} }).pretty()
    
    - idade < 30
        db.<nome_collection>.find({ idade: {$lt: 30} }).pretty()
    
    - idade <= 30
        db.<nome_collection>.find({ idade: {$lte: 30} }).pretty()

| Operador SQL | Operador | Nome                  |
|--------------|----------|-----------------------|
| AND          | $and     | And                   |
| OR           | $or      | Or                    |

    - sexo = 'f' AND idade > 30
        db.<nome_collection>.find({ sexo:{$eq: 'F'}, idade:{$gt: 30} }).pretty()
    
    - nome = 'allan' OR nome = 'bile'
        db.<nome_collection>.find(
            {
                $or:[
                    { nome: {$eq: 'allan'}},
                    { nome: {$eq: 'bile'}}
                ]
            })