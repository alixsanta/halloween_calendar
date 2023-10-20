import React from 'react';
import { HatchType } from '../../src/helpers';
import { Wrapper } from './Hatch_style';

// On définie l'objet et on lui spécifie les propriétés attendus
type Props = {
  hatch: HatchType;                       // hatch est une propriété qui devrait être un objet de type HatchType (définit dans helpers.ts)
  handleClick: (nbr: number) => void;    // spécifie que handleClick est une f° qui prend un argument nbr de type number et qui ne renvoie rien (void)
};


// Composant appelé Hatch qui reçoit des propriétés de type Props
// extrait certaines valeurs de ces propriétés
// etnutilise ces valeurs pour définir le comportement et le rendu du composant
const Hatch: React.FC<Props> = ({ hatch: {nbr, text, img, open}, handleClick}) => (             // corps du composant
  //  les valeurs des propriétés passées à Wrapper proviennent de la destructuration de props
  // lorsque on clique dessus, il appelle la fonction handleClick avec l'argument nbr
  <Wrapper open={open} background={img} onClick={() => handleClick(nbr)}>        
    <div className='front'>
      <p>{nbr}</p>
    </div>
    <div className='back'>
      <p>{text}</p>
    </div>
  </Wrapper>
);

export default Hatch;






// PROPS :
// le type Props est utilisé pour décrire les propriétés ou les arguments attendus par un composant React. 

// React.FC<Props> : (Functional Component) composant React qui reçoit les propiétés spécifiées par le type 'Props'


// WRAPPER :
// <Wrapper> en typescript permet d'encapsuler le contenu d'un composant

// HANDLECLICK :
// fonction qui gère un événement de clic, généralement attaché à un élément interactif (comme un bouton, un lien ou un composant clicquable).
// Le nom handleClick est souvent utilisé pour indiquer que la fonction gère un événement de clic spécifique.