const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
var container = document.createElement("div");
document.body.appendChild(container);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 30, 30, 30);
const material1 = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
  side: THREE.DoubleSide,
});
const material2 = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0,
  side: THREE.DoubleSide,
});
const material3 = new THREE.MeshBasicMaterial({
  color: "blue",
  wireframe: true,
  side: THREE.DoubleSide,
});
const material4 = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
  side: THREE.DoubleSide,
});
const material5 = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true,
  side: THREE.DoubleSide,
});
const material6 = new THREE.MeshBasicMaterial({
  color: "indigo",
  wireframe: true,
  side: THREE.DoubleSide,
});

const materials = [
  material1,
  material2,
  material3,
  material4,
  material5,
  material6,
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
