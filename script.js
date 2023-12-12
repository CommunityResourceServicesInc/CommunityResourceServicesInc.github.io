"use strict";
gsap.registerPlugin(MorphSVGPlugin);
const svg = document.querySelector('.like');
const blm = document.querySelector('.blm');
const hand1 = document.querySelector('.hand-1');
const hand2 = document.querySelector('.hand-2');
const hand3 = document.querySelector('.hand-3');
const filled = document.querySelector('.filled');
const stroke = document.querySelector('.stroke');
let liked = false;
const toggle = () => {
    if (liked) {
        gsap.set(blm, { opacity: 0 });
        gsap.fromTo(stroke, { opacity: 0 }, { opacity: 1, duration: 0.2 });
        gsap.to(filled, { opacity: 0, duration: 0.2 });
    }
    else {
        gsap.set(blm, { scale: 0.1, opacity: 1, svgOrigin: '50 50' });
        gsap.set(stroke, { opacity: 0 });
        gsap.set([hand1, hand2, hand3], { svgOrigin: '50 50', translateX: 0, translateY: 0 });
        gsap.set(filled, { scale: 0, svgOrigin: '50 50' });
        gsap.to(blm, { duration: 0.2 });
        gsap.to(hand2, { delay: 0.15, duration: 0.23, translateX: -50, translateY: -50, ease: 'sine.inOut' });
        gsap.to(hand3, { delay: 0.15, duration: 0.23, translateX: 50, translateY: -50, ease: 'sine.inOut' });
        gsap.to(hand1, { delay: 0.15, duration: 0.23, translateY: 45, ease: 'sine.inOut' });
        gsap.to(blm, { duration: 0.2, delay: 0.2 });
        gsap.to(blm, { scale: 0.6, duration: 0.45, ease: 'back.out(3)' });
        gsap.to(blm, { scale: 0.1, duration: 0.22, delay: 0.45, ease: 'sine.in' });
        gsap.set(filled, { opacity: 1, delay: 0.6 });
        gsap.to(filled, { scale: 1, duration: 0.6, delay: 0.4, ease: 'back.out(2)' });
    }
    svg.style.pointerEvents = 'none';
    setTimeout(() => { svg.style.pointerEvents = ''; }, liked ? 200 : 700);
    liked = !liked;
};
svg.addEventListener('click', toggle);
toggle();