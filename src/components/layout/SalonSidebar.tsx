import { Link } from 'react-router';
import Icon from '../content/Icon';
import InfoPanel from '../content/InfoPanel';

export default function SalonSidebar() {
  return (
    <aside className="site-content__right" aria-label="Informații salon">
    	<InfoPanel title="Programari">
    		<div className="unde-cand__program">
    			<div className="unde-cand__line">
    				<span className="entry">Coafură, frizerie:</span>
    				<span className="value">0722 227020</span>
    			</div>
    			<div className="unde-cand__line">
    				<span className="entry">Manichiură, pedichiură:</span>
    				<span className="value">0758 641200<br />0732 125905</span>
    			</div>
    			<div className="unde-cand__line">
    				<span className="entry">Microblading, micropigmentare:</span>
    				<span className="value">0730 809072</span>
    			</div>
    			<div className="unde-cand__line">
    				<span className="entry">Cosmetică:</span>
    				<span className="value">0741 391807</span>
    			</div>
    		</div>
    	</InfoPanel>
    	<InfoPanel title="Program">
    		<div className="unde-cand__content">
    			<p><span className="unde-cand__label">Luni-Vineri:</span> 8<sup>00</sup>-20<sup>00</sup></p>
    			<p><span className="unde-cand__label">Sambata:</span> 8<sup>00</sup>-14<sup>00</sup></p>
    			<div className="unde-cand__location">
    				<p><Icon name="location" /> str. Doamna Stanca, nr.9, Bl.3</p>
    				<p>Șelimbar - Sibiu, Romania</p>
    			</div>
    			<div className="unde-cand__phone">
    				<p><Icon name="phone" /> <span>0722 227020</span></p>
    				<p><Icon name="mail" /> <a href="mailto:contact@salon-cochet.ro">contact@salon-cochet.ro</a></p>
    			</div>
    		</div>
    	</InfoPanel>
    	<InfoPanel title="Oferim servicii de">
    		<div className="unde-cand__content">
    			<p><Link to="/servicii/coafor">Tuns, spălat</Link></p>
    			<p><Link to="/servicii/coafor">Vopsit, decolorat, vopsit şuviţe</Link></p>
    			<p><Link to="/servicii/coafor">Permanent, Hair Styling</Link></p>
    			<p><Link to="/servicii/coafor">Extensii de păr</Link></p>
    			<p><Link to="/servicii/coafor">Coafat mirese</Link></p>
    			<p><Link to="/servicii/tatuaje">Tatuaj sprâncene</Link></p>
    			<p><Link to="/servicii/tatuaje">Contur buze</Link></p>
    			<p><Link to="/servicii/tatuaje">Laminare gene</Link></p>
    			<p><Link to="/servicii/tatuaje">Laminare sprâncene</Link></p>
    			
    			<p><Link to="/servicii/cosmetica">Tratamente faciale</Link></p>
    			<p><Link to="/servicii/cosmetica">Pensat, Epilat</Link></p>
    			
    			<p><Link to="/servicii/manichiura">Manichiură, Pedichiură</Link></p>
    			<p><Link to="/servicii/manichiura">Manichiură, Pedichiură ojă semi-permanentă</Link></p>
    			<p><Link to="/servicii/manichiura">Aplicare unghii cu gel</Link></p>
    			<p><Link to="/servicii/manichiura">Manichiură bărbaţi</Link></p>
    		</div>
    	</InfoPanel>
    </aside>
  );
}
