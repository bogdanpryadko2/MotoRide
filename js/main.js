const container = document.getElementById('page-container');

async function loadPage(pageId) {
    try {
        const response = await fetch(`pages/${pageId}.html`);
        container.innerHTML = await response.text();
    } catch (error) {
        console.error('Ошибка загрузки страницы:', error);
        container.innerHTML = '<p>Ошибка загрузки страницы</p>';
    }
}

function switchPage(pageId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === pageId) {
            btn.classList.add('active');
        }
    });
    loadPage(pageId);
}

loadPage('home');

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchPage(btn.dataset.page);
    });
});