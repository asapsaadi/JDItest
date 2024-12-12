import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ModelOne = () => {


let loadedModel;
const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

loader.load( './assets/shiba/scene.gltf', function ( gltf ) {

    loadedModel = gltf;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

//scene.add(camera);
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

camera.position.z = 10;
const animate = () => {

// // 	/* cube.rotation.x += 0.01 */;
	if(loadedModel){
  	 loadedModel.scene.rotation.y += 0.01;
	}
	renderer.render( scene, camera );
 }
 renderer.setAnimationLoop( animate );
}

export default ModelOne;