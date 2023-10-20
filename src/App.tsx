import React from 'react';
import Hatch from './components/Hatch';
import { HatchType, createCalendar } from './helpers';
import { GlobalStyle, StyledApp } from './App_style';

const App: React.FC = () => {                 // déclaration d'une constante appelée App qui est un composant React
// Création d'un nouvel etat :
// initialise un état hatches dans le composant. Cet état est géré à l'aide du hook useState de React
// Dans le crochet du useState, je lui donne le type HatchType pour indiquer que hatches sera un tableau de type HatchType. Puis j'appel la fonction createCalendar() pour définir la valeur initiale de l'état
// [hatches, setHatches] : Cela déstructure le tableau retourné par React.useState. La première valeur hatches est la valeur actuelle de l'état, et la deuxième valeur setHatches est la fonction qui permet de mettre à jour cet état.
  const [hatches, setHatches] = React.useState<HatchType[]>(createCalendar());


  // f° qui permet de gérer les clics sur les casiers et utilise un boucle map pour afficher chaque casier en tant que composant Hatch
  const handleClickHatch = (nbr: number) => {
    // mise à jour de l'état hatches à l'aide de la fonction setHatches et de la méthode map
    // map parcoure le tableau hatches et mettre à jour un casier spécifique en fonction de son numéro
    setHatches(prev => prev.map(hatch => (hatch.nbr === nbr ? { ...hatch, open: !hatch.open} :hatch)));
    // Si le numéro de casier correspond à nbr, il inverse la valeur de la propriété open en utilisant { ...hatch, open: !hatch.open }, ce qui signifie que le casier ouvrira ou fermera. Sinon, il renvoie simplement le casier inchangé.
  };



  return (
    <StyledApp>
      <GlobalStyle />
      {hatches.map(hatch => (
        <Hatch key={hatch.nbr} hatch={hatch} handleClick={handleClickHatch} />
      ))}
    </StyledApp>
    // boucle map qui parcourt le tableau hatches
    // pour chaque casier elle crée un composant Hatch en lui passant les propriétés spécifiques (notamment le hatch lui-même et la fonction handleClickHatch) en tant que props
    // Chaque Hatch est associé à une key basée sur le numéro de casier (hatch.nbr) pour aider React à gérer efficacement les mises à jour
  );
};

export default App;



// React.FC<Props> : (Functional Component) composant React qui reçoit les propiétés spécifiées par le type 'Props'
// MAP :
// map est utilisée pour parcourir le tableau hatches et mettre à jour un casier (ou "hatch") spécifique en fonction de son numéro