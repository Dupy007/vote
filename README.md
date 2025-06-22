# 🧠 Backend – API Spring Boot pour gestion d’élections

Ce backend fournit une API RESTful compatible OpenAPI 3.0 pour gérer les votes, utilisateurs, candidats, et résultats.

---

## 🧩 Technologies

- ☕ Java 21
- 🚀 Spring Boot
- 📚 Spring Web / JPA / Validation
- 🐘 MySql ou H2 (selon config)
- 📦 Maven

---

## ⚙️ Installation manuelle

### 1. Prérequis

- Java 21+
- Maven
- MySql ou utiliser H2 embarquée
### 2. Creer la base de donnée

```bash
    sudo mysql
    create user vote identified by 'vote';
    grant all privileges on vote.* to vote;
```


### 2.1. Cloner et lancer

```bash
    git clone https://github.com/dupy007/vote.git
    cd vote
    mvn spring-boot:run
```

## 📚 Endpoints principaux

| Méthode | URI             | Description            |
| ------- | --------------- | ---------------------- |
| GET     | `/api/users`    | Liste des utilisateurs |
| GET     | `/api/candidat` | Liste des candidats    |
| POST    | `/api/vote`     | Créer un vote unique   |
| GET     | `/api/result`   | Classement final       |


📝 Documentation OpenAPI disponible en JSON ou Swagger si activée.



## 🐳 Dockerisation

🔧 2. Configuration de la base dans application.properties
```properties
spring.datasource.url=jdbc:mysql://db:3306/vote
```

- Remplace host.docker.internal par l’IP de ta machine si ce nom ne marche pas dans ton Docker.
### 1. Build de l’image
```bash
    docker-compose up -d
```

👉 L’API est ensuite accessible sur : http://localhost

## 🧼 Nettoyage Docker

```bash
    docker-compose down -v
```
