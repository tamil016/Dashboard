(function() {
    var sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        document.documentElement.classList.add('sidebar-collapsed');
    }
    
    var currentPage = window.location.pathname.split("/").pop();
    document.addEventListener('DOMContentLoaded', function() {
        var navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            if (link.getAttribute('href') === './' + currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const mainContent = document.getElementById('main-content');

    function toggleSidebar() {
        html.classList.toggle('sidebar-collapsed');
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebarCollapsed', html.classList.contains('sidebar-collapsed'));
    }

    toggleButton.addEventListener('click', toggleSidebar);

    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        html.classList.add('sidebar-collapsed');
        sidebar.classList.add('collapsed');
    }
});