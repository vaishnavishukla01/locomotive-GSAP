(function () {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        // for tablet smooth
        tablet: { smooth: true },
        // for mobile
        smartphone: { smooth: true },
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
})();

gsap.from(".page2 .box", {
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page2",
        start: "top 30%",
        end: "top 0%",
        scrub: 1,
        markers: true,
    },
});