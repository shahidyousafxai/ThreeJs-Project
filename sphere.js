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

const texture1 = new THREE.TextureLoader().load("./images/world.png");
const texture2 = new THREE.TextureLoader().load("./images/moon.jpg");

// scene.background = new THREE.CubeTextureLoader()
//   .setPath("./images/")
//   .load([
//     "stars.jpg",
//     "stars.jpg",
//     "stars.jpg",
//     "stars.jpg",
//     "stars.jpg",
//     "stars.jpg",
//   ]);

const geometry1 = new THREE.SphereGeometry(1, 64, 32);
const geometry2 = new THREE.SphereGeometry(0.3, 64, 32);
const material1 = new THREE.MeshStandardMaterial({
  //   color: "cyan",
  map: texture1,
  //   wireframe: true,
  side: THREE.DoubleSide,
});
const material2 = new THREE.MeshStandardMaterial({
  //   color: "cyan",
  map: texture2,
  //   wireframe: true,
  side: THREE.DoubleSide,
});

const earth = new THREE.Mesh(geometry1, material1);
const moon = new THREE.Mesh(geometry2, material2);
scene.add(earth);

// earth.position.x = -2;
moon.position.x = 2;
earth.add(moon);

camera.position.z = 5;

const directionalLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
directionalLight.position.set(-5, 0, 0);
scene.add(directionalLight);

function animate() {
  requestAnimationFrame(animate);

  //   earth.rotation.x += 0.01;
  earth.rotation.y += 0.004;

  moon.rotation.y += 0.006;

  renderer.render(scene, camera);
}

animate();
