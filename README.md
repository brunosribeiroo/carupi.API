# carupi.API
## API de carros - CRUD NodeJS e MongoDB


## **EstruturaDB** 
Características
```
{
    marca,
    modelo,
    versao,
    ano,
    quilometragem,
    cambio,
    preco 
}
```


## **Instalação** 
```
./carupi.API npm install
```

```
./carupi.API node init.js
 ```


## **START** 
```
./carupi.API npm start
 ```



## **CREATE** 

Cadastra um novo carro
```
 POST http://localhost:8080/cars
 body = {
            marca:'Ferrari',
            modelo:'F8',
            versao:'TRIBUTO 3.9 V8',
            ano:'2020',
            quilometragem:'0KM',
            cambio:'automatico',
            preco:'200.000'   
        }
 ```

## **READ**

Busca todos os carros
 ```
 GET http://localhost:8080/cars
 ```

Busca os carros por característica 
  ```
 GET http://localhost:8080/cars?condicao=versao:TSI
 ```

Busca os carros por range de ano
  ```
 GET http://localhost:8080/cars/year?inicio=2010&fim=2020
 ```

Busca os carros por range de preço
  ```
 GET http://localhost:8080/cars/price?inicio=13000&fim=75000
 ```


## **UPDATE**
 Atualiza os dados de um carro por uma característica
  ```
 POST http://localhost:8080/cars/update
 body = {
            condicao:'marca:GM',
            newValue:'modelo:cruze'
        }
 ```

  Atualiza os dados de todos os carros por uma característica
  ```
 POST http://localhost:8080/cars/update/all
 body = {
            condicao:'cambio:automatico',
            newValue:'cambio:manual'
        }
 ```

## **DELETE**
 Delete um carro por uma característica
  ```
 POST http://localhost:8080/cars/delete
 body = {
            condicao:'versao:TSI'
        }
 ```

 Delete todos os carros por uma característica 
 ```
 POST http://localhost:8080/cars/delete/many
 body = {
            cambio:'manual'
       }
 ```  
