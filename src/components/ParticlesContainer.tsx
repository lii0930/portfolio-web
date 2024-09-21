import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";
import { Engine } from "tsparticles-engine";
const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback((engine: Engine): any => {
    loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#f04354" },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
          detectRetina: true,
        },
      }}
    />
  );
};

export default ParticlesContainer;
