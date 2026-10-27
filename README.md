# Grand Séminaire Notre Dame de l'Espérance de Bertoua

## Site Web Officiel

Bienvenue sur le site web du Grand Séminaire Notre Dame de l'Espérance de Bertoua, Institut de Théologie Saint Augustin de Bertoua (ITSAB).

### Caractéristiques

- **Design Responsif** : Compatible avec tous les appareils (desktop, tablette, mobile)
- **Thème Couleur** : Bleu ciel (#87CEEB) avec accents orange (#FFA500)
- **Navigation Intuitive** : Menus déroulants pour les sections Cours et Nous Soutenir
- **Formulaire de Contact** : Intégration WhatsApp pour les messages
- **Réseaux Sociaux** : Liens vers Facebook, Twitter, Instagram, YouTube, Pinterest et WhatsApp
- **Historique Détaillé** : Section complète sur l'histoire du séminaire depuis 1994/1995

### Structure du Projet

```
grand_seminaire_bertoua/
├── index.html          # Page principale
├── styles.css          # Feuille de styles
├── script.js           # Fichier JavaScript
├── README.md           # Ce fichier
├── assets/
│   └── img/
│       ├── logo1.jpg   # Logo Notre Dame de l'Espérance
│       ├── logo2.jpg   # Logo ITSAB
│       └── chapel.jpg  # Image de la chapelle (arrière-plan)
└── historique.txt      # Contenu historique complet
```

### Installation et Utilisation

1. **Extraire les fichiers** : Décompressez le fichier ZIP dans un dossier
2. **Ouvrir le site** : Double-cliquez sur `index.html` ou ouvrez-le dans votre navigateur
3. **Pas de serveur requis** : Le site fonctionne entièrement en local

### Sections du Site

#### 1. **Accueil**
- Présentation du Grand Séminaire
- Images des logos officiels
- Localisation (Quartier Dabadie, Bertoua)
- Boutons d'appel à l'action

#### 2. **Historique**
- Contexte de création (1994/1995)
- Bref aperçu historique
- Liste des recteurs depuis 1996
- Formation académique (Propédeutique, Philosophie, Théologie)
- Création de l'Institut de Théologie Saint Augustin (ITSAB) en 2025

#### 3. **Cours** (Menu déroulant)
- **Théologie** : Formation théologique de 4 ans
- **Philosophie** : Formation philosophique de 3 ans

#### 4. **Événements**
- Rentrée Académique 2026
- Fête de Notre Dame de l'Espérance
- Conférence Théologique

#### 5. **Nous Soutenir** (Menu déroulant)
- **Fondation Grand Séminaire** : Soutien financier
- **Œuvre des Vocations** : Accompagnement des vocations

#### 6. **Contact**
- Adresse : Quartier Dabadie, Bertoua
- Téléphones : +237 694 476 707 / +237 222 243 233
- Formulaire de contact (intégration WhatsApp)
- Horaires d'ouverture

#### 7. **Footer**
- Liens rapides
- Réseaux sociaux (Facebook, Twitter, Instagram, YouTube, Pinterest, WhatsApp)
- Informations de copyright

### Fonctionnalités JavaScript

1. **Menu Mobile** : Hamburger menu pour les appareils mobiles
2. **Menus Déroulants** : Fonctionnels sur desktop et mobile
3. **Historique Extensible** : Bouton "Lire plus/moins" pour l'historique complet
4. **Formulaire de Contact** : Envoi de messages via WhatsApp
5. **Animations au Défilement** : Apparition progressive des éléments
6. **Lien Actif** : Mise en évidence du lien actif dans la navigation
7. **Défilement Fluide** : Scroll smooth vers les sections

### Personnalisation

#### Modifier les Couleurs
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #87CEEB;      /* Bleu ciel */
    --secondary-color: #FFA500;    /* Orange */
    /* ... autres variables ... */
}
```

#### Modifier les Numéros de Contact
Dans `script.js`, modifiez les numéros dans les fonctions :
- `handleDonation()` : Pour les dons
- `contactForm` event listener : Pour les messages

#### Ajouter des Événements
Modifiez la section `Événements` dans `index.html` en ajoutant des cartes `event-card`.

#### Modifier les Réseaux Sociaux
Éditez les liens dans le footer (section `Nous Retrouver`) avec vos URLs réelles.

### Conseils de Maintenance

1. **Sauvegarder régulièrement** : Gardez des copies de sauvegarde
2. **Tester sur mobiles** : Vérifiez la responsivité sur différents appareils
3. **Mettre à jour les événements** : Actualisez la section Événements régulièrement
4. **Vérifier les liens** : Assurez-vous que les liens des réseaux sociaux sont actifs

### Hébergement

Pour mettre le site en ligne :
1. Utilisez un service d'hébergement web (Netlify, Vercel, GitHub Pages, etc.)
2. Téléchargez tous les fichiers du dossier
3. Configurez le domaine personnalisé si souhaité

### Support et Contact

Pour des questions ou des modifications :
- Téléphone : +237 694 476 707 / +237 222 243 233
- Localisation : Quartier Dabadie, Bertoua, Cameroun

### Licence

Ce site web est la propriété du Grand Séminaire Notre Dame de l'Espérance de Bertoua.

---

**Créé avec soin pour le Grand Séminaire Notre Dame de l'Espérance de Bertoua**

*Institut de Théologie Saint Augustin de Bertoua (ITSAB)*

*Liberté - Responsabilité - Charité*
