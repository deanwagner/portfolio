/**
 * Portfolio
 * @class
 */
class Portfolio {

    /**
     * Constructor
     * @constructor
     */
    constructor() {

        /* * * * * * * * * *\
         *    Projects     *
        \* * * * * * * * * */

        const projects = [{
            name : 'LCD Calculator',
            desc : 'An LCD Calculator App written in JavaScript with an SVG display.',
            live : 'https://deanwagner.github.io/calculator/',
            repo : 'https://github.com/deanwagner/calculator',
            icon : 'https://deanwagner.github.io/calculator/img/calculator.svg',
            img  : 'https://deanwagner.github.io/calculator/img/calculator-screenshot.png'
        }, {
            name : 'Paint App',
            desc : 'A Paint-by-Pixel App written in JavaScript.',
            live : 'https://deanwagner.github.io/paint/',
            repo : 'https://github.com/deanwagner/paint',
            icon : 'https://deanwagner.github.io/paint/img/paint.png',
            img  : 'https://deanwagner.github.io/paint/img/paint-screenshot.png'
        }, {
            name : 'Library App',
            desc : 'Library app to store, track, and sort a book collection.',
            live : 'https://deanwagner.github.io/library/',
            repo : 'https://github.com/deanwagner/library',
            icon : 'https://deanwagner.github.io/library/img/library.svg',
            img  : 'https://deanwagner.github.io/library/img/library-screenshot.png'
        }, {
            name : 'Tic Tac Toe',
            desc : 'A Tic Tac Toe game with an intelligent AI opponent.',
            live : 'https://deanwagner.github.io/tic-tac-toe/',
            repo : 'https://github.com/deanwagner/tic-tac-toe',
            icon : 'https://deanwagner.github.io/tic-tac-toe/img/ttt.svg',
            img  : 'https://deanwagner.github.io/tic-tac-toe/img/tictactoe-screenshot.png'
        }, {
            name : 'Rock Paper Scissors',
            desc : 'A Rock Paper Scissors game written in JavaScript.',
            live : 'https://deanwagner.github.io/rock-paper-scissors/',
            repo : 'https://github.com/deanwagner/rock-paper-scissors',
            icon : 'https://deanwagner.github.io/rock-paper-scissors/img/scissors.svg',
            img  : 'https://deanwagner.github.io/rock-paper-scissors/img/rps-screenshot.png'
        }, {
            name : 'Clock',
            desc : 'An Animated Clock written in JavaScript and CSS.',
            live : 'https://deanwagner.github.io/clock/',
            repo : 'https://github.com/deanwagner/clock',
            icon : 'https://deanwagner.github.io/clock/res/clock.png',
            img  : 'https://deanwagner.github.io/clock/img/clock-screenshot.png'
        }, {
            name : 'Dashboard',
            desc : 'An Admin Dashboard Mock-Up with a Responsive Design and Light/Dark Themes.',
            live : 'https://deanwagner.github.io/dashboard/',
            repo : 'https://github.com/deanwagner/dashboard',
            icon : 'https://deanwagner.github.io/dashboard/img/icon.svg',
            img  : 'https://deanwagner.github.io/dashboard/img/dashboard-pc-light.png'
        }, {
            name : 'Sign-Up Form',
            desc : 'A Sign-Up Form Mock-Up with Browser-Based Input Validation.',
            live : 'https://deanwagner.github.io/odin_project/signup/',
            repo : 'https://github.com/deanwagner/odin_project/tree/main/signup',
            icon : 'https://www.theodinproject.com/favicon-32x32.png',
            img  : 'https://deanwagner.github.io/odin_project/signup/img/signup-screenshot.png'
        }, {
            name : 'Landing Page',
            desc : 'A Landing Page Mock-Up written in CSS and HTML.',
            live : 'https://deanwagner.github.io/odin_project/landingpage/',
            repo : 'https://github.com/deanwagner/odin_project/tree/main/landingpage',
            icon : 'https://www.theodinproject.com/favicon-32x32.png',
            img  : 'https://deanwagner.github.io/odin_project/landingpage/img/landingpage-screenshot.png'
        }];

        /* * * * * * * * * *\
         *  Social Media   *
        \* * * * * * * * * */

        const social = [{
            name : 'GitHub',
            link : 'https://github.com/deanwagner',
            icon : '<svg viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>'
        }, {
            name : 'LinkedIn',
            link : 'https://www.linkedin.com/in/deanrwagner/',
            icon : '<svg viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>'
        }, {
            name : 'Instagram',
            link : 'https://www.instagram.com/dean.r.wagner/',
            icon : '<svg viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>'
        }, {
            name : 'YouTube',
            link : 'https://www.youtube.com/DeanWagner12B',
            icon : '<svg viewBox="0 0 24 24"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>'
        }, {
            name : 'Twitter',
            link : 'https://twitter.com/Dean_Wagner',
            icon : '<svg viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>'
        }, {
            name : 'Facebook',
            link : 'https://www.facebook.com/TheDeanWagner',
            icon : '<svg viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>'
        }];

        /* * * * * * * * * *\
         *   Build Page    *
        \* * * * * * * * * */

        // Projects
        projects.forEach(project => {
            const section = document.createElement('section');
            section.innerHTML = this.buildProject(project);
            document.getElementById('projects').appendChild(section);
        });

        // Social Media
        social.forEach(media => {
            document.getElementById('social').innerHTML += this.buildSocial(media);
        });

        // Animate 'About Me'
        document.getElementById('about_me').style.marginLeft = '0';

        // Low-Effort Spam Crawler Avoidance
        const str = 'ten.rengawnaed@ofni';
        const adr = str.split('').reverse().join('');
        document.getElementById('em' + 'ail').href = 'mai' + 'lto' + ':' + adr;
        document.getElementById('sp' + 'am').innerText = adr;

        /* * * * * * * * * *\
         * Event Listeners *
        \* * * * * * * * * */


    }

