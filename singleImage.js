const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// var container = document.createElement("div");
document.body.appendChild(renderer.domElement);
// container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

const image1 = new THREE.ImageLoader().load(
  "./images/image1.jpg",
  function (image) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.drawImage(image, 100, 100);
  },
  undefined,
  function () {
    console.error("An error happened.");
  }
);

const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 30, 30, 30);
const material1 = new THREE.MeshBasicMaterial({
  map: image1,
  side: THREE.DoubleSide,
});

const materials = [material1];

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
