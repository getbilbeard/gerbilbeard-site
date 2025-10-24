// GerbilBeard Games JavaScript

document.addEventListener('DOMContentLoaded', function() {
  console.log('GerbilBeard Games site loaded!');
  
  // Add any interactive functionality here
});

// Example function for future use
function initializeGames() {
  // Game initialization code will go here
}

// Planet Tapper game functionality
document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.querySelector('.play-button');
  const learnMoreButton = document.querySelector('.learn-more-button');
  
  if (playButton) {
    playButton.addEventListener('click', function() {
      // For now, show an alert. Replace with actual game launch logic
      alert('Planet Tapper will launch soon! Stay tuned for the full gaming experience.');
    });
  }
  
  if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function() {
      // Scroll to show more details or redirect to game page
      alert('More details about Planet Tapper coming soon! Follow our development journey.');
    });
  }
});