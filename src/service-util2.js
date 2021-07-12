//------ lib.js ------
const callback = function (entries) {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            //  entry.target.classList.add("animate-fadeIn");
            // sleep(2000)
            //  entry.target.classList.add("animate-wiggle");
            // entry.target.classList.add("animate__fadeIn");
            // Add the fadeIn class:
            // entry.target.classList.add("motion-safe:animate-fadeIn");
            entry.target.classList.remove(...entry.target.getAttribute('data-class-out').split(' '))
            entry.target.classList.add(...entry.target.getAttribute('data-class-in').split(' '))


        } else {
            //entry.target.classList.remove("animate-fadeIn");
            // entry.target.classList.remove("animate-wiggle");
            //  entry.target.classList.add("animate__fadeOut");

            // Otherwise remove the fadein class
            // entry.target.classList.remove("motion-safe:animate-fadeIn");
            entry.target.classList.remove(...entry.target.getAttribute('data-class-in').split(' '))
            entry.target.classList.add(...entry.target.getAttribute('data-class-out').split(' '))

        }
    });
};
export class ServiceUtil2 {

    attached = () => {


        // A nice way to initialise default options
        this.options = Object.assign(this, {
            root: null, // relative to document viewport 
            rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
            threshold: 0.5 // visible amount of item shown in relation to root (higher values can cause problems)
        }, this.options);

        // this.observer = new IntersectionObserver(this.onChange, this.options);
        const observer = new IntersectionObserver(callback, this.options);
        const targets = document.querySelectorAll('[data-class-in], [data-class-out]');
        targets.forEach(target => observer.observe(target));
        return 'success'
    }

    // roundAccurately(number, decimalPlaces) {
    roundAccurately = (number, decimalPlaces) => {
        let rdnum = Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)
        console.log('roundAccurately', number, rdnum)
        return rdnum
    }
    sqrt() {
        Math.sqrt
    }

    // square(x) {
    square = (x) => {
        return x * x;
    }

    // diag(x, y) {
    diag = (x, y) => {
        //  console.log('x,y', x, y)
        // return this.sqrt(this.square(x) + this.square(y));
        return Math.sqrt(this.square(x) + this.square(y));

    }

    createThing(name) {
        function getName() {
            return name;
        }

        return Object.freeze({
            name,
            getName
        });
    }

}