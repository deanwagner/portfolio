"use strict";

// Import Modules
import Theme    from './theme.js';
import Projects from './projects.js';
import Social   from './social.js';

/**
 * Portfolio
 * @class
 * @property {object} theme    - Theme Object
 * @property {object} projects - Projects Object
 * @property {object} social   - Social Object
 * @author Dean Wagner <info@deanwagner.net>
 */
class Portfolio {

    // Class Properties
    theme    = {};
    projects = {};
    social   = {};

    /**
     * Constructor
     * @constructor
     */
    constructor() {

        // Load Modules
        this.theme    = new Theme();
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