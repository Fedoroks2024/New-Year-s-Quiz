document.addEventListener('DOMContentLoaded', function() {
    const totalScoreElement = document.getElementById('total-score');
    const resetScoreButton = document.getElementById('reset-score');

    function loadTotalScore() {
        const totalScore = localStorage.getItem('totalScore') || '0';
        totalScoreElement.textContent = totalScore;
    }

    loadTotalScore();

    resetScoreButton.addEventListener('click', function() {
        localStorage.setItem('totalScore', '0');
        loadTotalScore();
    });
});