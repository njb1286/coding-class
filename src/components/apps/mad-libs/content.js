import React from 'react';

export default function(props) {
const keys = Object.keys(props.data);
const data_old = keys.map((item, index) => {
  return {
    [item]: (
      <span className='madlib-text'>
        <div className='card__content__data__index'>{index + 1}</div>
        <span className='card__content__data__text'>{props.data[item]}</span>
      </span>
    )
  }
});

let data = {};
for (let i in keys) data[keys[i]] = data_old[i][keys[i]];

return (
    <div className="card__content">
        <p style={props.style} className="card__content__data">
          Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun}</b> and the <b>{data.adjectiveOne}</b> Yankees. <b>{data.celebrityOne}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{data.adjectiveTwo}</b> ball that just cuts the inside of the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numberOne}</b> strikes and <b>{data.numberTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.nounTwo}</b> out to <b>{data.adjectiveThree}</b> field. But <b>{data.celebrityTwo}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebrityThree}</b>, the Cleveland <b>{data.adjectiveFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree}</b>. <b>{data.celebrityFour}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjectiveFive}</b> League!  
        </p>
    </div>
)
}