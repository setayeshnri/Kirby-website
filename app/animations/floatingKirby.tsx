import Image from "next/image";
import { useEffect, useRef } from "react";
import Zdog from "zdog";

import KirbyPic from "../../public/home/Kirby.png";
const FloatingKirby: React.FC = () => {
  const kirbyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sceneSize = 80;
    let isSpinning = true;
    const TAU = Zdog.TAU;

    const pink = "#F8B";
    const blush = "#F5A";
    const black = "#333";
    const shoe = "#D03";
    const red = "#E10";
    const yellow = "#FD0";

    const illo = new Zdog.Illustration({
      element: ".zdog-canvas",
      dragRotate: false,
      resize: "fullscreen",
      onDragStart: function () {
        isSpinning = false;
      },
      onResize: function (width, height) {
        this.zoom = Math.floor(Math.min(width, height) / sceneSize);
      },
    });

    const body = new Zdog.Shape({
      stroke: 22,
      translate: { y: 11 },
      rotate: { x: 0.3, z: 0.1 },
      addTo: illo,
      color: pink,
    });

    const face = new Zdog.Anchor({
      translate: { z: 10.5 },
      addTo: body,
    });

    [-1, 1].forEach(function (xSide) {
      const eyeGroup = new Zdog.Group({
        addTo: face,
        translate: { x: 2.4 * xSide, y: -2 },
        rotate: { x: -0.1 },
      });

      new Zdog.Ellipse({
        width: 1.4,
        height: 5.5,
        addTo: eyeGroup,
        stroke: 1,
        color: black,
        fill: true,
      });

      new Zdog.Ellipse({
        width: 1,
        height: 2,
        addTo: eyeGroup,
        translate: { y: -1.5, z: 0.5 },
        stroke: 0.5,
        color: "#FFF",
        fill: true,
      });

      const cheekHolder = new Zdog.Anchor({
        addTo: body,
        rotate: { y: 0.6 * xSide },
      });

      new Zdog.Ellipse({
        width: 2.5,
        height: 1,
        translate: { y: 1, z: 10.5 },
        addTo: cheekHolder,
        color: blush,
        stroke: 1,
      });
    });

    new Zdog.Shape({
      path: [
        { x: 0, y: 0 },
        {
          bezier: [
            { x: 1.1, y: 0 },
            { x: 1.1, y: 0.2 },
            { x: 1.1, y: 0.5 },
          ],
        },
        {
          bezier: [
            { x: 1.1, y: 1.1 },
            { x: 0.2, y: 1.8 },
            { x: 0, y: 1.8 },
          ],
        },
        {
          bezier: [
            { x: -0.2, y: 1.8 },
            { x: -1.1, y: 1.1 },
            { x: -1.1, y: 0.5 },
          ],
        },
        {
          bezier: [
            { x: -1.1, y: 0.2 },
            { x: -1.1, y: 0 },
            { x: 0, y: 0 },
          ],
        },
      ],
      addTo: face,
      translate: { y: 2, z: -0.5 },
      stroke: 1,
      color: shoe,
      fill: true,
    });

    const rightArm = new Zdog.Shape({
      path: [{ y: 0 }, { y: -7 }],
      addTo: body,
      translate: { x: -6, y: -4, z: 0 },
      color: pink,
      stroke: 7,
    });

    rightArm.copy({
      path: [{ x: 0 }, { x: 6 }],
      translate: { x: 6, y: -2, z: 0 },
    });

    const rightFoot = new Zdog.Shape({
      path: [
        { x: 0, y: -2 },
        {
          arc: [
            { x: 2, y: -2 },
            { x: 2, y: 0 },
          ],
        },
        {
          arc: [
            { x: 2, y: 5 },
            { x: 0, y: 5 },
          ],
        },
        {
          arc: [
            { x: -2, y: 5 },
            { x: -2, y: 0 },
          ],
        },
        {
          arc: [
            { x: -2, y: -2 },
            { x: 0, y: -2 },
          ],
        },
      ],
      addTo: body,
      translate: { x: -1, y: 9, z: -9 },
      rotate: { z: 0.2 },
      stroke: 6,
      color: shoe,
      fill: true,
      closed: false,
    });

    rightFoot.copy({
      translate: { x: 9.5, y: 6, z: -6 },
      rotate: { z: -1.1, y: 0.8 },
    });

    const umbrella = new Zdog.Shape({
      path: [{ y: 0 }, { y: 22 }],
      addTo: rightArm,
      translate: { y: -33, z: 2 },
      rotate: { y: 0.5 },
      color: yellow,
      stroke: 1,
    });

    const starPath: Zdog.Vector[] = (() => {
      const path: Zdog.Vector[] = [];
      const starRadiusA = 3;
      const starRadiusB = 1.7;

      for (let i = 0; i < 10; i++) {
        const radius = i % 2 ? starRadiusA : starRadiusB;
        const angle = (TAU * i) / 10 + TAU / 4;
        const point: Zdog.Vector = {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          z: 0,
          set: function (position?: Zdog.VectorOptions): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
          copy: function (): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
          add: function (position?: Zdog.VectorOptions): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
          subtract: function (position?: Zdog.VectorOptions): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
          multiply: function (
            position?: number | Zdog.VectorOptions,
          ): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
          rotate: function (rotation?: Zdog.VectorOptions): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
          magnitude: function (): number {
            throw new Error("Function not implemented.");
          },
          lerp: function (
            position: Zdog.VectorOptions,
            alpha: number,
          ): Zdog.Vector {
            throw new Error("Function not implemented.");
          },
        };

        path.push(point);
      }

      return path;
    })();

    const star = new Zdog.Shape({
      path: starPath,
      addTo: umbrella,
      translate: { y: -4.5 },
      stroke: 2,
      color: yellow,
      fill: true,
    });

    const handle = new Zdog.Shape({
      path: [
        { z: 0, y: 0 },
        { z: 0, y: 1 },
        {
          arc: [
            { z: 0, y: 4 },
            { z: 3, y: 4 },
          ],
        },
        {
          arc: [
            { z: 6, y: 4 },
            { z: 6, y: 1 },
          ],
        },
      ],
      addTo: umbrella,
      translate: { y: 23 },
      stroke: 2,
      color: "#37F",
      closed: false,
    });

    const shields: Zdog.Shape[] = [];
    const umbPanelX = 14 * Math.sin(TAU / 24);
    const umbPanelZ = 14 * Math.cos(TAU / 24);

    for (let i = 0; i < 12; i++) {
      const colorSide = Math.floor(i / 2) % 2;
      const shield = new Zdog.Shape({
        path: [
          { x: 0, y: 0, z: 0 },
          {
            arc: [
              { x: -umbPanelX, y: 0, z: umbPanelZ },
              { x: -umbPanelX, y: 14, z: umbPanelZ },
            ],
          },
          { x: umbPanelX, y: 14, z: umbPanelZ },
          {
            arc: [
              { x: umbPanelX, y: 0, z: umbPanelZ },
              { x: 0, y: 0, z: 0 },
            ],
          },
        ],
        addTo: umbrella,
        rotate: { y: (TAU / 12) * i },
        stroke: 1,
        color: colorSide ? red : "white",
        fill: true,
      });

      shields.push(shield);
    }

    const floaterStars: Zdog.Shape[] = [];

    for (let i = 0; i < 6; i++) {
      const starHolder = new Zdog.Anchor({
        addTo: umbrella,
        translate: { y: 10 },
        rotate: { y: (TAU / 6) * i + TAU / 24 },
      });
      const floaterStar = star.copy({
        addTo: starHolder,
        translate: { z: 28 },
      });

      floaterStars.push(floaterStar);
    }

    let animationId: number;

    function animate() {
      illo.rotate.y += isSpinning ? -0.03 : 0;
      illo.updateRenderGraph();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
      isSpinning = false;
      cancelAnimationFrame(animationId);
      umbrella.removeChild(rightArm);

      umbrella.visible = false;
      handle.visible = false;

      shields.forEach((shield) => (shield.visible = false));
      floaterStars.forEach((star) => (star.visible = false));

      star.visible = false;

      illo.updateRenderGraph();

      const kirbyElement = kirbyRef.current;
      const zdogCanvas = canvasRef.current!;

      if (kirbyElement) {
        kirbyElement.classList.add("visible");
        zdogCanvas.classList.add("fade-out");
      }
    }, 3500);
  }, []);

  return (
    <div className="wrapper flex justify-center">
      <canvas
        ref={canvasRef}
        className="zdog-canvas absolute top-0 left-[0] w-full h-full block transition-opacity ease-out duration-[1s] z-[90]"
      />
      <div
        ref={kirbyRef}
        className="kirby flex absolute top-[40%] right-[38%] margin-0 opacity-0 z-40 transition-opacity ease-in-out duration-[1s] transform translate-x-0 animate-[moveRight_3s_ease-in-out_4.5s_forwards] "
      >
        <Image
          alt="picture of kirby"
          className="kirbyPic w-[24vw] max-lg:w-[30vw] h-[25vw] max-lg:h-[31vw] transform -scale-x-100 max-sm:opacity-0"
          src={KirbyPic}
        />
      </div>
    </div>
  );
};

export default FloatingKirby;
