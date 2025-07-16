// Данные карточек (можно заменить на свои)
const cardsData = [
    { front: "Take off", back: "Взлетать/снимать одежду" },
    { front: "Break down", back: "Ломаться/расстраиваться" },
    { front: "E=mc²", back: "Формула энергии (Эйнштейн)" },
    { front: "Теорема Пифагора", back: "a² + b² = c²" },
    { front: "Photosynthesis", back: "Фотосинтез" },
    { front: "Закон Ома", back: "I = U/R" }
];

// Создание карточек
function createCards() {
    const container = document.getElementById('cards-container');
    
    cardsData.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.id = `card-${index}`;
        
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span>${card.front}</span>
                </div>
                <div class="card-back">
                    <span>${card.back}</span>
                </div>
            </div>
        `;
        
        cardElement.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        container.appendChild(cardElement);
    });
}

// Инициализация VK Mini App
document.addEventListener('DOMContentLoaded', function() {
    if (typeof vkBridge !== 'undefined') {
        vkBridge.send('VKWebAppInit');
    }
    createCards();
});