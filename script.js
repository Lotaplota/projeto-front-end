// Arquivo de JavaScript do projeto front-end

// Demora um tempo considerável para explicar esse código, então duas opções: ou você lê o código e tenta entender, ou você pesquisa como ele funciona =) --Cayo.
document.querySelectorAll('.slider-nav button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-slide'));
        const slider = document.querySelector('.slider-carrossel');
        if (slider && slider.children.length > 0) {
            const slideWidth = slider.children[0].clientWidth;
            slider.scrollTo({
                left: slideWidth * idx,
                behavior: 'smooth'
            });
            document.querySelectorAll('.slider-nav button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    });
});

// Placeholder do cabeçalho
fetch('header.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById("header-placeholder").innerHTML = data;
                });

// Placeholder do rodapé
fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
        });