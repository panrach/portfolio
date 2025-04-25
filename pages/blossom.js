export function initializeBlossomAnimation(){   
    // Cherry blossom animation
    // code from https://codepen.io/rudtjd2548/pen/qBpVzxP
    const blossomToggle = document.getElementById("blossom-toggle");
    const canvas = document.getElementById("blossom_canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const TOTAL = 100;
    let petalArray = [];
    let animationFrameId;
    let isBlossomActive = false;

    const petalImg = new Image();
    petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";
    petalImg.addEventListener("load", () => {
        for (let i = 0; i < TOTAL; i++) {
            petalArray.push(new Petal());
        }
    });

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        petalArray.forEach((petal) => petal.animate());
        animationFrameId = window.requestAnimationFrame(render);
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Petal {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height * 2 - canvas.height;
            this.w = 25 + Math.random() * 15;
            this.h = 20 + Math.random() * 10;
            this.opacity = this.w / 40;
            this.flip = Math.random();

            this.xSpeed = 0.5 + Math.random() * 1; // Set horizontal speed
            this.ySpeed = 0.5 + Math.random() * 1; // Set vertical speed
            this.flipSpeed = Math.random() * 0.03;
        }

        draw() {
            if (this.y > canvas.height || this.x > canvas.width) {
                this.x = -petalImg.width;
                this.y = Math.random() * canvas.height * 2 - canvas.height;
                this.xSpeed = 0.5 + Math.random() * 1; // Reset horizontal speed
                this.ySpeed = 0.5 + Math.random() * 1; // Reset vertical speed
                this.flip = Math.random();
            }
            ctx.globalAlpha = this.opacity;
            ctx.drawImage(
                petalImg,
                this.x,
                this.y,
                this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
                this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
            );
        }

        animate() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            this.flip += this.flipSpeed;
            this.draw();
        }
    }

    blossomToggle.addEventListener("click", () => {
        isBlossomActive = !isBlossomActive;
        blossomToggle.classList.toggle("active", isBlossomActive);
        if (isBlossomActive) {
            canvas.style.display = "block";
            petalArray = []; // Reset the petal array
            for (let i = 0; i < TOTAL; i++) {
                petalArray.push(new Petal());
            }
            if (!animationFrameId) {
                render();
            }
        } else {
            canvas.style.display = "none";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            window.cancelAnimationFrame(animationFrameId); // Stop the animation
            animationFrameId = null; // Reset the animation frame ID
            petalArray = []; // Clear the petal array
        }
    });
}