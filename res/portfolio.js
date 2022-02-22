import Settings from './settings.js';
import Projects from './projects.js';
import Social   from './social.js';

/**
 * Portfolio
 * @class
 * @property {object} settings - Settings Object
 * @property {object} projects - Projects Object
 * @property {object} social   - Social Object
 */
class Portfolio {

    // Class Properties
    settings = {};
    projects = {};
    social   = {};

    /**
     * Constructor
     * @constructor
     */
    constructor() {

        // Load Modules
        this.settings = new Settings();
        this.projects = new Projects();
        this.social   = new Social();

        // Animate 'About Me'
        document.getElementById('about_me').style.marginLeft = '0';

        // Low-Effort Spam Crawler Avoidance
        const str = 'ten.rengawnaed@ofni';
        const adr = str.split('').reverse().join('');
        document.getElementById('em' + 'ail').href = 'mai' + 'lto' + ':' + adr;
        document.getElementById('sp' + 'am').innerText = adr;
    }
}

export default Portfolio;