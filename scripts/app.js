// GerbilBeard Games JavaScript

document.addEventListener('DOMContentLoaded', function() {
  console.log('GerbilBeard Games site loaded!');
  
  // Add any interactive functionality here
});

// Example function for future use
function initializeGames() {
  // Game initialization code will go here
}

// Game action buttons on the video games page
document.addEventListener('DOMContentLoaded', function() {
  const actionButtons = document.querySelectorAll('button[data-game][data-action]');

  actionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const game = button.dataset.game;
      const action = button.dataset.action;

      if (game === 'planet-tapper' && action === 'play') {
        alert('Planet Tapper will launch soon! Stay tuned for the full gaming experience.');
      }

      if (game === 'planet-tapper' && action === 'learn-more') {
        alert('More details about Planet Tapper coming soon! Follow our development journey.');
      }

      if (game === 'noise-timer' && action === 'play') {
        alert('Noise Timer is still in development. Launch details are coming soon.');
      }

      if (game === 'noise-timer' && action === 'learn-more') {
        alert('Classroom tips and setup guidance for Noise Timer are coming soon.');
      }
    });
  });
});
