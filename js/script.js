document.addEventListener("DOMContentLoaded", function() {
    
    gsap.registerPlugin(ScrollTrigger);

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
});

// script.js
// document.addEventListener("DOMContentLoaded", function() {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from(".text-content h2", {
//       duration: 1.5,
//       y: -50,
//       opacity: 0,
//       ease: "bounce.out",
//       scrollTrigger: {
//         trigger: "container",
//         start: "top 80%",
//         end: "bottom 60%",
//         // toggleActions: "play none none none"
//         markers:true
//       },
//   });

//   gsap.to(".text-content p", {
//       duration: 1,
//       y: 50,
//       opacity: 0,
//       delay: 0.5,
//       ease: "power1.out",
//       scrollTrigger: {
//           trigger: ".text-content p",
//           start: "80vw 20%",
//           end: "bottom 60%",
//           // toggleActions: "play none none none"
//       }
//   });

//   gsap.from(".btn", {
//       duration: 1,
//       scale: 0.8,
//       opacity: 0,
//       delay: 1,
//       scrollTrigger: {
//           trigger: ".container",
//           start: "top top",
//           end: "bottom 60%",
//           // toggleActions: "play none none none"
//       }
//   });

//   gsap.from(".food-image", {
//       duration: 1.5,
//       x: 100,
//       opacity: 0,
//       delay: 1.5,
//       ease: "power1.out",
//       scrollTrigger: {
//           trigger: ".container",
//           start: "top 80%",
//           end: "bottom 60%",
//           // toggleActions: "play none none none"
//       }
//   });
// });


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
        Video.play();
    }
    else{
        navbar.style.display='none';
        loadingscreen.style.opacity=1;
        loadingscreen.style.transform='scaleX(1) scaleY(1)';
        loadingscreen.style.borderRadius=0;
        Video.play();
    }
    if( maincontent.style.display=='none'){
        maincontent.style.display = 'block';
        loadingscreen.style.opacity=0;
        loadingscreen.style.transform='scaleX(0.7) scaleY(0.2)';
        Video.load();
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

document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".stat", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay:5
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
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    let footer = document.querySelector('.footer');
    let options = {
        root: null,
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(".footer-logo img", { opacity: 0, y: 20 }, { duration: 1, opacity: 1, y: 0 });
                gsap.fromTo(".footer-links a", { opacity: 0, y: 20 }, { duration: 1, opacity: 1, y: 0, stagger: 0.1 });
                gsap.fromTo(".footer-social a", { opacity: 0, x: -20 }, { duration: 1, opacity: 1, x: 0, stagger: 0.1 });
                observer.disconnect();
            }
        });
    }, options);

    observer.observe(footer);
});

if (window.screen.width <= "600"){
  gsap.registerPlugin(ScrollTrigger);

   gsap.from(".text-content h2", {
     duration: 1.5,
     y: -20,
     opacity: 0,
     scrub: 1,
     ease: "bounce.out",
     scrollTrigger: {
       trigger: "container",
       start: "800vw top",
       end: "1800vw top",
       // toggleActions: "play none none none"
     },
 });

 gsap.from(".text-content p", {
     duration: 1,
     y: 20,
     opacity: 0,
     delay: 0.5,
     scrub: 1,
     ease: "power1.out",
     scrollTrigger: {
         trigger: ".text-content p",
         start: "900vw top",
         end: "1500vw top",
         // toggleActions: "play none none none"
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
         start: "1000vw top",
         end: "1500vw top",
         // toggleActions: "play none none none"
     }
 });

 gsap.from(".food-image", {
   scrollTrigger: {
     trigger: ".container",
     start: "1100vw top",
       end: "1500vw top",
       scrub: 1,
   },
   scale: 0.4,
   opacity: 0,
   duration: 1.5,
 });


gsap.from('.content h1, .content h2', {
 scrollTrigger: {
   trigger: ".container",
   start: "1200vw top",
   end: "1600vw top",
     scrub: 1,
 },
 y: 50,
 opacity: 0,
 duration: 1.5,
});

gsap.from('.image-container img', {
 scrollTrigger: {
   trigger: ".container",
   start: "1300vw top",
   end: "1600vw top",
     scrub: 1,
 },
 scale: 0.5,
 opacity: 0,
 duration: 1.5,
});

}

// if(window.screen.width <= "601px" && window.screen.window>="1024px"){
 
// }
if(window.screen.width >= "1025"){

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
     // toggleActions: "play none none none"
   },
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
       end: "2200vw top",
       // toggleActions: "play none none none"
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
       end: "2200vw top",
       // toggleActions: "play none none none"
   }
});

gsap.from(".food-image", {
 scrollTrigger: {
   trigger: ".container",
     start: "2000vw top",
         end: "2200vw top",
     scrub: 1,
 },
 scale: 0.4,
 opacity: 0,
 duration: 1.5,
});


gsap.from('.content h1, .content h2', {
scrollTrigger: {
 trigger: ".container",
   start: "2050vw top",
       end: "2250vw top",
   scrub: 1,
},
y: 50,
opacity: 0,
duration: 1.5,
});

gsap.from('.image-container img', {
scrollTrigger: {
 trigger: ".container",
   start: "2050vw top",
       end: "2250vw top",
   scrub: 1,
},
scale: 0.5,
opacity: 0,
duration: 1.5,
});

}