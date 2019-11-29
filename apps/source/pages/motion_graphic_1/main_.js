import * as Three from "three";

let scene = new Three.Scene();
let camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

let renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry  = new Three.BoxGeometry(1, 1, 1);
let material = new  Three.MeshBasicMaterial({color: 0x00ff00});
let box = new Three.Mesh(geometry, material);
scene.add(box);

camera.position.z = 5;

function animate() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();