# 🏢 Workspace Staff Manager

## 🎯 Objectifs du projet

Ce projet a pour but de créer une interface graphique intuitive permettant :

- L’ajout, le déplacement et la suppression d’employés directement sur une représentation visuelle des locaux.
- Le respect des règles métier : chaque rôle est limité à certaines zones (ex. : seuls les réceptionnistes peuvent occuper la réception).
- Une expérience utilisateur fluide, responsive et accessible sur ordinateur, tablette et mobile.
- La centralisation de la gestion du personnel et de leur positionnement spatial sur une seule plateforme.

## 👤 Fonctionnalités principales

- Interface moderne en Flexbox/Grid avec design responsive.
- Liste latérale des employés non assignés (“Unassigned Staff”) avec bouton “Add New Worker”.
- Modale d’ajout d’employé avec les champs : Nom, Rôle, Photo (URL), Email, Téléphone, Expériences professionnelles dynamiques.
- Prévisualisation de la photo dans la modale.
- Validation des champs avec REGEX et vérification des dates (début < fin).
- Affichage du plan d’étage avec 6 zones :
  - Salle de conférence
  - Réception
  - Salle des serveurs
  - Salle de sécurité
  - Salle du personnel
  - Salle d’archives
- Restrictions par rôle :
  - Réception → Réceptionnistes uniquement
  - Salle des serveurs → Techniciens IT uniquement
  - Salle de sécurité → Agents de sécurité uniquement
  - Manager → accès total
  - Nettoyage → accès sauf Salle d’archives
  - Autres rôles → accès libre sauf zones restreintes
- Bouton “X” pour retirer un employé d’une zone.
- Profil détaillé affiché au clic : photo, nom, rôle, email, téléphone, expériences, localisation.
- Bouton “+” dans chaque zone pour ajouter un employé éligible.
- Zones obligatoires vides affichées en rouge pâle.
- Limitation du nombre d’employés par zone.
- Interface responsive avec animations CSS fluides.
- Validation du code HTML/CSS via W3C Validator.
- Déploiement sur GitHub Pages ou Vercel.

## 📱 Tailles d’écrans gérées

**Portrait :**

- Grand écran : >1280px  
- Petit écran : 1024px–1279px  
- Tablette : 768px–1023px  
- Mobile : ≤767px  

**Paysage :**

- Mobile : 768px–1023px  
- Tablette : 1024px–1279px  

## 🧩 Bonus (fonctionnalités avancées)

- Glisser-déposer des employés entre zones et vers “Unassigned”.
- Bouton “Edit” pour modifier les infos d’un employé.
- Recherche et filtrage par nom ou rôle.
- Sauvegarde automatique du plan via localStorage.
- Mode “Réorganisation automatique” selon les règles.
- Photo par défaut pour les employés sans image.

## 📅 Modalités pédagogiques

- **Durée** : 5 jours en autonomie  
- **Date de lancement** : 14/11/2025  
- **Date limite** : 21/11/2025  
- **Outils de gestion** : Trello, Jira ou GitHub Projects  
- **Présentation finale** : démonstration des fonctionnalités dynamiques
