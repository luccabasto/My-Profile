import Avatar from '../img/Avatar.jpg';

///Components
import './SocialNetworks'
import './InfoContato'
import './DownloadProfile'

//Styles
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks';
import InfoContato from './InfoContato';
import DownloadProfile from './DownloadProfile';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='Lucas Basto'></img>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InfoContato/>
      <DownloadProfile/>

    </aside>
  );
}

export default Sidebar