# Exercices individuels ADA
## Exercice 3 : Parlez-vous le morse ? 🆘 -- Enoncé
La consigne de l'exercice est de créer un encodeur et un décodeur de morse. Le morse est un alphabet codé qui remplace les caractères par des impulsions représentées par des points (.) ou des tirets (-), produites par des signes, une lumière, un son ou un geste. Ce codage de caractères assigne à chaque lettre, chiffre et signe de ponctuation une combinaison unique de signaux intermittents. Le code morse est considéré comme le précurseur des communications numériques.

Contraintes:
Langage JS

## L'exercice doit être effectué en 5 étapes :
1. Ecrire une fonction getLatinCharacterList. Cette fonction doit prendre en paramètre du texte et retourner un tableau (i.e une liste, un array) contenant chaque caractère.
2. Créer une fonction translateLatinCharacter qui prend en paramètre un caractère latin et renvoie sa correspondance en morse grace au dictionnaire fourni en annexe.
3. Créer une nouvelle fonction encode qui prend en paramètre du texte et qui utilise les deux fonctions précédentes pour transformer une phrase en caractère latin en son équivalent morse.
4. Créer les fonctions getMorseCharacterList: comme pour la fonction précédente getLatinCharacterList, cette fonction prend en paramètre des caractères en morse et retourne un tableau (i.e une liste, un array) contenant chaque caractère.
translateMorseCharacter, qui prend en paramètre un caractère morse et renvoie sa correspondance en caractère latin.
Utilisez ces deux fonctions pour créer une fonction decode, qui transforme le morse en caractères latins.
5. Créer une interface utilisateur qui s'affichera dans votre navigateur.
