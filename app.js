const texts = gsap.utils.toArray('.text'),
      preloadBox = gsap.utils.toArray('.preload-box'),
      blocks = gsap.utils.toArray('.blocks');

const preloadTL = gsap.timeline();

let screenSize = gsap.matchMedia();


//For Mobile Screens
screenSize.add("(max-width: 768px)", () => {
   preloadTL.to('.pickt-overlay', {display:'none', duration:.2})
            .from('.pickt .char', {y:100, duration:.8, delay:1, ease: "power2.out", stagger: {
              amount:.3,
          }}, '<')
           .to('.pickt .char', {y:0})
           .to('.pickt .char', {y:-100, duration:.8, delay:1, ease: "power2.out", stagger: {
              amount:.3,
          }})
           .to('.pickt-wrapper', {display:'none', duration:1, ease: "power2.out"}, '<')
           .from('.box-one', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.meet', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .from('.box-two', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.talk', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .from('.box-three', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.know', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .from('.box-four', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.thrive', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .to(texts, {y:-2000, opacity:0, duration:3.5, ease:"power2.out", stagger: {
              amount:0.3
           }}, '<.5')
           .to(preloadBox, {x:-2000, duration:5.7, ease:"power2.out", stagger: {
              amount:0.3
           }}, '<.1')
           .to('.box-four', {minWidth:'100%', opacity:1, duration:2.5, ease:"power2.out"}, '<.2')
           .to(blocks, {height:'100%', duration:1, ease:"power2.out", stagger: {
              amount:0.2
           }}, '<.8')
           .from('.section-one', {display:'none'}, '<')
           .from('header', {y:-1000, duration:1, ease: 'power2.out'}, '<.8')
           .from('.text-box1 p', {opacity:0, rotate:-20, duration:1.5, transformOrigin:"bottom bottom", ease: "elastic.out(1, 0.75)"},'<')
           .from('.reveal', {opacity:0, y:30, duration:.7, ease:"power2.out", stagger: {
            amount:0.2
           }}, '<.7')
           .from('.section-two, .section-three', {opacity:0}, '<')
 });

//For Desktop Screens
screenSize.add("(min-width: 769px)", () => {
   preloadTL.to('.pickt-overlay', {display:'none', duration:.2})
            .from('.char', {y:100, duration:.8, delay:1, ease: "power2.out", stagger: {
              amount:.3,
          }})
           .to('.char', {y:0})
           .to('.char', {y:-100, duration:.8, delay:1, ease: "power2.out", stagger: {
              amount:.3,
          }})
           .to('.pickt-wrapper', {display:'none', duration:1, ease: "power2.out"}, '<')
           .from('.box-one', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.meet', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .from('.box-two', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.talk', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .from('.box-three', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.know', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .from('.box-four', {minWidth:0, duration:.7, ease: "power2.out"})
           .from('.thrive', {scale:0, y:200, duration:.7, ease: "power2.out"}, '<')
           .to(texts, {y:-2000, opacity:0, duration:5, ease:"power2.out", stagger: {
              amount:0.3
           }}, '<.5')
           .to(preloadBox, {x:-2000, duration:2.4, ease:"power2.out", stagger: {
              amount:0.3
           }}, '<.1')
           .to('.box-four', {minWidth:'100%', opacity:1, duration:2.5, ease:"power2.out"}, '<.2')
           .to(blocks, {height:'100%', duration:.8, ease:"power2.out", stagger: {
              amount:0.2
           }}, '<.85')
           .from('.section-one', {display:'none'}, '<')
           .from('header', {y:-1000, duration:1, ease: 'power2.out'}, '<.8')
           .from('.text-box1 p', {opacity:0, rotate:-20, duration:1.5, transformOrigin:"bottom bottom", ease: "elastic.out(1, 0.75)"},'<')
           .from('.circle', {y:100, scale:0, duration:1.8, ease: "elastic.out(1.5,0.75)"}, '<')
           .from('.reveal', {opacity:0, y:30, duration:.7, ease:"power2.out", stagger: {
            amount:0.2
           }}, '<.7')
           .from('.section-two, .section-three', {display:'none'}, '<')
 });


 const tlForMenu = gsap.timeline({paused:true, reversed:true});
 const menuBlocks = gsap.utils.toArray('.menu-blocks');

 tlForMenu.from('.menu', {height:'0%', duration:.8, ease:'power3.in'})
          .to('.menu-blocks', {y:0, duration:.8, ease:'power3.out', stagger: {
            amount:2.5
          }}, 1)
          .from('.menu-content', {autoAlpha:0})
          .from('.menu-links-box a, .btns-container button, .social-media a', {opacity:0, y:50, duration:.5, ease:'power2.out', stagger: {
            amount:0.2
          }}, '<')

 
 
 
 const menuBtn = document.querySelector('.menu-btn');

 menuBtn.addEventListener('click', () => {
   tlForMenu.reversed() ? tlForMenu.play() : tlForMenu.reverse();
})

gsap.registerPlugin(ScrollTrigger);


const cardText = new SplitType('.rectangle-shape p');

//ANIMATION FOR SECTION TWO
const leftTexts = gsap.utils.toArray('.left-text'),
      circleShape = gsap.utils.toArray('.circle-shape'),

sectionTwoTL = gsap.timeline({
   scrollTrigger: {
      trigger: '.section-two',
      start:'top center',
      end:`+=${document.querySelector('.section-two').offsetHeight}`,
      scrub:4
   }
});

sectionTwoTL.from(leftTexts, {scale:0, opacity:0, y:200, duration:3, ease:'power2.out', stagger: {
               amount:0.4
            }})
            .from(circleShape, {y:-100, x:1000, duration:4, ease:'power2.out', stagger: {
               amount:0.3
            }}, '<')
            .from('.line', {y:200, opacity:0, duration:3, ease:'power2.out', stagger: {
               amount:0.5
            }}, '<')


//SECTION THREE ANIMATION

sectionThreeTL = gsap.timeline({
   scrollTrigger: {
      trigger: '.section-three',
      start:'center center',
      end:`+=${document.querySelector('.section-three').offsetHeight}`,
      scrub:4
   }
});

sectionThreeTL.from('.leftText2', {scale:0, opacity:0, y:200, duration:3, ease:'power2.out', stagger: {
                  amount:0.4
               }})
               .from('.slider-content', {scale:0, y:-200, x:1000, transformOrigin:'center center', duration:6, ease:'power2.out', stagger: {
                  stagger:.7
               }})
