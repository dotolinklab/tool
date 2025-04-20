// 페이지 기능
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 이벤트로 카드 애니메이션 처리
    const cards = document.querySelectorAll('.card');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }
    
    // 초기 스타일 설정
    cards.forEach(card => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', checkScroll);
    
    // 페이지 로드 시에도 체크
    checkScroll();
    
    // 네비게이션 스크롤 애니메이션
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 90,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.open(this.href, '_blank');
            }
        });
    });
}); 