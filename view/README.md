# 🗳️ Élections en entreprise – Frontend Angular

Ce projet est une interface web Angular pour la gestion d’élections internes en entreprise.  
Il permet de gérer les utilisateurs, candidats, votes, et de consulter les résultats finaux.

---

## 📦 Fonctionnalités principales

- 🔐 Authentification simulée
- 🧑‍💼 Gestion des utilisateurs (CRUD)
- 🗳️ Vote unique par utilisateur
- 🧑‍🎓 Création de candidats à partir d’utilisateurs existants
- 📊 Dashboard synthétique (nombre de votes, utilisateurs, etc.)
- 🏆 Résultats avec classement et points

---

## ⚙️ Installation manuelle (Angular CLI)

### 1. Prérequis

- Node.js v18+
- Angular CLI `npm install -g @angular/cli`

### 2. Cloner le dépôt et installer

```bash
  git clone https://github.com/dupy007/vote.git
  cd vote/view
  npm ci
```
### 3. Lancer l'application en mode dev
```bash
ng serve
```
📍 Par défaut, l’application est disponible sur :
- 🔗 http://localhost:4200

L’API backend doit être disponible sur :
- 🔗 http://localhost:8080


---


## 🐳 Déploiement via Docker
### 1. Construire l’image Docker
```bash
  docker build -t election-frontend .
```
### 2. Lancer le conteneur

```bash
  docker run -d -p 4200:80 --name election-ui election-frontend
```
  Accès à l’application via :
- 🔗 http://localhost:4200

## 🧼 Nettoyage Docker
```bash
  docker stop election-ui
  docker rm election-ui
  docker rmi election-frontend
```
