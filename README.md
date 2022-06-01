# Example API

> It was created for educational purposes only.
---

API example to control usage license and user registration using MongoDB

---

## Installation

```bash
npm install
```

---

## Endpoints

---

### User

* [Post: http://localhost:3000/api/user/create](#usercreate)
* [Delete: http://localhost:3000/api/user/delete](#userdelete)
* [Put: http://localhost:3000/api/user/password](#userpassword)
* [Get: http://localhost:3000/api/user/login](#userlogin)
* [Get: http://localhost:3000/api/user/check](#usercheck)

---

### License

* [Get: http://localhost:3000/api/license/check](#licensecheck)
* [Delete: http://localhost:3000/api/license/delete](#licensedelete)
* [Get: http://localhost:3000/api/license/expiration](#licenseexpiration)
* [Post: http://localhost:3000/api/license/add](#licenseadd)

## Exemple Usage

### Create User

#### Request

Url
```
http://localhost:3000/api/user/create
```
Body
```json
{
  "username":"username",
  "password":"pass",
  "email":"email@email.com"
}
```

#### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[
    {
      "username": "",
      "email":"",
      "token":""
    }
  ]
}
```

#### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```


## Legal
