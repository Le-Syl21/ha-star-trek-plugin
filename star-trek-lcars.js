/**
 * Star Trek LCARS Plugin for Home Assistant
 * Adds authentic LCARS geometric shapes and styling
 * 
 * @author Le-Syl21
 * @version 1.0.0
 * @description Formes géométriques authentiques LCARS pour compléter le Star Trek Theme
 */

console.info(
  '%c🖖 STAR TREK LCARS %c1.0.0 %c🚀',
  'color: #FF9900; font-weight: bold; background: #000000; padding: 2px 6px; border-radius: 3px',
  'color: #FFCC00; font-weight: bold; background: #000000; padding: 2px 6px; border-radius: 3px',
  'color: #99CCFF; font-weight: bold; background: #000000; padding: 2px 6px; border-radius: 3px'
);

class StarTrekLCARSPlugin {
  constructor() {
    this.init();
  }

  init() {
    console.log('🖖 Initialisation des formes géométriques LCARS...');
    this.injectCSS();
    this.setupThemeDetection();
  }

  /**
   * Injection du CSS LCARS avec formes géométriques authentiques
   */
  injectCSS() {
    const cssId = 'star-trek-lcars-shapes';
    
    // Éviter la double injection
    if (document.getElementById(cssId)) return;

    const css = `
/* Star Trek LCARS Geometric Shapes Plugin */

/* Import police futuriste */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

/* Variables LCARS authentiques */
:root {
  --lcars-pale-canary: #FFFF99;
  --lcars-tanoi: #FFCC99;
  --lcars-golden-tanoi: #FFCC66;
  --lcars-neon-carrot: #FF9933;
  --lcars-orange-peel: #FF9966;
  --lcars-atomic-tangerine: #FF9900;
  --lcars-anakiwa: #99CCFF;
  --lcars-mariner: #3366CC;
  --lcars-lilac: #CC99CC;
  --lcars-chestnut-rose: #CC6666;
  --lcars-black: #000000;
  --lcars-gray: #333333;
  --lcars-text: #000000;
  --lcars-radius: 20px;
  --lcars-radius-large: 40px;
}

/* Police LCARS pour thème actif */
.theme-star-trek * {
  font-family: 'Orbitron', 'Arial Black', sans-serif !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
}

/* === CARTES LCARS AUTHENTIQUES === */
.theme-star-trek ha-card {
  background: var(--lcars-black) !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: visible !important;
  position: relative !important;
  margin: 10px 5px !important;
}

/* Bordure colorée gauche LCARS */
.theme-star-trek ha-card::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 0;
  bottom: 0;
  width: 8px;
  background: linear-gradient(180deg, 
    var(--lcars-atomic-tangerine) 0%, 
    var(--lcars-neon-carrot) 30%, 
    var(--lcars-tanoi) 60%, 
    var(--lcars-pale-canary) 100%);
  border-radius: var(--lcars-radius) 0 0 var(--lcars-radius);
  z-index: 1;
}

/* Bordure colorée droite LCARS */
.theme-star-trek ha-card::after {
  content: '';
  position: absolute;
  right: -5px;
  top: 20px;
  bottom: 20px;
  width: 6px;
  background: var(--lcars-anakiwa);
  border-radius: 0 var(--lcars-radius) var(--lcars-radius) 0;
  z-index: 1;
}

/* === EN-TÊTES LCARS === */
.theme-star-trek .card-header {
  background: linear-gradient(90deg, var(--lcars-atomic-tangerine) 0%, var(--lcars-pale-canary) 100%) !important;
  color: var(--lcars-text) !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  letter-spacing: 2px !important;
  padding: 8px 16px !important;
  margin: 0 0 10px 0 !important;
  border-radius: 0 var(--lcars-radius-large) var(--lcars-radius) 0 !important;
  position: relative !important;
  box-shadow: 2px 2px 10px rgba(255, 153, 0, 0.3) !important;
}

/* Coins LCARS sur en-têtes */
.theme-star-trek .card-header::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  bottom: 0;
  width: 10px;
  background: var(--lcars-chestnut-rose);
  border-radius: var(--lcars-radius) 0 0 var(--lcars-radius);
}

.theme-star-trek .card-header::after {
  content: '';
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 60%;
  background: var(--lcars-lilac);
  border-radius: 0 var(--lcars-radius) var(--lcars-radius) 0;
}

/* === SIDEBAR LCARS === */
.theme-star-trek .mdc-drawer {
  background: var(--lcars-black) !important;
  border-right: 6px solid var(--lcars-atomic-tangerine) !important;
  position: relative !important;
}

/* Barre décorative multicolore */
.theme-star-trek .mdc-drawer::before {
  content: '';
  position: absolute;
  right: -6px;
  top: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, 
    var(--lcars-pale-canary) 0%,
    var(--lcars-neon-carrot) 25%,
    var(--lcars-anakiwa) 50%,
    var(--lcars-lilac) 75%,
    var(--lcars-chestnut-rose) 100%);
  animation: lcars-pulse 3s infinite ease-in-out;
}

/* Items de navigation */
.theme-star-trek .mdc-list-item {
  background: transparent !important;
  border-radius: 0 var(--lcars-radius-large) var(--lcars-radius) 0 !important;
  margin: 3px 8px 3px 0 !important;
  padding: 8px 16px !important;
  transition: all 0.2s ease !important;
  position: relative !important;
  overflow: hidden !important;
}

/* Barre colorée gauche pour items */
.theme-star-trek .mdc-list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--lcars-neon-carrot);
  border-radius: var(--lcars-radius) 0 0 var(--lcars-radius);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.theme-star-trek .mdc-list-item:hover {
  background: linear-gradient(90deg, rgba(255, 153, 51, 0.1) 0%, rgba(255, 255, 153, 0.05) 100%) !important;
  transform: translateX(4px) !important;
}

.theme-star-trek .mdc-list-item:hover::before {
  opacity: 1;
}

.theme-star-trek .mdc-list-item--selected {
  background: linear-gradient(90deg, var(--lcars-atomic-tangerine) 0%, var(--lcars-pale-canary) 100%) !important;
  color: var(--lcars-text) !important;
  font-weight: 900 !important;
  box-shadow: 0 2px 8px rgba(255, 153, 0, 0.3) !important;
}

.theme-star-trek .mdc-list-item--selected::before {
  background: var(--lcars-chestnut-rose);
  opacity: 1;
}

/* === BOUTONS LCARS === */
.theme-star-trek mwc-button,
.theme-star-trek .mdc-button {
  background: linear-gradient(90deg, var(--lcars-neon-carrot) 0%, var(--lcars-pale-canary) 100%) !important;
  color: var(--lcars-text) !important;
  border: none !important;
  border-radius: 0 var(--lcars-radius-large) var(--lcars-radius) 0 !important;
  text-transform: uppercase !important;
  font-weight: 900 !important;
  letter-spacing: 2px !important;
  padding: 12px 24px !important;
  transition: all 0.2s ease !important;
  position: relative !important;
  overflow: hidden !important;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3) !important;
}

/* Coin gauche coloré */
.theme-star-trek mwc-button::before,
.theme-star-trek .mdc-button::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background: var(--lcars-chestnut-rose);
  border-radius: var(--lcars-radius) 0 0 var(--lcars-radius);
}

/* Effet hover */
.theme-star-trek mwc-button:hover,
.theme-star-trek .mdc-button:hover {
  background: linear-gradient(90deg, var(--lcars-atomic-tangerine) 0%, var(--lcars-tanoi) 100%) !important;
  transform: translateY(-1px) !important;
  box-shadow: 3px 4px 12px rgba(255, 153, 0, 0.4) !important;
}

/* === ICÔNES AVEC LUEUR === */
.theme-star-trek ha-icon {
  filter: drop-shadow(0 0 2px rgba(255, 255, 153, 0.3)) !important;
  transition: all 0.2s ease !important;
}

.theme-star-trek ha-icon:hover {
  filter: drop-shadow(0 0 6px rgba(255, 153, 0, 0.8)) !important;
  transform: scale(1.05) !important;
}

/* === SCROLLBARS LCARS === */
.theme-star-trek ::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

.theme-star-trek ::-webkit-scrollbar-track {
  background: var(--lcars-black);
  border-radius: var(--lcars-radius);
  border: 1px solid var(--lcars-gray);
}

.theme-star-trek ::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, var(--lcars-atomic-tangerine), var(--lcars-pale-canary));
  border-radius: var(--lcars-radius);
  border: 1px solid var(--lcars-neon-carrot);
  box-shadow: 0 0 4px rgba(255, 153, 0, 0.3);
}

.theme-star-trek ::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, var(--lcars-pale-canary), var(--lcars-atomic-tangerine));
  box-shadow: 0 0 8px rgba(255, 153, 0, 0.6);
}

/* === RESPONSIVE MOBILE === */
@media (max-width: 768px) {
  .theme-star-trek ha-card::before,
  .theme-star-trek ha-card::after {
    width: 4px;
  }
  
  .theme-star-trek .card-header {
    font-size: 14px !important;
    letter-spacing: 1px !important;
  }
  
  .theme-star-trek mwc-button,
  .theme-star-trek .mdc-button {
    border-radius: 0 var(--lcars-radius) var(--lcars-radius) 0 !important;
    padding: 8px 16px !important;
    font-size: 12px !important;
  }
  
  .theme-star-trek .mdc-list-item {
    margin: 2px 4px 2px 0 !important;
    padding: 6px 12px !important;
  }
}

/* === ANIMATIONS LCARS === */
@keyframes lcars-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes lcars-data-flow {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

/* Animation des éléments au survol */
.theme-star-trek ha-card:hover::before {
  animation: lcars-pulse 2s infinite ease-in-out;
}

/* Animation subtile des en-têtes */
.theme-star-trek .card-header::after {
  animation: lcars-data-flow 8s infinite ease-in-out;
}
`;

    const style = document.createElement('style');
    style.id = cssId;
    style.textContent = css;
    document.head.appendChild(style);

    console.log('✅ Formes géométriques LCARS injectées');
  }

  /**
   * Détection du thème Star Trek
   */
  setupThemeDetection() {
    // Appliquer la classe CSS quand le thème Star Trek est actif
    const applyLCARSClass = () => {
      const isStarTrekTheme = document.documentElement.style.getPropertyValue('--primary-color') === '#FF9900' ||
                             window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color').includes('255, 153, 0');
      
      if (isStarTrekTheme) {
        document.body.classList.add('theme-star-trek');
        console.log('🖖 Formes LCARS activées pour le thème Star Trek');
      } else {
        document.body.classList.remove('theme-star-trek');
      }
    };

    // Vérifier au chargement
    applyLCARSClass();

    // Observer les changements de thème
    const observer = new MutationObserver(applyLCARSClass);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    // Écouter les événements de changement de thème
    document.addEventListener('theme-changed', applyLCARSClass);
    
    console.log('🖖 Détection du thème Star Trek configurée');
  }
}

// Initialisation automatique
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new StarTrekLCARSPlugin();
  });
} else {
  new StarTrekLCARSPlugin();
}

console.log('🖖 Star Trek LCARS Plugin chargé - Live long and prosper!');
