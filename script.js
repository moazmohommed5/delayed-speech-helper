// الحصول على العناصر
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// التحقق مما إذا كان وضعية الدارك مود مفعل
const isDarkMode = localStorage.getItem('dark-mode') === 'true';

// تعيين الوضعية عند تحميل الصفحة
if (isDarkMode) {
    body.classList.add('dark-mode');
}

// إضافة حدث النقر على الزر
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // حفظ الحالة في التخزين المحلي
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkModeEnabled);
});
