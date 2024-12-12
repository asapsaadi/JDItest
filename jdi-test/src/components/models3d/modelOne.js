import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ModelOne = () => {


const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const loadedData = loader.load( 'scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );
    scene.add(camera);

}, undefined, function ( error ) {

	console.error( error );

} );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function animate() {

	/* cube.rotation.x += 0.01 */;
	loadedData.rotation.y += 0.01;

	renderer.render( scene, camera );

}
}

export default ModelOne;