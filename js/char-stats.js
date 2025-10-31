// Character Stats Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize stat bars with animation
    initializeStatBars();

    // Load character data (can come from HTML data attributes or external source)
    loadCharacterData();
});

// Get character name from URL or HTML structure
function getCharacterNameFromUrl() {
    // Extract character name from URL path (assuming format like chars/fideo.html)
    const pathSegments = window.location.pathname.split('/');
    const filename = pathSegments[pathSegments.length - 1];
    return filename.replace('.html', '');
}

function initializeStatBars() {
    const statBars = document.querySelectorAll('.stat-bar-fill');

    // Add animation class to each bar with staggered delays
    statBars.forEach((bar, index) => {
        const value = parseInt(bar.dataset.value) || 0;

        // Set the target width via CSS custom property
        bar.style.setProperty('--fill-width', `${value}%`);

        // Add animation class after a small delay
        setTimeout(() => {
            bar.classList.add('animate');
        }, 100 + (index * 200)); // Add delay between animations
    });
}

function loadCharacterData() {
    // Try to get character name from URL
    const characterName = getCharacterNameFromUrl();

    // If we have a specific character and character data is available
    if (characterName && window.CharacterData) {
        const characterInfo = window.CharacterData.getCharacterData(characterName);

        if (characterInfo) {
            updateCharacterStats(characterInfo);
            console.log(`Character data loaded for: ${characterName}`);
            return;
        }
    }

    // Fallback: use data from HTML or keep defaults
    console.log('Using default character data or HTML values');
}

function updateCharacterStats(stats) {
    /**
     * Updates all character stats dynamically
     * @param {Object} stats - Object containing stat values and character info
     * Example usage:
     * updateCharacterStats({
     *   name: "Aragorn",
     *   age: "87",
     *   type: "Rey de Gondor",
     *   description: "Héroe legendario...",
     *   stats: {
     *     strength: 85,
     *     skill: 90,
     *     dexterity: 80,
     *     creativity: 70,
     *     agility: 75
     *   }
     * });
     */

    // Update character info
    if (stats.name) {
        document.getElementById('character-name').textContent = stats.name;
    }
    if (stats.age) {
        document.getElementById('character-age').textContent = stats.age;
    }
    if (stats.type) {
        document.getElementById('character-type').textContent = stats.type;
    }
    if (stats.description) {
        document.getElementById('character-desc').textContent = stats.description;
    }

    // Update stats with animation
    if (stats.stats) {
        updateStat('strength', stats.stats.strength || 0);
        updateStat('skill', stats.stats.skill || 0);
        updateStat('dexterity', stats.stats.dexterity || 0);
        updateStat('creativity', stats.stats.creativity || 0);
        updateStat('agility', stats.stats.agility || 0);
    }
}

function updateStat(statName, value) {
    // Validate input
    if (typeof value !== 'number' || value < 0 || value > 100) {
        console.warn(`Invalid stat value for ${statName}: ${value}. Must be a number between 0-100.`);
        return;
    }

    const barElement = document.getElementById(`${statName}-bar`);
    const valueElement = document.getElementById(`${statName}-value`);

    if (barElement && valueElement) {
        // Remove existing animation class
        barElement.classList.remove('animate');

        // Update the data attribute
        barElement.dataset.value = value;

        // Update the display value
        valueElement.textContent = value;

        // Force reflow to restart animation
        barElement.offsetHeight;

        // Set new width and re-add animation
        barElement.style.setProperty('--fill-width', `${value}%`);
        barElement.classList.add('animate');
    }
}

// Utility function to set random stats (for testing/demo purposes)
function randomizeStats() {
    const randomStats = {
        strength: Math.floor(Math.random() * 101),
        skill: Math.floor(Math.random() * 101),
        dexterity: Math.floor(Math.random() * 101),
        creativity: Math.floor(Math.random() * 101),
        agility: Math.floor(Math.random() * 101)
    };

    // Update all stats at once
    updateStat('strength', randomStats.strength);
    updateStat('skill', randomStats.skill);
    updateStat('dexterity', randomStats.dexterity);
    updateStat('creativity', randomStats.creativity);
    updateStat('agility', randomStats.agility);

    console.log('Stats randomized:', randomStats);
}

// Export functions for global use (if needed)
window.CharStatsPage = {
    updateCharacterStats,
    updateStat,
    randomizeStats
};