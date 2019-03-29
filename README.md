
# levelbot-prueba-tecnica
Creación de una API para la consulta de información estructurada.


### Prerequisitos


* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com)
* **npm** 

### Instalar paquetes

```
npm i
```

### Lanzar la aplicación en desarrollo

```
ng build --watch
nodemon serve
```

### Despliegue en Heroku

```
sudo git push heroku master
```

### Poblar la base de datos en local y en Heroku.

```
mongoimport --db mydb --collection empresas --file datos_empresas.json --jsonArray

mongoimport -h direccionBD:puertoBD -d nombreHerokuBD -c 'empresas' -u 'user' -p 'password'  --file ./datos_empresas.json --jsonArray   

```

## Acceso a la documentación:
```
http://host:port/api-docs/
https://agile-headland-68634.herokuapp.com/api-docs/
```

## Colleción de Postman para realizar pruebas
```
Se encuentra en la carpeta Postman y se ha exportado para la versión 2.1, las peticiones ya incluyen un Token válido.

```


## Authentification with passport.js Documentation

* **Antonio Erdeljac** - *Initial work* - [Passport-Tutorial](https://github.com/AntonioErdeljac/Blog-Tutorial)

## Heroku Documentation

* **Heroku team** - *Create a Web App and RESTful API Server Using the MEAN Stack* - [Heroku MEAN stack tutorial](https://devcenter.heroku.com/articles/mean-apps-restful-api#implement-the-api-endpoints)




## Posibles mejoras:
- Añadir tranducciones
- Sistema de Login
- Rellenar la documentación de la API, e integrar la seguridad en esta.
- Meter todos los componenetes de angular dentro de la carpeta componentes.
- Crear tests y añadirlos a la integración continua.
- Correcta configuración del entorno de producción y desarrollo.
- Ordenación y filtros
- Gráficos y estádisticas

