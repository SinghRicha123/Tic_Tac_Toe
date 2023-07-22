import Icon from '../icon/Icon';
import './card.css'

function Card({player}){
    let icon = <Icon/>
    if(player === 'X'){
        icon = <Icon name="cross" />
    }
    else if(player === 'o'){
        icon= <Icon name="circle" />
    }
   return (
    <div className='card'>
        {icon}
    </div>
   )
}
export default Card;