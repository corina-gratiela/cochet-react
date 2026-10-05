import FooterNavigation from '../navigation/FooterNavigation';
import Icon from '../content/Icon';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
    	<div className="site-footer__top">
    		<div className="wrapper">
    			<div className="footer-box">
    				<div className="footer-box__title">Contact</div>
    				<div className="footer-box__content">
    					<p><Icon name="phone" /><a href="tel:0722227020">0722 227020</a></p>
    					<p><Icon name="mail" /><a href="mailto:contact@salon-cochet.ro">contact@salon-cochet.ro</a></p>
    					<p><Icon name="location" />Șelimbar, str. Doamna Stanca, nr.9, Bl.3, Romania</p>
    				</div>
    			</div>
    			<div className="footer-box">
    				<div className="footer-box__title">Servicii oferite</div>
    				<div className="footer-box__content">
    					<p><Icon name="star" />Coafor, frizerie</p>
    					<p><Icon name="star" />Manichiură, pedichiură</p>
    					<p><Icon name="star" />Tatuaje</p>
    					<p><Icon name="star" />Tratamente faciale</p>
    					<p><Icon name="star" />Pensat, epilat</p>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className="site-footer__bottom">
    		<div className="wrapper">
    			<FooterNavigation />
    			<div className="copyright">Copyright &copy; 2012-{new Date().getFullYear()} Salon Cochet Sibiu</div>
    		</div>
    	</div>
    	<div className="site-footer__anpc">
    		<div className="wrapper">
    			<a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener" title="ANPC Soluționarea alternativă a litigiilor">
    				<img loading="lazy" src={import.meta.env.BASE_URL + 'images/SAL.svg'} alt="Soluționarea alternativă a litigiilor" />
    			</a>
    			<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" title="Soluționarea online a litigiilor" >
    				<img loading="lazy" src={import.meta.env.BASE_URL + 'images/SOL.svg'} alt="Soluționarea online a litigiilor" />
    			</a>
    		</div>
    	</div>
    </footer>

  );
}
