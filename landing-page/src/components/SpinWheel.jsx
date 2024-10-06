import React, { useEffect, useRef, useState } from 'react';
import './SpinWheel.css';

const sectors = [
  { color: "#FFBC03", text: "#333333", label: "2000 off" },
  { color: "violet", text: "#333333", label: "3000 off" },
  { color: "green", text: "#333333", label: "1000 off" },
  { color: "red", text: "#333333", label: "You lose" },
  { color: "aqua", text: "#333333", label: "20% off" },
  { color: "blue", text: "#333333", label: "30% off" },
  { color: "magenta", text: "#333333", label: "50% off" },
];

const SpinWheel = () => {
  const canvasRef = useRef(null);
  const [angVel, setAngVel] = useState(0);
  const [ang, setAng] = useState(0);
  const [spinButtonClicked, setSpinButtonClicked] = useState(false);
  const [spinVal, setSpinVal] = useState(null);
  const dia = 600; // Canvas width and height
  const rad = dia / 2;
  const friction = 0.99; // Adjust friction to slow down more naturally

  const getIndex = () => Math.floor(sectors.length - (ang / (2 * Math.PI)) * sectors.length) % sectors.length;

  const drawSector = (ctx, sector, i) => {
    const arc = (2 * Math.PI) / sectors.length;
    const angle = arc * i;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, angle, angle + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();

    ctx.translate(rad, rad);
    ctx.rotate(angle + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = sector.text;
    ctx.font = "bold 30px 'Lato', sans-serif";
    ctx.fillText(sector.label, rad - 10, 10);
    ctx.restore();
  };

  const rotate = (ctx) => {
    ctx.canvas.style.transform = `rotate(${ang - Math.PI / 2}rad)`;
  };

  const frame = (ctx) => {
    if (!angVel && spinButtonClicked) {
      const finalIndex = getIndex();
      const finalSector = sectors[finalIndex];

      // Set the displayed value based on the sector landed on
      console.log(`Woop! You won ${finalSector.label}`);
      setSpinVal(finalSector.label);

      setSpinButtonClicked(false); // Allow for future spins
      return;
    }

    if (angVel > 0) {
      const newVel = angVel * friction;
      setAngVel(newVel < 0.002 ? 0 : newVel);
    }

    setAng((prev) => {
      const newAngle = (prev + angVel) % (2 * Math.PI);
      rotate(ctx);
      return newAngle;
    });
  };

  const engine = (ctx) => {
    frame(ctx);
    requestAnimationFrame(() => engine(ctx));
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    sectors.forEach((sector, i) => drawSector(ctx, sector, i));
    engine(ctx);

    const spinButton = () => {
      if (!angVel) {
        setAngVel(Math.random() * (0.5) + 0.25);
        setSpinButtonClicked(true);
        setSpinVal(null); // Reset the displayed value when spinning again
      }
    };

    const spinButtonElement = document.getElementById("spin");
    spinButtonElement.addEventListener("click", spinButton);

    return () => {
      spinButtonElement.removeEventListener("click", spinButton);
    };
  }, [angVel]);

  return (
    <div className='spin-container'>
      <div id="spin_the_wheel">
        <canvas ref={canvasRef} width={dia} height={dia}></canvas>
        <div id="spin">SPIN</div>
      </div>
      <div className="right">
        <p>Take a screenshot of the spinner</p>
        <p style={{ border: "2px solid black", width: "300px", padding: "20px", textAlign: "center" }}>
          {spinVal || "Spin the wheel!"}
        </p>
      </div>
    </div>
  );
};

export default SpinWheel;
