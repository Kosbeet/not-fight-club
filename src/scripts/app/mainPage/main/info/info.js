import createElement from "../../../../helpers/createElement";
import avatar from "../lobby/avatar/avatar";

const infoData = {
  tag: 'section',
  text: '',
  classes: ['info'],
  attr: {},
  children: [
    {
      tag: 'div',
      text: '',
      classes: ['info__container'],
      attr: {},
      children: [
        {
          tag: 'h2',
          text: 'Info',
          classes: ['info__title'],
          attr: {},
          children: [],
          handlers: {}
        },
        {
          tag: 'div',
          text: '',
          classes: ['info__content-box'],
          attr: {},
          children: [
            avatar(),
            {
              tag: 'div',
              text: '',
              classes: ['info__current-info'],
              attr: {},
              children: [
                {
                  tag: 'span',
                  text: 'Name: name',
                  classes: ['info__text', 'info__text_name'],
                  attr: {},
                  children: [],
                  handlers: {}
                },
                {
                  tag: 'span',
                  text: 'Games: 0',
                  classes: ['info__text', 'info__text_games'],
                  attr: {},
                  children: [],
                  handlers: {}
                },
                {
                  tag: 'span',
                  text: 'Wins: 0',
                  classes: ['info__text', 'info__text_wins'],
                  attr: {},
                  children: [],
                  handlers: {}
                },
                {
                  tag: 'span',
                  text: 'Losses: 0',
                  classes: ['info__text', 'info__text_looses'],
                  attr: {},
                  children: [],
                  handlers: {}
                },

              ],
              handlers: {}
            }
          ],
          handlers: {}
        }
      ],
      handlers: {}
    }
  ],
  handlers: {}
}

const updateInfo = () => {
  const user = JSON.parse(localStorage.getItem('info'));

  const name = document.querySelector('.info__text_name');
  const games = document.querySelector('.info__text_games');
  const wins= document.querySelector('.info__text_wins');
  const looses = document.querySelector('.info__text_looses');

  name.textContent = `Name: ${user.name}`;
  games.textContent = `Games: ${user.games}`;
  wins.textContent = `Wins: ${user.wins}`;
  looses.textContent = `Looses: ${user.looses}`
}

const info = () => {
  const infoElement = createElement(infoData);
  const main = document.querySelector('.main');
  main.append(infoElement);
  updateInfo();
  return infoElement;
}

export default info;