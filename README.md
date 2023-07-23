# POC Vote app

This is an experiment to test different voting modes. 
The aim is to find out to what extent the voting method can influence the final result and thus propose various methods adapted to the need. 



# Lancement de l'application

npm install pour télécharger toutes les dépendances

npm start pour lancer l'application

## Pour la partie server

npm run dev pour démarrer le server

Attention, la base de données est sur Docker il faut la lancer avt de démarrer le server

## Travail à réaliser: 

# Passage de la base de donnée sur MySQL pour pouvoir plus facilement lire les changements des tables et les modifiers 
• L'objectif est de tout repasser sur mysql 
• Il faut ensuite avoir un script de lecture de la table de saisi des données. 

• Voir si la BDD ne peut pas etre optimiser 
• Faire toute la partie Back pour interpreter les résultats 
• Ecrire tous les algos pour compter (Quelles sont les différentes manières de compter ?)

• Une fois l'ensemble des tables écrites il faut bien penser à les relier entre elles ie passer des strings en image_id pour faire le lien entre les images et les choix

• Finir la table résultat

• automatiser la mise à jour de la table résultat à chaque entrée dans la BDD

• Faire une page profile avec les informations (possible de mettre les choix deja réalisés et de proposer de modifier)

• Ajout de 2 méthodes de votes: 
    - approbation ie sélection des candidats acceptables. 
    - attribution d'une note de 1 à 5.

## Les points à améliorer: 

• Le drag and drop de la list est horrible 
• L'affichage du poids et des boutons est moche. 
• La navbar est moche