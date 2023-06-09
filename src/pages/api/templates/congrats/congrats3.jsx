// pages/api/embed/[id].js
export default (req, res) => {
  res.setHeader('content-type', 'text/html')
  res.end(`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>Test</title>
  <style>
    body {
      margin: 0;
    }

    #instructions {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;
      font-size: 14px;
      cursor: pointer;
    }

  </style>

  <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

  <script type="importmap">
      {
        "imports": {
          "three": "https://cdn.skypack.dev/three@0.138.0/build/three.module",
          "three/examples/jsm/controls/OrbitControls": "https://cdn.skypack.dev/three@0.138.0/examples/jsm/controls/OrbitControls",
          "three/examples/jsm/libs/stats.module": "https://cdn.skypack.dev/three@0.138.0/examples/jsm/libs/stats.module",
          "dat.gui": "https://cdn.skypack.dev/dat.gui"
        }
      }
    </script>
</head>

<body>

  <script type="module">
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
    import Stats from "three/examples/jsm/libs/stats.module";
    import { GUI } from "dat.gui";

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
      },
      false
    );

    const stats = Stats();
    document.body.appendChild(stats.dom);

    const gui = new GUI();

    const cubeFolder = gui.addFolder("Cube");
    cubeFolder.add(cube.rotation, "x", 0, Math.PI * 2, 0.01);
    cubeFolder.add(cube.rotation, "y", 0, Math.PI * 2, 0.01);
    cubeFolder.add(cube.rotation, "z", 0, Math.PI * 2, 0.01);
    cubeFolder.open();

    const cameraFolder = gui.addFolder("Camera");
    cameraFolder.add(camera.position, "z", 0, 10, 0.01);
    cameraFolder.open();

    var animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      render();
      stats.update();
    };

    function render() {
      renderer.render(scene, camera);
    }

    animate();
  </script>
</body>

</html>
  `)
}
