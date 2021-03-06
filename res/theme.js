"use strict";

/**
 * Theme Manager
 * @class
 * @property {array} light    - Light Theme CSS Properties
 * @property {array} dark     - Dark Theme CSS Properties
 * @property {string} accent  - Accent Color
 * @property {string} theme   - Light/Dark Theme
 * @property {string} hero    - Light/Dark Hero Section Text
 * @property {object} storage - LocalStorage
 * @author Dean Wagner <info@deanwagner.net>
 */
class Theme {

    // Class Properties
    light   = [];
    dark    = [];
    accent  = '';
    theme   = 'light';
    hero    = 'light';
    storage = {};

    /**
     * Constructor
     * @constructor
     */
    constructor() {

        // LocalStorage
        this.storage = window.localStorage;

        // Accent Color
        this.accent = this.getStyleProperty('color-accent');

        // Switchable Styles
        const styles = [
            'color-background',
            'color-main-text',
            'color-hero-text',
            'shadow-main-box',
            'shadow-main-title',
            'shadow-main-link',
            'shadow-hero-link'
        ];

        // Clear Settings Button
        this.restore = document.getElementById('clear_settings');

        // Get Values from CSS
        styles.forEach(value => {
            this.light[value] = this.getStyleProperty(value);
            this.dark[value]  = this.getStyleProperty('dark-' + value);
        });

        // Load Settings
        if (this.storage.hasOwnProperty('port_settings')) {
            // Load from LocalStorage
            const saved = JSON.parse(this.storage.getItem('port_settings'));
            this.accent = saved.accent;
            this.theme  = saved.theme;
            this.hero   = saved.hero;

            // Update CSS
            this.setStyleProperty('color-accent', this.accent);
            this.setStyleProperty('color-scheme', this.theme);
            this.restore.style.display = 'inline-block';

            // Hero Text
            if (this.hero === 'dark') {
                this.setHeroColors(this.dark);
            } else {
                this.setHeroColors(this.light);
            }

            // Main Theme
            if (this.theme === 'dark') {
                this.setStyleProperty('dark-mode', '1');
                this.changeMode(this.dark);
            } else {
                this.setStyleProperty('dark-mode', '0');
                this.changeMode(this.light);
            }
        } else {
            // Auto-Load Dark Mode per User Settings
            const isDark = parseInt(this.getStyleProperty('dark-mode'));
            if (isDark) {
                this.theme = 'dark';
                this.setStyleProperty('color-scheme', 'dark');
                this.changeMode(this.dark);
            }
        }

        // Enable Transitions
        this.setStyleProperty('transition-all',   this.getStyleProperty('enable-all'));
        this.setStyleProperty('transition-bg',    this.getStyleProperty('enable-bg'));
        this.setStyleProperty('transition-color', this.getStyleProperty('enable-color'));
        this.setStyleProperty('transition-fill',  this.getStyleProperty('enable-fill'));

        // Color Picker
        const accent = document.getElementById('accent_color');
        accent.value = this.getStyleProperty('color-accent');
        document.getElementById('color_picker').addEventListener('click', () => {
            accent.click();
        });

        // Color Change
        accent.addEventListener('change', (e) => {
            const newColor = e.target.value;
            const rawColor = newColor.replace('#', '');
            this.accent = newColor;
            this.setStyleProperty('color-accent', newColor);
            if (parseInt(rawColor, 16) > 0xffffff / 2) {
                this.hero = 'dark';
                this.setHeroColors(this.dark);
            } else {
                this.hero = 'light';
                this.setHeroColors(this.light);
            }
            this.save();
        });

        // Theme Change
        document.getElementById('theme_picker').addEventListener('click', () => {
            const dark = parseInt(this.getStyleProperty('dark-mode'));
            if (dark) {
                this.theme = 'light';
                this.setStyleProperty('dark-mode', '0');
                this.setStyleProperty('color-scheme', 'light');
                this.changeMode(this.light);
            } else {
                this.theme = 'dark';
                this.setStyleProperty('dark-mode', '1');
                this.setStyleProperty('color-scheme', 'dark');
                this.changeMode(this.dark);
            }
            this.save();
        });

        // Clear Settings
        this.restore.addEventListener('click', () => {
            this.storage.removeItem('port_settings');
            location.reload();
        });
    }

    /**
     * Get CSS Property
     * @param   {string} prop - Property
     * @returns {string} - Value
     */
    getStyleProperty(prop) {
        const property = (prop === 'color-scheme') ? prop : '--' + prop;
        return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
    }

    /**
     * Set CSS Property
     * @param {string} prop  - Property
     * @param {string} value - Value
     */
    setStyleProperty(prop, value) {
        const property = (prop === 'color-scheme') ? prop : '--' + prop;
        document.documentElement.style.setProperty(property, value);
    }

    /**
     * Change Hero Section CSS
     * @param {array} colors - [this.light] or [this.dark]
     */
    setHeroColors(colors) {
        this.setStyleProperty('color-hero-text',  colors['color-hero-text']);
        this.setStyleProperty('shadow-hero-link', colors['shadow-hero-link']);
        this.setStyleProperty('glow-hero-link',   colors['glow-hero-link']);
    }

    /**
     * Change Light/Dark Mode
     * @param {object} colors - [this.light] or [this.dark]
     */
    changeMode(colors) {
        for (let index in colors) {
            if ((index !== 'color-hero-text') && (index !== 'shadow-hero-link')) {
                this.setStyleProperty(index, colors[index]);
            }
        }
    }

    /**
     * Save Settings in LocalStorage
     */
    save() {
        this.storage.setItem('port_settings', JSON.stringify({
            accent : this.accent,
            theme  : this.theme,
            hero   : this.hero
        }));
        this.restore.style.display = 'inline-block';
    }
}

export default Theme;