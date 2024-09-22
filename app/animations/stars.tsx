import React, { useEffect } from "react";

const Stars: React.FC = () => {
  useEffect(() => {
    const CONFIG = {
      count: 80,
      speed: 1,
      sizes: {
        big: 3,
        medium: 2,
        small: 1,
      },
      chances: {
        big: 0.2,
        medium: 0.4,
        small: 0.4,
      },
      starSideHeightMultiplier: 3,
    };

    const colors = ["#9E7AFF", "#FE8BBB", "#FFBD7A", "#FFBD7A"];
    const getRandomColor = () =>
      colors[Math.floor(Math.random() * colors.length)];

    const getRandomSize = () => {
      const random = Math.random();

      if (random < CONFIG.chances.small) return "small";
      if (random < CONFIG.chances.small + CONFIG.chances.medium)
        return "medium";

      return "big";
    };

    class Star {
      x = 0;
      y = 0;
      speed = 0;
      size = "big" as "big" | "medium" | "small";
      color = "";

      constructor(canvas: HTMLCanvasElement) {
        this.size = getRandomSize();
        this.color = getRandomColor();
        this.resetPosition(canvas);
      }

      resetPosition(canvas: HTMLCanvasElement) {
        this.speed = Math.random() * CONFIG.speed + CONFIG.speed;
        this.x = Math.random() * canvas.offsetWidth;
        this.y = canvas.offsetHeight * 2 * Math.random();
      }
    }

    function drawStar({
      context,
      x,
      y,
      size,
      color,
    }: {
      x: number;
      y: number;
      size: "big" | "medium" | "small";
      color: string;
      context: CanvasRenderingContext2D;
    }) {
      context.beginPath();
      context.moveTo(x, y);

      const sideHalf = CONFIG.sizes[size];
      const sideWidth = sideHalf * 2;
      const sideHeight = sideHalf * CONFIG.starSideHeightMultiplier;

      const lineTo = (_x: number, _y: number = 0) =>
        context.lineTo(x + _x, y + _y);

      // top triangle
      lineTo(sideHalf, -sideHeight);
      lineTo(sideWidth);

      // right triangle
      lineTo(sideWidth + sideHeight, sideHalf);
      lineTo(sideWidth, sideWidth);

      // bottom triangle
      lineTo(sideHalf, sideWidth + sideHeight);
      lineTo(0, sideWidth);

      // left triangle
      lineTo(-sideHeight, sideHalf);
      lineTo(0, 0);

      context.closePath();
      context.fillStyle = color;
      context.fill();
    }

    const scaleCanvasForRetina = (
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D
    ) => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth * pixelRatio;
      const height = canvas.offsetHeight * pixelRatio;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        context.scale(pixelRatio, pixelRatio);
      }
    };

    const startAnimation = (canvas: HTMLCanvasElement) => {
      const context = canvas.getContext("2d")!;
      const stars = Array.from(
        { length: CONFIG.count },
        () => new Star(canvas)
      );

      const animate = () => {
        scaleCanvasForRetina(canvas, context);

        context.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          star.y -= star.speed;
          if (star.y < canvas.offsetHeight * -0.2) {
            star.y = canvas.offsetHeight + canvas.offsetHeight * Math.random();
            star.x = Math.random() * canvas.offsetWidth;
          }
          drawStar({
            context,
            ...star,
          });
        });
        requestAnimationFrame(animate);
      };

      animate();
    };

    const canvas = document.getElementById("stars") as HTMLCanvasElement;

    if (canvas) startAnimation(canvas);
  }, []);

  return (
    <canvas
      className="absolute w-full h-[102vh] z-0 bg-background"
      id="stars"
    />
  );
};

export default Stars;
