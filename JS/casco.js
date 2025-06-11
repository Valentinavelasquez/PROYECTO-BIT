let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let helmet = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
scene.add(helmet);

let light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

document.getElementById('colorPicker').addEventListener('input', (e) => {
  helmet.material.color.set(e.target.value);
});

function animate() {
  requestAnimationFrame(animate);
  helmet.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

function setVisor(type) {
  alert('Visor cambiado a: ' + type);
}

function toggleLED() {
  alert('Luces LED alternadas');
}

function exportModel() {
  alert('Función de exportación activa');
}
