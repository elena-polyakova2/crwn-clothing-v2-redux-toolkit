import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'bycicles',
    imageUrl: 'https://i.ibb.co/GMqNQVx/bright-pink-bike.jpg',
    route: 'shop/bicycles',
  },
  {
    id: 2,
    title: 'table games',
    imageUrl: 'https://i.ibb.co/Js97qrq/go-game.jpg',
    route: 'shop/table%20games',
  },
  {
    id: 3,
    title: 'SPORT BALLS',
    imageUrl: 'https://i.ibb.co/dLPmtYM/ball.jpg',
    route: 'shop/sport%20balls',
  },
  {
    id: 4,
    title: 'OUTDOOR SPORT & GAMES',
    imageUrl: 'https://i.ibb.co/RbqCGK1/kayak.jpg',
    route: 'shop/outdoor%20sport%20&%20games',
  },
  {
    id: 5,
    title: 'CHILDREN\'S SPORT & GAME',
    imageUrl: 'https://i.ibb.co/KrdFrRs/trampoline.jpg',
    route: 'shop/children\'s%20sport%20&%20games',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
