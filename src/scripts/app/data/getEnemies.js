import getRandomNumber from "../../helpers/getRandomNumber"


const enemies = [
  {
    name: 'troll',
    attack: 1,
    defence: 3,
    maxHit: 20,
    minHit: 17
  },
  {
    name: 'spider',
    attack: 3,
    defence: 1,
    maxHit: 7,
    minHit: 5
  },
  {
    name: 'skeleton',
    attack: 1,
    defence: 2,
    maxHit: 17,
    minHit: 15
  }
]


const getEnemies = () => {
  const index = getRandomNumber(0, enemies.length - 1)
  const current = enemies[index]
  return current;
}

export default getEnemies;