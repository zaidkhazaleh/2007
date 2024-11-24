<script>
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});

const element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        alert('تم اكتشاف فتح أدوات المطور! الرجاء إغلاقها.');
    }
});
console.log(element);

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'grid' : 'none';
}

</script>
