"use client";
import { useEffect } from "react";
import { View } from "../util/View";
import * as THREE from "three";

const threeCanvas = "three-canvas";
export default function GraphPage() {
  useEffect(() => {
    draw();
  }, []);

  return (
    <View className="h-dvh bg-white p-3">
      <canvas className="block size-full" id={threeCanvas} />
    </View>
  );
}

function draw() {
  const canvas = document.getElementById(threeCanvas);
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setAnimationLoop(animate);

  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  camera.position.z = 5;

  function animate() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
  }
}

function resizeRendererToDisplaySize(
  renderer: THREE.WebGLRenderer,
  maxPixelCount = 3840 * 2160,
) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  let width = Math.floor(canvas.clientWidth * pixelRatio);
  let height = Math.floor(canvas.clientHeight * pixelRatio);
  const pixelCount = width * height;
  const renderScale =
    pixelCount > maxPixelCount ? Math.sqrt(maxPixelCount / pixelCount) : 1;
  width = Math.floor(width * renderScale);
  height = Math.floor(height * renderScale);

  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
