
    /* ********* TYPING EFFECT ******** */
    let typingEffect = new Typed(".typing", {
        strings: ["FrontEnd Developer", "Web Designer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });


    /* ********** SCROLL REVEAL ANIMATION ************ */
    const srTop = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 1000,
        reset: true
    })

    /* *********** HOME ************ */
    srTop.reveal('.featured-name', { delay: 100 })
    srTop.reveal('.featured-text-info', { delay: 200 })
    srTop.reveal('.featured-text-btn', { delay: 200 })
    srTop.reveal('.social_icons', { delay: 200 })
    srTop.reveal('.featured-image', { delay: 300 })


    /* -- PROJECT BOX -- */
    srTop.reveal('.project-box', { interval: 200 })

    /* -- HEADINGS -- */
    srTop.reveal('.top-header', {})

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

    /* -- ABOUT INFO & CONTACT INFO -- */
    const srLeft = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    srLeft.reveal('.about-info', { delay: 100 })
    srLeft.reveal('.contact-info', { delay: 100 })
    srLeft.reveal('.sideBox', { delay: 100 })

    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    srRight.reveal('.skills-box', { delay: 100 })
    srRight.reveal('.form-control', { delay: 100 })

