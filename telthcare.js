(() => {
    var sidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true"
    if (sidebarCollapsed) {
        document.documentElement.classList.add("sidebar-collapsed")
    }

    var currentPage = window.location.pathname.split("/").pop()
    document.addEventListener("DOMContentLoaded", () => {
        var navLinks = document.querySelectorAll(".nav-link")
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === "./" + currentPage) {
                link.classList.add("active")
            } else {
                link.classList.remove("active")
            }
        })
    })
})()

document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement
    const sidebar = document.getElementById("sidebar")
    const toggleButtonLeft = document.getElementById("toggleButtonLeft")
    const toggleButtonRight = document.getElementById("toggleButtonRight")
    const mainContent = document.getElementById("main-content")

    function toggleSidebar() {
        html.classList.toggle("sidebar-collapsed")
        sidebar.classList.toggle("collapsed")
        localStorage.setItem("sidebarCollapsed", html.classList.contains("sidebar-collapsed"))

        updateArrowVisibility()
    }

    function updateArrowVisibility() {
        if (sidebar.classList.contains("collapsed")) {
            toggleButtonLeft.style.display = "none"
            toggleButtonRight.style.display = "block"
        } else {
            toggleButtonLeft.style.display = "block"
            toggleButtonRight.style.display = "none"
        }
    }

    toggleButtonLeft.addEventListener("click", toggleSidebar)
    toggleButtonRight.addEventListener("click", toggleSidebar)

    const sidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true"
    if (sidebarCollapsed) {
        html.classList.add("sidebar-collapsed")
        sidebar.classList.add("collapsed")
    }

    updateArrowVisibility()
})      