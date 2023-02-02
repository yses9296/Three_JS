import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {

  /* Scene */
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#99826f')

  /* Camera */
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  /* canvas */
  // const canvas = document.querySelector('#ex-01');
  // const renderer = new THREE.WebGLRenderer({canvas});

  /* Light */
  const pointLight = new THREE.PointLight('#fff', 1);
  pointLight.position.set(0, 2, 12)
  scene.add(pointLight);

  /* Mesh */
  const geometry01 = new THREE.IcosahedronGeometry(.75, 0);
  const material01 = new THREE.MeshBasicMaterial({color: '#ffe1c7'});
  const obj01 = new THREE.Mesh(geometry01, material01);
  obj01.position.z = 1;
  scene.add(obj01);
  
  const geometry02 = new THREE.BoxGeometry(.5, .5, .5);
  const material02 = new THREE.MeshBasicMaterial({color: '#b29881'});
  const obj02 = new THREE.Mesh(geometry02, material02);
  obj02.position.x = -1;
  obj02.position.z = .5;
  scene.add(obj02);

  const geometry03 = new THREE.BoxGeometry(.5, .5, .5);
  const material_cube_03 = new THREE.MeshBasicMaterial({color: '#332b25'});
  const obj03 = new THREE.Mesh(geometry03, material02);
  obj03.position.x = 1;
  obj03.position.z = .3;
  scene.add(obj03);

  // const geometry = new THREE.SphereGeometry( 10, 10, 10 );
  // const material = new THREE.MeshBasicMaterial( { color: '#ffe1c7'} );
  // const sphere = new THREE.Mesh( geometry, material );
  // scene.add( sphere );

  /* Renderer */
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement);


  function render(time) {
    time *= 0.0008;

    obj01.rotation.x = time;
    obj01.rotation.y = time;
    obj02.rotation.x = time;
    obj02.rotation.y = time;
    obj03.rotation.x = time;
    obj03.rotation.y = time;

    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  /* 반응형 처리 */
  function onWindowResize(){
    camera.aspect = window.innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize)

} 
else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
