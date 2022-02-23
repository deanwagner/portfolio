"use strict";

/**
 * Projects
 * @class
 * @property {array} projects - Project Objects
 * @author Dean Wagner <info@deanwagner.net>
 */
class Projects {
    projects = [{
        name : 'LCD Calculator',
        desc : 'An LCD Calculator App written in JavaScript with an SVG display.',
        live : 'https://deanwagner.github.io/calculator/',
        repo : 'https://github.com/deanwagner/calculator',
        icon : 'https://deanwagner.github.io/calculator/img/calculator.svg',
        img  : 'https://deanwagner.github.io/calculator/img/calculator-screenshot.png'
    }, {
        name : 'Paint',
        desc : 'A Paint-by-Pixel Image Creation App with save, export, and print abilities.',
        live : 'https://deanwagner.github.io/paint/',
        repo : 'https://github.com/deanwagner/paint',
        icon : 'https://deanwagner.github.io/paint/img/paint.png',
        img  : 'https://deanwagner.github.io/paint/img/paint-screenshot.png'
    }, {
        name : 'Library',
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
        live : 'https://deanwagner.github.io/signup/',
        repo : 'https://github.com/deanwagner/signup',
        icon : 'https://www.theodinproject.com/favicon-32x32.png',
        img  : 'https://deanwagner.github.io/signup/img/signup-screenshot.png'
    }, {
        name : 'Landing Page',
        desc : 'A Landing Page Mock-Up written in CSS and HTML.',
        live : 'https://deanwagner.github.io/landingpage/',
        repo : 'https://github.com/deanwagner/landingpage',
        icon : 'https://www.theodinproject.com/favicon-32x32.png',
        img  : 'https://deanwagner.github.io/landingpage/img/landingpage-screenshot.png'
    }];

    /**
     * Constructor
     * @constructor
     */
    constructor() {
        // Build Projects
        this.build();
    }

    /**
     * Build Projects
     */
    build() {
        this.projects.forEach(project => {
            const section = document.createElement('section');
            section.innerHTML = this.template(project);
            document.getElementById('projects').appendChild(section);
        });
    }

    /**
     * Project HTML Template
     * @param {object} project - Project Object
     * @returns {string} - HTML String
     */
    template(project) {
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
}

export default Projects;