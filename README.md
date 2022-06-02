# Example API

> It was created for educational purposes only.
---

API example to control usage license and user registration using MongoDB

## Installation

```bash
npm install
```

## Endpoints

### User

* [Post: http://localhost:3000/api/user/create](#usercreate)
* [Delete: http://localhost:3000/api/user/delete](#userdelete)
* [Put: http://localhost:3000/api/user/password](#userpassword)
* [Post: http://localhost:3000/api/user/login](#userlogin)
* [Get: http://localhost:3000/api/user/check](#usercheck)

### License

* [Get: http://localhost:3000/api/license/check](#licensecheck)
* [Delete: http://localhost:3000/api/license/delete](#licensedelete)
* [Get: http://localhost:3000/api/license/expiration](#licenseexpiration)
* [Post: http://localhost:3000/api/license/add](#licenseadd)

## Exemple Usage
### User
#### Create

##### Request

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

##### Success Case
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

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Delete

##### Request

Url
```
http://localhost:3000/api/user/delete?token=usertoken&email=useremail@email.com
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[  ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Login

##### Request

Url
```
http://localhost:3000/api/user/login
```
Body
```json
{
  "username":"username or email",
  "password":"pass"
}
```

##### Success Case
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

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Password

##### Request

Url
```
http://localhost:3000/api/user/password
```
Body
```json
{
  "token":"token",
  "newPassword":"pass"
}
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[ ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Check

##### Request

Url
```
http://localhost:3000/api/user/check?email=email@email.com&username=username
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[ ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

### License

#### Check

##### Request

Url
```
http://localhost:3000/api/license/check?token=token
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[  ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Delete

##### Request

Url
```
http://localhost:3000/api/license/delete?token=usertoken
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[  ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Expiration

##### Request

Url
```
http://localhost:3000/api/license/expiration?token=usertoken
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[
    "date":""
  ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

#### Add

##### Request

Url
```
http://localhost:3000/api/license/add
```
Body
```json
{
  "token":"token",
  "days":"days"
}
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[ ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---



##### Request

Url
```
http://localhost:3000/api/user/check?email=email@email.com&username=username
```

##### Success Case
```json
{
  "status": 1,
  "err": "",
  "data":[ ]
}
```

##### Error Case
```json
{
  "status": 0,
  "err": "error string",
  "data":[ ]
}
```

---

## Legal

MIT License

Copyright (c) 2022 Higor Dias Zuqueto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
© 2022 GitHub, Inc.
