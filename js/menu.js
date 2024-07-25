function orderNow() {
    alert('Order placed!');
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card-container");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Hide all cards
            cards.forEach((card) => {
                card.classList.remove("active");
            });

            // Show cards of the selected category
            document.querySelectorAll(`[data-category="${category}"]`).forEach((card) => {
                card.classList.add("active");
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animations
    gsap.from(".text-content h2", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        scrub: 1,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: "container",
            start: "2000vw top",
            end: "2200vw top",
            markers: true
        }
    });

    gsap.from(".text-content p", {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        scrub: 1,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".text-content p",
            start: "2000vw top",
            end: "2200vw top"
        }
    });

    gsap.from(".btn", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 1,
        scrub: 1,
        scrollTrigger: {
            trigger: ".container",
            start: "2000vw top",
            end: "2200vw top"
        }
    });

    gsap.from(".food-image", {
        scrollTrigger: {
            trigger: ".container",
            start: "2000vw top",
            end: "2200vw top",
            scrub: 1
        },
        scale: 0.4,
        opacity: 0,
        duration: 1.5
    });

    gsap.from('.content h1, .content h2', {
        scrollTrigger: {
            trigger: ".container",
            start: "2050vw top",
            end: "2250vw top",
            scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1.5
    });

    gsap.from('.image-container img', {
        scrollTrigger: {
            trigger: ".container",
            start: "2050vw top",
            end: "2250vw top",
            scrub: 1
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.5
    });

    // Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
    
    // Loading screen
    const Video = document.querySelector('.loadingscreen video');
    const navbar = document.querySelector('.navbar');
    const maincontent = document.querySelector('.maincontent');
    const loadingscreen = document.querySelector('.loadingscreen');
    const footer = document.querySelector('.footer-content');

    Video.play();

    setTimeout(function() {
        loadingscreen.style.display = 'none';
        maincontent.style.display = 'block';
        navbar.style.display = 'flex';
        footer.style.display = 'flex';
        loadingscreen.style.opacity = '1';

        console.log("Navbar display after loading screen:", navbar.style.display); // Debug line
        console.log("Main content display after loading screen:", maincontent.style.display); // Debug line
    }, 8000);

    if (navbar.style.display === 'none') {
        navbar.style.display = 'flex';
        loadingscreen.style.opacity = 0;
        loadingscreen.style.transform = 'scaleX(0.7) scaleY(0.2)';
        Video.play();
    } else {
        navbar.style.display = 'none';
        loadingscreen.style.opacity = 1;
        loadingscreen.style.transform = 'scaleX(1) scaleY(1)';
        loadingscreen.style.borderRadius = 0;
        Video.play();
    }

    if (maincontent.style.display === 'none') {
        maincontent.style.display = 'block';
        loadingscreen.style.opacity = 0;
        loadingscreen.style.transform = 'scaleX(0.7) scaleY(0.2)';
        Video.load();
    } else {
        maincontent.style.display = 'none';
        loadingscreen.style.opacity = 1;
        loadingscreen.style.transform = 'scaleX(1) scaleY(1)';
    }

    // Sidebar
    const sidebar = document.querySelector(".sidebar");
    const closeicon = document.querySelector('.closeicon');
    const menuicon = document.querySelector('.menuicon');

    menuicon.addEventListener("click", () => {
        sidebar.style.transform = 'translateX(0)';
        sidebar.style.opacity = 1;
    });

    closeicon.addEventListener("click", () => {
        sidebar.style.transform = 'translateX(100%)';
        sidebar.style.opacity = 0;
    });

    // Counter Animation
    gsap.from(".stat", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 5
    });

    const counters = document.querySelectorAll(".number");
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Footer Animation
    let footerElem = document.querySelector('.footer');
    let options = {
        root: null,
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(entry.target, {
                    opacity: 0,
                    y: 50
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power1.out'
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(footerElem);

    gsap.to('.footer', {
        duration: 2,
        backgroundColor: '#CC9725',
        repeat: -1,
        yoyo: true
    });
});
