const heroes = [
    {
        id: 1,
        name: 'John',
        owner: 'Marvell',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvell',
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'Sony Productions',
    },
];

const findHeroById = (idHero: number) => heroes.find(hero => hero.id === idHero);   
const hero = findHeroById(1);

console.log('HEROOOOEEE', hero);
