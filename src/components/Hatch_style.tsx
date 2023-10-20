// bibliothèque de styles CSS-in-JS
import styled from 'styled-components';


// On définie l'objet et on lui spécifie les propriétés attendus
type Props = {
  open: boolean;
  background: string;
};

// style de wrapper (Hatch.tsx) :
export const Wrapper = styled.div<Props>      //  crée un composant stylisé basé sur div. Je lui fait passé les props
`
  padding-top: 100%;
  position: relative;
  cursor: pointer;

  .front {
    background: center / cover url(${props => props.background});                 /* § */
    position: absolute;                 
    top: 0;
    left: 0;                                                                      /* § */
    z-index: 2;                                                                   /* met cet élément au-dessus de tous les éléments ayant un z-index inférieur. */
    transform: ${props => (props.open ? 'rotateY(180deg)' : 'rotateY(0deg)')};    /* permet la rotation des cartes avec la prop open passé dans le composant wrapper dans Hatch */

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
      user-select: none;
    }
  }

  .back {
    position: absolute;
    background: center / cover url('./img/H23.jpg');
    top: 0px;
    left: 0px;
    z-index: ${props => (props.open ? 2 : 1)};                          /* si open = true, l'élément est placé au-dessus des autres, si open = false, l'élément a un i-Z de 1, et se place en dessous des autres */
    transform: ${props => (props.open ? 'rotateY(0deg)' : 'rotateY(180deg)')};

    p {
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 10px;
      font-size: 1.2rem;
      text-align: center;
      user-select: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;








//   pointer-events: ${({ enabled }) => (enabled ? '' : 'none')};        /* permet de rendre le composant actif ou inactif en fonction de la valeur de enabled */
// URL dynamique qui défini le Bgd. provient de la propriété background passée comme prop au composant Hatch
// combinées avec position: absolute, placent l'élément dans le coin supérieur gauche de son conteneur
// L'index Z contrôle la pile d'éléments et leur ordre de superposition. 