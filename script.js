// منع النقر بزر الفأرة الأيمن
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        alert('تم تعطيل هذه الاختصارات لأسباب أمنية.');
    }
});

// تحذير عند فتح أدوات المطور
const element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        alert('تم اكتشاف فتح أدوات المطور! الرجاء إغلاقها.');
    }
});
console.log(element);

// إظهار القائمة المنسدلة
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'grid' : 'none';
}


(function () {
        let devtoolsOpen = false;

        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                devtoolsOpen = true;
                throw new Error("DevTools detected!");
            }
        });

        setInterval(function () {
            devtoolsOpen = false;
            console.log(element);
            if (devtoolsOpen) {
                document.body.innerHTML = ''; // حذف محتوى الصفحة
                alert('تم اكتشاف أدوات المطور! سيتم الآن حذف الصفحة.');
            }
        }, 1000);
    })();
