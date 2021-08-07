// chain together multiple animations in a timeline 
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// # we need to hide the textbox
// where do i want the animation to go to, grabbing the span 
// stagger is the time for each line of text 
// with tl they chain together
tl.to('.text', {y:'0%', duration: 1, stagger: 0.25 });
// move it back all the way to the top
tl.to('.slider', {y: "-100%", duration: 1, delay: 0.3})
// start a second faster 
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
// specify a starting and an ending point
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration:1}, '-=1');
