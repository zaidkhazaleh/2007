<style>
        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
</style>

<script type="b81a6cfa38b02a37c10b5445-text/javascript">
        // منع النقر بزر الفأرة الأيمن
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
 
        // منع اختصارات لوحة المفاتيح
        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') ||
                (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && event.key === 'U')) {
                event.preventDefault();
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
    </script>
</head>
