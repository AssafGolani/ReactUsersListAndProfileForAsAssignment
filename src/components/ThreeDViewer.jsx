/* eslint-disable no-case-declarations */
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const App = () => {
  const [shape, setShape] = useState("rectangle");
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Geometry and Material
    let geometry;
    switch (shape) {
      case "rectangle":
        geometry = new THREE.BoxGeometry(1, 1, 1);
        break;
      case "circle":
        geometry = new THREE.CircleGeometry(1, 32);
        break;
      case "triangle":
        geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          0,
          1,
          0, // vertex 1
          -1,
          -1,
          0, // vertex 2
          1,
          -1,
          0, // vertex 3
        ]);
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(vertices, 3)
        );
        geometry.setIndex([0, 1, 2]);
        geometry.computeVertexNormals();
        break;
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, [shape]);

  return (
    <div>
      <select value={shape} onChange={(e) => setShape(e.target.value)}>
        <option value="rectangle">Rectangle</option>
        <option value="circle">Circle</option>
        <option value="triangle">Triangle</option>
      </select>
      <div ref={mountRef} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default App;