    /**
     * Project HTML Template
     * @param {object} project - Project Object
     * @returns {string} - HTML String
     */
    buildProject(project) {
        return `
            <img class="project_img" src="${project.img}" alt="Project Screenshot" loading="lazy">
            <div class="project_head">
                <h3><a href="${project.live}"><img class="project_icon" src="${project.icon}" alt="Project Icon" loading="lazy">${project.name}</a></h3>
                <div class="project_links">
                    <a href="${project.live}"><svg viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" /></svg></a>
                    <a href="${project.repo}"><svg viewBox="0 0 32 32"><path d="M16.0018,0A16.2088,16.2088,0,0,0,0,16.4223,16.4156,16.4156,0,0,0,10.7179,31.9376c.84.2166.7114-.3966.7114-.8153v-2.846c-4.8513.5839-5.0479-2.7138-5.3732-3.2646-.6578-1.1531-2.213-1.4469-1.7482-1.9977,1.1047-.5839,2.2308.1469,3.5357,2.1262.9438,1.4359,2.7849,1.1935,3.718.9548a4.664,4.664,0,0,1,1.24-2.2327c-5.0264-.9254-7.1214-4.0762-7.1214-7.8219A7.3467,7.3467,0,0,1,7.4074,11.204a6.5675,6.5675,0,0,1,.1752-4.4067C9.66,6.6064,11.819,8.325,11.987,8.4609a15.14,15.14,0,0,1,4.0362-.5,15.1577,15.1577,0,0,1,4.0577.51c.404-.3158,2.406-1.7921,4.3365-1.6121a6.6124,6.6124,0,0,1,.1966,4.3332,7.3488,7.3488,0,0,1,1.7482,4.8584c0,3.7531-2.1093,6.9075-7.15,7.8182a4.7469,4.7469,0,0,1,1.362,3.3418v4.1313c.0286.3305,0,.6573.5363.6573A16.4082,16.4082,0,0,0,32,16.426,16.2136,16.2136,0,0,0,16.0018,0Z" /></svg></a>
                </div>
            </div>
            <p>${project.desc}</p>
        `;
    }

    /**
     * Project HTML Template
     * @param {object} media - Social Object
     * @returns {string} - HTML String
     */
    buildSocial(media) {
        return `<a href="${media.link}" rel="external" target="_blank">${media.icon}${media.name}</a>`;
    }
}

export default Portfolio;