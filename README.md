# hyerim-hong
## 4차 세미나 level 1

### [USER]
| id | name | email | pw | salt |
|---|---|---|---|---|  

#### PK : id


### [POST]
|id|author|title|contents|createdAT|updatedAT|
|---|---|---|---|---|---|

#### PK : id
#### FK : id From USER



### [LIKE]
|id|user_id|post_id|
|---|---|---|

#### PK : id
#### FK : user_id From USER, post_id From POST
