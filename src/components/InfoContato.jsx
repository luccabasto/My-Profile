//Icons
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/infoContato.sass'

const infoContact = [
  {name: "telefone", value:" (11) 91234-9999", icon: <AiFillPhone/>},
  {name: "email", value:" lcbeezus@gmail.com" , icon: <AiOutlineMail/>},
  {name: "localizacao", value:" São Paulo / SP" , icon: <AiFillEnvironment/>}
]



const InfoContato = () => {
  return (
      <section id="info">
        {infoContact.map((info) => (
          <h4 className='info-btn' id={info.name} key={info.value}>
          {info.icon} 
          {info.value}
          </h4>
        ))}
      </section>
  )
}

export default InfoContato