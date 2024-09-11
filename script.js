document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const uploadInput = document.querySelector('#upload');
    const processButton = document.querySelector('#process');
    const resultDiv = document.querySelector('#result');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    function handleScroll(event) {
        if (event.deltaY > 0) {
            // Scrolling down
            const newIndex = (currentSlide + 1) % slides.length;
            showSlide(newIndex);
        } else {
            // Scrolling up
            const newIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(newIndex);
        }
    }

    document.querySelector('.slider').addEventListener('wheel', handleScroll);

    processButton.addEventListener('click', () => {
        if (uploadInput.files.length === 0) {
            alert('Vui lòng chọn một ảnh.');
            return;
        }

        const file = uploadInput.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = 'auto';

            resultDiv.innerHTML = ''; // Xóa nội dung trước đó
            resultDiv.appendChild(imgElement);
            // Thực hiện tính toán NVIDI tại đây
            // Đây là nơi bạn sẽ thêm mã xử lý ảnh
        };

        reader.readAsDataURL(file);
    });

    // Initially show the first slide
    showSlide(0);
});
