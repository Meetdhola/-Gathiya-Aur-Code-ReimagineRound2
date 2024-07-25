document.addEventListener("DOMContentLoaded",()=>{
    const Video = document.querySelector('.loadingscreen video')
    Video.play();

    const navbar = document.querySelector('.navbar')
    const maincontent = document.querySelector('.maincontent')
    const loadingscreen = document.querySelector('.loadingscreen')
    const footer = document.querySelector('.footer-content ')
    // loadingscreen.style.display = 'block';
    // maincontent.style.display ='none';
    // navbar.style.display='none';
    // loadingscreen.style.opacity='0'

    setTimeout(function() {
        loadingscreen.style.display = 'none';
        maincontent.style.display ='block';
        navbar.style.display='flex';
        footer.style.display='flex';
        loadingscreen.style.opacity='1'
    }, 8000);

    if(navbar.style.display=='none'){
        navbar.style.display = 'flex';
        loadingscreen.style.opacity=0;
        loadingscreen.style.transform='scaleX(0.7) scaleY(0.2)';
        // Video.play();
    }
    else{
        navbar.style.display='none';
        loadingscreen.style.opacity=1;
        loadingscreen.style.transform='scaleX(1) scaleY(1)';
        loadingscreen.style.borderRadius=0;
        // Video.play();
    }
    if( maincontent.style.display=='none'){
        maincontent.style.display = 'block';
        loadingscreen.style.opacity=0;
        loadingscreen.style.transform='scaleX(0.7) scaleY(0.2)';
        // Video.load();
    }
    else{
        maincontent.style.display='none';
        loadingscreen.style.opacity=1;
        loadingscreen.style.transform='scaleX(1) scaleY(1)';
    }
})


function showsidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';

    const closeicon = document.querySelector('.closeicon');

    closeicon.addEventListener("click", () => {
        sidebar.style.transform = 'translateX(100%)';
        sidebar.style.opacity = 0;
        // menuicon.style.display = 'none';
    })
    // menuicon.style.display = 'block';
    const menuicon = document.querySelector('.menuicon');

    menuicon.addEventListener("click", () => {
        sidebar.style.transform = 'translateX(-1%)';
        sidebar.style.opacity = 1;
        // closeicon.style.display = 'none';
    })

}
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menuicon');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('.closeicon');

    // Show the sidebar
    menuIcon.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    // Hide the sidebar
    closeIcon.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Optionally hide sidebar if user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});