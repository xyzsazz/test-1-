document.addEventListener("DOMContentLoaded", function() {
    // Typed.js for the Hero Section
    new Typed("#typed-hero", {
        strings: ["I'm a Science Student.", "I'm a Full-Stack Developer.", "I love coding and problem-solving.", "Let's build something amazing together!"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Typed.js for About Me Section
    new Typed("#typed-about", {
        strings: ["Hello! I’m Satkrit Kadriya, an 11th-grade science (physical) student at Trinity International College, located in the vibrant city of Kathmandu, Nepal. My journey began on February 23 at T.U. Hospital in Kathmandu, and since then, I've nurtured a deep passion for creativity and technology...", 
                  "I have always been drawn to the world of music. Singing and songwriting are my heart's true calling, and I find joy in expressing myself through melodies and lyrics. Alongside my love for music, I am also deeply fascinated by the world of technology. This led me to the exciting field of web development, where I can blend my creativity with code to build beautiful and functional websites....", 
                  "As a budding web developer, I’m continuously learning and honing my skills in HTML, CSS, JavaScript, and other web technologies. I believe in the power of the web to connect people and ideas, and I’m eager to contribute to this ever-evolving digital landscape....."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Typed.js for Work Section - Project 1
    new Typed("#typed-work1", {
        strings: ["Created and managed the Instagram account for my Discord community server 'Kantipur Nepal'...",
                  "Boosted engagement and interaction within the community through various events and giveaways."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Typed.js for Work Section - Project 2
    new Typed("#typed-work2", {
        strings: ["Developed a Futsal management system for player registrations, match schedules, and real-time scoring...",
                  "Implemented using the latest web technologies, making it robust and user-friendly."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Typed.js for Achievements Section
    new Typed("#typed-achievements", {
        strings: ["Successfully organized and hosted a PUBG tournament, streamed live on YouTube...",
                  "Increased Discord server engagement by 50% through a Netflix giveaway...",
                  "Managed multiple software projects from inception to deployment with high customer satisfaction."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Typed.js for Contact Section
    new Typed("#typed-contact", {
        strings: ["If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn..."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});
