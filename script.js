// 배너 슬라이더 기능
document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 요소들
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // 슬라이더 자동 전환 타이머
    let slideInterval = setInterval(nextSlide, 5000);
    
    // 다음 슬라이드로 이동하는 함수
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // 특정 슬라이드로 이동하는 함수
    function goToSlide(slideIndex) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = slideIndex;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // 타이머 재설정
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // 도트 클릭 이벤트 리스너
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
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