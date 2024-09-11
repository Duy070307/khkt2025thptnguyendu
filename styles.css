document.addEventListener('DOMContentLoaded', () => {
    const toolsSection = document.querySelector('#tools');
    const uploadInput = document.querySelector('#upload');
    const processButton = document.querySelector('#process');
    const resultDiv = document.querySelector('#result');

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
});
