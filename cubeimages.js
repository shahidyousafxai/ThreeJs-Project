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

const image1 = new THREE.TextureLoader().load("./images/image1.jpg");
const image2 = new THREE.TextureLoader().load("./images/image2.jpg");
const image3 = new THREE.TextureLoader().load("./images/image3.jpg");
const image4 = new THREE.TextureLoader().load("./images/image4.jpg");
const image5 = new THREE.TextureLoader().load("./images/image5.jpg");
const image6 = new THREE.TextureLoader().load("./images/image6.jpg");

const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 30, 30, 30);
const material1 = new THREE.MeshBasicMaterial({
  map: image1,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material2 = new THREE.MeshPhongMaterial({
  map: image2,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material3 = new THREE.MeshPhongMaterial({
  map: image3,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material4 = new THREE.MeshPhongMaterial({
  map: image4,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material5 = new THREE.MeshPhongMaterial({
  map: image5,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material6 = new THREE.MeshPhongMaterial({
  map: image6,
  side: THREE.DoubleSide,
  wireframe: true,
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

// var ambientLight = new THREE.AmbientLight("white", 1.0);
// scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 5.0);
scene.add(directionalLight);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
