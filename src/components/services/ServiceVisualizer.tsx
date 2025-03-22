import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface ServiceVisualizerProps {
  serviceId: string;
}

const ServiceVisualizer: React.FC<ServiceVisualizerProps> = ({ serviceId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with fog for depth perception
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(isDark ? 0x111827 : 0xf3f4f6, 0.025);
    
    // Camera with better perspective
    const camera = new THREE.PerspectiveCamera(
      60, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    
    // Renderer with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    containerRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 6;
    camera.position.y = 1;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x333333 : 0x999999, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(isDark ? 0xffffff : 0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);
    
    // Add rim light for better edge definition
    const rimLight = new THREE.DirectionalLight(isDark ? 0x6366f1 : 0x3b82f6, 0.6);
    rimLight.position.set(-5, 0, -5);
    scene.add(rimLight);

    // Add subtle point lights for more dimension
    const pointLight1 = new THREE.PointLight(0xf97316, 0.8, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x6366f1, 0.5, 10);
    pointLight2.position.set(-2, -1, -2);
    scene.add(pointLight2);

    // Service-specific geometry
    let primaryMesh: THREE.Mesh | THREE.Group | null = null;
    let secondaryObjects: THREE.Object3D[] = [];
    let particles: THREE.Points | null = null;
    
    // Advanced materials
    const createCustomMaterial = (color: number, roughness = 0.2, metalness = 0.8) => {
      return new THREE.MeshStandardMaterial({ 
        color,
        roughness, 
        metalness,
        envMapIntensity: 1.5,
        transparent: true,
        opacity: 0.9
      });
    };

    // Environment map for realistic reflections
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMap = cubeTextureLoader.load([
      '/images/envmap/px.png', '/images/envmap/nx.png',
      '/images/envmap/py.png', '/images/envmap/ny.png',
      '/images/envmap/pz.png', '/images/envmap/nz.png'
    ]);
    scene.environment = environmentMap;
    
    // Service-specific visuals with enhanced complexity
    switch (serviceId) {
      case 'web-development': {
        // Create a complex group for website representation
        const webGroup = new THREE.Group();
        
        // Main screen
        const screenGeometry = new THREE.BoxGeometry(3, 2, 0.1);
        const screenMaterial = createCustomMaterial(0x3b82f6, 0.1, 0.9);
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.castShadow = true;
        webGroup.add(screen);
        
        // Screen content - wireframe plane
        const contentGeometry = new THREE.PlaneGeometry(2.8, 1.8, 20, 20);
        const contentMaterial = new THREE.MeshBasicMaterial({
          color: isDark ? 0xffffff : 0x1e293b,
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        const content = new THREE.Mesh(contentGeometry, contentMaterial);
        content.position.z = 0.06;
        screen.add(content);
        
        // Stand
        const standGeometry = new THREE.CylinderGeometry(0.1, 0.3, 0.5, 8);
        const standMaterial = createCustomMaterial(0x64748b, 0.2, 0.7);
        const stand = new THREE.Mesh(standGeometry, standMaterial);
        stand.position.y = -1.25;
        stand.castShadow = true;
        webGroup.add(stand);
        
        // Base
        const baseGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.05, 16);
        const baseMaterial = createCustomMaterial(0x475569, 0.3, 0.6);
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = -1.5;
        base.castShadow = true;
        webGroup.add(base);
        
        // Floating code blocks
        for (let i = 0; i < 6; i++) {
          const blockGeometry = new THREE.BoxGeometry(0.8, 0.2, 0.05);
          const blockMaterial = createCustomMaterial(
            [0xf59e0b, 0x3b82f6, 0x10b981, 0x8b5cf6, 0xef4444, 0xec4899][i % 6],
            0.3, 0.7
          );
          const block = new THREE.Mesh(blockGeometry, blockMaterial);
          block.position.set(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4 - 2
          );
          block.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          block.castShadow = true;
          secondaryObjects.push(block);
          scene.add(block);
        }
        
        primaryMesh = webGroup;
        scene.add(webGroup);
        
        // Grid for perspective
        const gridHelper = new THREE.GridHelper(20, 40, 0x555555, 0x333333);
        gridHelper.position.y = -2;
        scene.add(gridHelper);
        break;
      }
        
      case 'digital-marketing': {
        // Create main sphere for global reach concept
        const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xff6b6b,
          metalness: 0.3,
          roughness: 0.6,
          wireframe: true,
          transparent: true,
          opacity: 0.8,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.castShadow = true;
        
        // Network lines on sphere
        const lineGroup = new THREE.Group();
        for (let i = 0; i < 12; i++) {
          const curve = new THREE.EllipseCurve(
            0, 0,
            1.5, 1.5,
            0, Math.PI * 2,
            false,
            Math.random() * Math.PI
          );
          
          const points = curve.getPoints(50);
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: [0xf97316, 0x3b82f6, 0x10b981][i % 3],
            transparent: true,
            opacity: 0.7
          });
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          line.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          lineGroup.add(line);
        }
        sphere.add(lineGroup);
        
        // Create particles around the sphere
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);
        
        const color1 = new THREE.Color(0xff9d00);
        const color2 = new THREE.Color(0xf97316);
        const color3 = new THREE.Color(0x3b82f6);
        
        for (let i = 0; i < particlesCount; i++) {
          // Spherical distribution
          const radius = 2 + Math.random() * 4;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi);
          
          // Color gradients
          const mixedColor = new THREE.Color();
          if (i % 3 === 0) {
            mixedColor.copy(color1);
          } else if (i % 3 === 1) {
            mixedColor.copy(color2);
          } else {
            mixedColor.copy(color3);
          }
          
          colors[i * 3] = mixedColor.r;
          colors[i * 3 + 1] = mixedColor.g;
          colors[i * 3 + 2] = mixedColor.b;
          
          sizes[i] = Math.random() * 0.1 + 0.03;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.1,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.8,
          vertexColors: true,
          blending: THREE.AdditiveBlending
        });
        
        particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        // Add connection lines between particles
        for (let i = 0; i < 40; i++) {
          const startIndex = Math.floor(Math.random() * particlesCount);
          const endIndex = Math.floor(Math.random() * particlesCount);
          
          const startPos = new THREE.Vector3(
            positions[startIndex * 3],
            positions[startIndex * 3 + 1],
            positions[startIndex * 3 + 2]
          );
          
          const endPos = new THREE.Vector3(
            positions[endIndex * 3],
            positions[endIndex * 3 + 1],
            positions[endIndex * 3 + 2]
          );
          
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([startPos, endPos]);
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0xf97316,
            transparent: true,
            opacity: 0.3
          });
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
          secondaryObjects.push(line);
        }
        
        primaryMesh = sphere;
        scene.add(sphere);
        break;
      }
        
      case 'app-development': {
        // Create phone model
        const phoneGroup = new THREE.Group();
        
        // Phone body
        const phoneGeometry = new THREE.BoxGeometry(1.2, 2.4, 0.1);
        const phoneMaterial = createCustomMaterial(0x42b883, 0.1, 0.9);
        const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
        phone.castShadow = true;
        phoneGroup.add(phone);
        
        // Screen
        const screenGeometry = new THREE.BoxGeometry(1, 2, 0.01);
        const screenMaterial = createCustomMaterial(0x111111, 0, 0.9);
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.z = 0.06;
        phone.add(screen);
        
        // App icons
        const iconSize = 0.15;
        const iconGeometry = new THREE.BoxGeometry(iconSize, iconSize, 0.02);
        const iconColors = [0xef4444, 0x3b82f6, 0xf97316, 0x8b5cf6, 0x10b981, 0xec4899];
        
        for (let i = 0; i < 12; i++) {
          const row = Math.floor(i / 3);
          const col = i % 3;
          
          const iconMaterial = createCustomMaterial(iconColors[i % iconColors.length], 0.3, 0.7);
          const icon = new THREE.Mesh(iconGeometry, iconMaterial);
          
          // Position icons in a grid
          icon.position.set(
            (col - 1) * (iconSize * 1.5),
            0.8 - (row * (iconSize * 1.5)),
            0.02
          );
          
          screen.add(icon);
        }
        
        // Floating UX elements
        const shapes = [
          new THREE.BoxGeometry(0.5, 0.8, 0.05),
          new THREE.SphereGeometry(0.3, 16, 16),
          new THREE.TorusGeometry(0.3, 0.1, 16, 32),
          new THREE.ConeGeometry(0.3, 0.5, 16)
        ];
        
        for (let i = 0; i < 8; i++) {
          const shapeMaterial = createCustomMaterial(
            [0xf59e0b, 0x3b82f6, 0x10b981, 0x8b5cf6][i % 4],
            0.3,
            0.7
          );
          
          const shape = new THREE.Mesh(shapes[i % shapes.length], shapeMaterial);
          shape.position.set(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 3 - 2
          );
          
          shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          
          shape.castShadow = true;
          secondaryObjects.push(shape);
          scene.add(shape);
        }
        
        primaryMesh = phoneGroup;
        scene.add(phoneGroup);
        break;
      }
        
      case 'seo': {
        // Create advanced SEO visualization
        const seoGroup = new THREE.Group();
        
        // Main search icon (magnifying glass)
        const ringGeometry = new THREE.TorusGeometry(1, 0.2, 20, 100);
        const ringMaterial = createCustomMaterial(0x4285f4);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.castShadow = true;
        seoGroup.add(ring);
        
        // Handle
        const handleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 32);
        const handleMaterial = createCustomMaterial(0x4285f4);
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.set(0.8, -0.8, 0);
        handle.rotation.z = Math.PI / 4;
        handle.castShadow = true;
        seoGroup.add(handle);
        
        // Search results
        const resultGroup = new THREE.Group();
        resultGroup.position.set(0, -3, -2);
        
        for (let i = 0; i < 5; i++) {
          const resultGeometry = new THREE.BoxGeometry(3, 0.4, 0.05);
          const resultMaterial = createCustomMaterial(
            i === 0 ? 0xf97316 : 0xe2e8f0,
            0.4,
            0.5
          );
          
          const result = new THREE.Mesh(resultGeometry, resultMaterial);
          result.position.y = -i * 0.6;
          result.castShadow = true;
          resultGroup.add(result);
          
          // Add a small indicator for ranking
          if (i === 0) {
            const rankGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
            const rankMaterial = createCustomMaterial(0xf97316);
            const rank = new THREE.Mesh(rankGeometry, rankMaterial);
            rank.position.set(-2, 0, 0.1);
            result.add(rank);
          }
        }
        
        scene.add(resultGroup);
        secondaryObjects.push(resultGroup);
        
        // Keywords floating in space
        const keywords = ['SEO', 'RANKING', 'SEM', 'SERP', 'META', 'TAGS'];
        const fontLoader = new THREE.FontLoader();
        
        // Temporary cubes as placeholders for text (text requires font loading)
        for (let i = 0; i < keywords.length; i++) {
          const cubeGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.1);
          const cubeMaterial = createCustomMaterial(
            [0xf59e0b, 0x3b82f6, 0x10b981, 0x8b5cf6, 0xef4444, 0xec4899][i % 6],
            0.3,
            0.7
          );
          
          const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
          const angle = (i / keywords.length) * Math.PI * 2;
          
          cube.position.set(
            Math.cos(angle) * 3,
            Math.sin(angle) * 3,
            -2
          );
          
          cube.rotation.z = Math.random() * Math.PI;
          cube.castShadow = true;
          scene.add(cube);
          secondaryObjects.push(cube);
        }
        
        // Network of connections
        const nodeCount = 20;
        const nodes = [];
        
        for (let i = 0; i < nodeCount; i++) {
          const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
          const nodeMaterial = createCustomMaterial(0x4285f4);
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          
          const radius = 4 + Math.random() * 2;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          node.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi) - 4
          );
          
          scene.add(node);
          nodes.push(node);
          secondaryObjects.push(node);
        }
        
        // Create connections between nodes
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            // Only connect some nodes
            if (Math.random() > 0.8) {
              const points = [nodes[i].position, nodes[j].position];
              const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
              const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x4285f4,
                transparent: true,
                opacity: 0.3
              });
              
              const line = new THREE.Line(lineGeometry, lineMaterial);
              scene.add(line);
              secondaryObjects.push(line);
            }
          }
        }
        
        primaryMesh = seoGroup;
        scene.add(seoGroup);
        break;
      }
        
      default: {
        // Enhanced default visualization
        const geometry = new THREE.DodecahedronGeometry(1.5, 1);
        const material = createCustomMaterial(0xf97316, 0.3, 0.7);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        
        // Add interior decorative geometry
        const innerGeometry = new THREE.IcosahedronGeometry(1.2, 1);
        const innerMaterial = createCustomMaterial(0xffffff, 0.5, 0.3);
        innerMaterial.wireframe = true;
        const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
        mesh.add(innerMesh);
        
        // Orbiting particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 500;
        const positions = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount; i++) {
          const radius = 2 + Math.random() * 3;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          color: 0xf97316,
          size: 0.05,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending
        });
        
        particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        // Floating auxiliary elements
        const auxShapes = [
          new THREE.TetrahedronGeometry(0.5, 0),
          new THREE.OctahedronGeometry(0.5, 0),
          new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8, 2, 3)
        ];
        
        for (let i = 0; i < 5; i++) {
          const shapeMaterial = createCustomMaterial(
            [0xf59e0b, 0x3b82f6, 0x10b981][i % 3],
            0.3,
            0.7
          );
          
          const shape = new THREE.Mesh(auxShapes[i % auxShapes.length], shapeMaterial);
          
          const radius = 3;
          const theta = (i / 5) * Math.PI * 2;
          
          shape.position.set(
            radius * Math.cos(theta),
            radius * Math.sin(theta),
            -2
          );
          
          shape.castShadow = true;
          secondaryObjects.push(shape);
          scene.add(shape);
        }
        
        primaryMesh = mesh;
        scene.add(mesh);
      }
    }

    // Animation loop with more complex animations
    let rafId: number;
    
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      
      if (primaryMesh) {
        // More natural rotation when not interacting
        if (!isInteracting) {
          primaryMesh.rotation.y += 0.005;
          primaryMesh.rotation.x += 0.002;
        }
        
        // Gentle floating motion
        primaryMesh.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      }
      
      // Animate secondary objects
      secondaryObjects.forEach((obj, index) => {
        // Different objects move at different speeds and directions
        const speed = 0.001 + (index % 3) * 0.0005;
        const time = Date.now() * speed;
        
        obj.rotation.x += 0.001 * (index % 3 + 1);
        obj.rotation.y += 0.001 * (index % 2 + 1);
        
        // Some objects float up and down
        if (index % 2 === 0) {
          obj.position.y = obj.position.y + Math.sin(time) * 0.01;
        }
        
        // Others orbit slightly
        if (index % 3 === 0) {
          const radius = obj.position.length();
          const theta = time * 0.05;
          
          obj.position.x = radius * Math.cos(theta);
          obj.position.z = radius * Math.sin(theta);
        }
      });
      
      // Animate particles if they exist
      if (particles) {
        particles.rotation.y += 0.001;
        
        // Access particle positions and animate them
        const positions = particles.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const px = positions.getX(i);
          const py = positions.getY(i);
          const pz = positions.getZ(i);
          
          const distance = Math.sqrt(px * px + py * py + pz * pz);
          const normalizedTime = Date.now() * 0.0005;
          
          // Add a subtle wave effect to particles
          positions.setX(i, px + Math.sin(normalizedTime + distance) * 0.01);
          positions.setY(i, py + Math.cos(normalizedTime + distance) * 0.01);
          positions.setZ(i, pz + Math.sin(normalizedTime * 0.5 + distance) * 0.01);
        }
        
        positions.needsUpdate = true;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Enhanced interactive controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocityX = 0;
    let velocityY = 0;
    let damping = 0.95; // Damping factor for inertia
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
      velocityX = 0;
      velocityY = 0;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !primaryMesh) return;
      
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      
      // Update velocity
      velocityX = deltaMove.x * 0.01;
      velocityY = deltaMove.y * 0.01;
      
      // Apply rotation
      primaryMesh.rotation.y += velocityX;
      primaryMesh.rotation.x += velocityY;
      
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      
      // Continue applying inertia in the animation loop
      const applyInertia = () => {
        if (!primaryMesh) return;
        
        if (Math.abs(velocityX) > 0.001 || Math.abs(velocityY) > 0.001) {
          primaryMesh.rotation.y += velocityX;
          primaryMesh.rotation.x += velocityY;
          
          velocityX *= damping;
          velocityY *= damping;
          
          requestAnimationFrame(applyInertia);
        } else {
          setIsInteracting(false);
        }
      };
      
      applyInertia();
    };
    
    // Touch support
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        velocityX = 0;
        velocityY = 0;
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !primaryMesh || e.touches.length !== 1) return;
      
      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y
      };
      
      // Update velocity
      velocityX = deltaMove.x * 0.01;
      velocityY = deltaMove.y * 0.01;
      
      // Apply rotation
      primaryMesh.rotation.y += velocityX;
      primaryMesh.rotation.x += velocityY;
      
      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      
      // Prevent page scrolling
      e.preventDefault();
    };
    
    const handleTouchEnd = () => {
      handleMouseUp(); // Reuse the same inertia logic
    };
    
    // Add event listeners
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    containerRef.current.addEventListener('touchstart', handleTouchStart);
    containerRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
    containerRef.current.addEventListener('touchend', handleTouchEnd);
    
    // Better zoom controls with limits
    const handleWheel = (e: WheelEvent) => {
      const zoomSpeed = 0.001;
      camera.position.z += e.deltaY * zoomSpeed;
      
      // Limit zoom range
      camera.position.z = Math.max(3, Math.min(10, camera.position.z));
      e.preventDefault();
    };
    
    containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      cancelAnimationFrame(rafId);
      
      // Dispose resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
      
      renderer.dispose();
    };
  }, [serviceId, isDark, isInteracting]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
      aria-label={`Interactive 3D visualization for ${serviceId}`}
      role="img"
    >
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-center text-sm text-gray-400">
          <span className="hidden md:inline">Drag to rotate | Scroll to zoom</span>
          <span className="md:hidden">Touch to interact</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceVisualizer;

