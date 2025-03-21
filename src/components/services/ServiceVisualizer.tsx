
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface ServiceVisualizerProps {
  serviceId: string;
}

const ServiceVisualizer: React.FC<ServiceVisualizerProps> = ({ serviceId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Set camera position
    camera.position.z = 5;

    // Lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x333333 : 0x999999);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(isDark ? 0xffffff : 0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Service-specific geometry
    let geometry;
    let material;
    let mesh;
    
    // Service-specific visuals
    switch (serviceId) {
      case 'web-development':
        // Cube representing websites
        geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        material = new THREE.MeshPhongMaterial({ 
          color: 0x3e95cd,
          wireframe: false,
          transparent: true,
          opacity: 0.8,
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        // Grid representing code
        const gridHelper = new THREE.GridHelper(10, 20, 0x555555, 0x333333);
        gridHelper.position.y = -2;
        scene.add(gridHelper);
        break;
        
      case 'digital-marketing':
        // Sphere with particles for digital reach
        geometry = new THREE.SphereGeometry(1.5, 32, 32);
        material = new THREE.MeshPhongMaterial({ 
          color: 0xff6b6b,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        // Create particles around the sphere
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 500;
        const positions = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 10;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          color: 0xff9d00,
          size: 0.05,
          transparent: true
        });
        
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        break;
        
      case 'app-development':
        // Smartphone shape
        geometry = new THREE.BoxGeometry(1, 2, 0.1);
        material = new THREE.MeshPhongMaterial({ 
          color: 0x42b883,
          transparent: true,
          opacity: 0.9,
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        // Screen
        const screenGeometry = new THREE.BoxGeometry(0.8, 1.7, 0.05);
        const screenMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x222222,
          transparent: true,
          opacity: 0.95,
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.z = 0.08;
        mesh.add(screen);
        break;
        
      case 'seo':
        // Search icon (magnifying glass)
        const ringGeometry = new THREE.TorusGeometry(1, 0.2, 16, 100);
        const ringMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x4285f4,
          transparent: true,
          opacity: 0.8,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        scene.add(ring);
        
        // Handle
        const handleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 32);
        const handleMaterial = new THREE.MeshPhongMaterial({ color: 0x4285f4 });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.set(0.8, -0.8, 0);
        handle.rotationX = Math.PI / 4;
        handle.rotation.z = Math.PI / 4;
        scene.add(handle);
        
        mesh = ring; // For animation
        break;
        
      default:
        // Default geometry
        geometry = new THREE.DodecahedronGeometry(1.5, 0);
        material = new THREE.MeshPhongMaterial({ 
          color: 0xf97316, // Orange color matching brand
          transparent: true,
          opacity: 0.8,
          wireframe: false
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }

    // Animation loop
    let rafId: number;
    
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      
      if (mesh) {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
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
    
    // Add interactive rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const handleMouseDown = () => {
      isDragging = true;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !mesh) return;
      
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      
      mesh.rotation.y += deltaMove.x * 0.01;
      mesh.rotation.x += deltaMove.y * 0.01;
      
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    const handleMouseUp = () => {
      isDragging = false;
    };
    
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      
      cancelAnimationFrame(rafId);
      
      // Dispose resources
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      renderer.dispose();
    };
  }, [serviceId, isDark]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-72 md:h-96 relative rounded-xl overflow-hidden"
      aria-label={`3D visualization for ${serviceId}`}
      role="img"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ServiceVisualizer;
