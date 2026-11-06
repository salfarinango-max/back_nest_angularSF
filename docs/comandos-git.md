# Comandos GitHub

# Inicializar el repositorio local
```
git init
```
Referencia del repositorio local con el repositorio remoto (GITHUB)
````
git remote add origin https://github.com/salfarinango-max/back_nest_angularSF.git
````
# Validar referencia
````
git remote -v
````
-----------------------------
```
git add .
git commit -m "proyecto base"
git put origin master
```
```
- Para forzar

git push -f origin master

```
# Instalacion 
```
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save @nestjs/jwt passport-jwt 
```
# Arrancamos proyecto
```
npm run start:dev
```
# Modules & Resource
```
nest g mo modules/auth
nest g res modules/users
```
# Controllers & Services
```
nest g co modules/auth
nest g s modules/auth
```
