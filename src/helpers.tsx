// Prend un tableau en argument et effectue un mélange aléatoire des éléments du tableau en utilisant l'algorithme de mélange de Fisher-Yates
// type any : peut contenir n'importe quel type d'éléments
// La boucle for commence à la fin du tableau et itère jusqu'au début
 const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {                    // i initialisé à la longueur du tableau moins un, tant que i est supérieur ou égal à zéro, la boucle continue en décrémentant i à chaque itération.
    const j = Math.floor(Math.random() * (i + 1));           // un nombre aléatoire j est généré entre 0 et i (inclus). Math.random() retourne un nombre aléatoire entre 0 (inclus) et 1 (exclus). En * par (i + 1) et en arrondissant vers le bas avec Math.floor, on obtient un nombre entier entre 0 et i.
    [a[i], a[j]] = [a[j], a[i]];                            // Echange les éléments à l'index i et j du tableau a. C'est une technique de permutation destructurante en JavaScript, en utilisant la destructuration, elle échange les éléments du tableau sans avoir besoin d'une variable temporaire.
  }
  return a;
};

export type HatchType = {     // définit un type (ou modèle) qui représente un objet avec 4 propriétés
  nbr: number;               // le jour
  img: string;              // chemin où se trouve l'image
  text: string;             
  open: boolean;           // un boulein initialisé à false qui nous permattra de dire si la trappe est ouverte ou non
}

// variable hatchArray qui est un tableau d'objets de type HatchType
// export permet d'exporter des éléments pour les rendre accessibles dans d'autres fichiers
// Chaque paire d'accolades {} représente un objet dans le tableau
export const hatchArray: HatchType[] = [
  {
    nbr: 19,
    img: './img/H19.jpg',
    text:
      'Les cannibales n\'ont pas de cimetière;',
    open: false
  },
  {
    nbr: 20,
    img: './img/H20.jpg',
    text:
      'J\'espère que tout ce temps que tu vas passer avec ta famille pour les fêtes ne va pas ruiner les progrès que tu as fait avec ton psy',
    open: false       // la propriété 'open' est définie a false par défaut
  },
  {
    nbr: 21,
    img: './img/H21.jpg',
    text:
      "Nos cauchemars, c'est notre âme qui balaye devant sa porte.",
    open: false
  },
  {
    nbr: 22,
    img: './img/H22.jpg',
    text:
      "Metro, bouleau, tombeau...",
    open: false
  },
  {
    nbr: 23,
    img: './img/H23.jpg',
    text: 'Vivre dans un camp de nudistes doit sans doute gâcher tout le plaisir qu\’on attend d\’Halloween.',
    open: false
  },
  {
    nbr: 24,
    img: './img/H24.jpg',
    text: 'Les cadavres ont ceci de commun avec les pots de yaourts que leur date de fabrication est inscrite sur la boîte.',
    open: false
  },
  {
    nbr: 25,
    img: './img/H25.jpg',
    text: 'Le travail est un cimetière d\'espoir',
    open: false
  },
  {
    nbr: 26,
    img: './img/H26.jpg',
    text: 'Il y a des cimetière tellement tristes que ça donne pas envie de mourir',
    open: false
  },
  {
    nbr: 27,
    img: './img/H27.jpg',
    text: "Comment vont tes parents ? Toujours aux mêmes cimetières ?",
    open: false
  },
  {
    nbr: 28,
    img: './img/H28.jpg',
    text:
      'Le vrai tombeau des morts sont les coeurs des vivants',
    open: false
  },
  {
    nbr: 29,
    img: './img/H29.jpg',
    text: "Le bien a pour tombeau l\'ingratitude humaine",
    open: false
  },
  {
    nbr: 30,
    img: './img/H30.jpg',
    text:
      "J-1, vous allez enfin pouvoir sortir sans maquillage !",
    open: false
  },
  {
    nbr: 31,
    img: './img/H31.jpg',
    text:
      "Joyeux Noël ! Nan j\'rigole vas t\'faire foutre",
    open: false
  }
];

// déclaration de la variable createCalendar
// J'assigne à la fonction shuffle le tableau hatchArray en argument
export const createCalendar = () => shuffle(hatchArray);                    // Je peux spécifier le type de retour ici ": HatchType[]", il sera ainsi exporté partout et cela évite d'avoir à le spécifier dans la création d'un nouvel état (App.tsx) 

// La fonction shuffle mélange le tableau hatchArray et le résultat du mélange est ce que la fonction createCalendar renverra








// L'ALGORITHME DE FISHER-YATES :
// Algorithme pour mélanger les éléments d'un tableau de manière aléatoire.
// Il garantit que chaque élément a la même probabilité d'être placé à n'importe quelle position, ce qui crée un mélange aléatoire et impartial.
// C'est une méthode efficace et largement utilisée pour produire un mélange aléatoire équitable d'un ensemble d'éléments.

// pour mélanger un tableau :

// - On commence par prendre le dernier élément du tableau et on le place à la première position.

// Ensuite, on prend l'avant-dernier élément du tableau et on le place à la deuxième position.

// On continue ainsi en prenant chaque élément restant du tableau et en le plaçant dans une position aléatoire parmi les éléments non encore mélangés.

