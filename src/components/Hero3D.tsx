"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Download } from "lucide-react";

/* ─── helpers ─── */

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ─── connection lines (center → orbit nodes) ─── */

function ConnectionLine({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const line = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: "#3b82f6",
      transparent: true,
      opacity: 0.12,
    });
    return new THREE.Line(geometry, material);
  }, [start, end]);

  useEffect(() => {
    return () => {
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    };
  }, [line]);

  return <primitive object={line} />;
}

/* ─── orbit rings ─── */

function OrbitRing({
  radius,
  tube,
  color,
  opacity,
  rotX,
  rotY,
  rotZ,
}: {
  radius: number;
  tube: number;
  color: string;
  opacity: number;
  rotX: number;
  rotY: number;
  rotZ: number;
}) {
  return (
    <mesh rotation={[rotX, rotY, rotZ]}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.45}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* ─── robot bust (head + neck + shoulders) ─── */

function RobotBust() {
  return (
    <group position={[0, -0.15, 0]}>
      {/* ── HEAD ── */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.12}>
        <group>
          {/* Main head shell — smooth white sphere, slightly taller */}
          <mesh scale={[1, 1.12, 0.95]}>
            <sphereGeometry args={[0.95, 48, 48]} />
            <meshStandardMaterial
              color="#e8e8ee"
              roughness={0.15}
              metalness={0.65}
              envMapIntensity={0.8}
            />
          </mesh>

          {/* Visor / face plate — dark seamless strip across the front */}
          <mesh position={[0, 0.02, 0.55]} scale={[0.78, 0.22, 0.12]}>
            <sphereGeometry args={[1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#0a0a12"
              roughness={0.05}
              metalness={0.9}
              emissive="#3b82f6"
              emissiveIntensity={0.15}
            />
          </mesh>

          {/* Visor glow strip — thin emissive line across visor */}
          <mesh position={[0, 0.02, 0.72]} scale={[0.6, 0.015, 0.01]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={2}
            />
          </mesh>

          {/* Right ear mechanism */}
          <group position={[0.82, 0.08, 0]}>
            {/* Outer cylinder */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.16, 0.16, 0.1, 24]} />
              <meshStandardMaterial
                color="#1a1a2e"
                roughness={0.2}
                metalness={0.85}
              />
            </mesh>
            {/* Inner ring */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.1, 0.015, 8, 24]} />
              <meshStandardMaterial
                color="#3b82f6"
                emissive="#3b82f6"
                emissiveIntensity={0.6}
              />
            </mesh>
            {/* Core dot */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.04, 0.04, 0.06, 16]} />
              <meshStandardMaterial
                color="#06b6d4"
                emissive="#06b6d4"
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Left ear mechanism (mirror) */}
          <group position={[-0.82, 0.08, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.16, 0.16, 0.1, 24]} />
              <meshStandardMaterial
                color="#1a1a2e"
                roughness={0.2}
                metalness={0.85}
              />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.1, 0.015, 8, 24]} />
              <meshStandardMaterial
                color="#8b5cf6"
                emissive="#8b5cf6"
                emissiveIntensity={0.6}
              />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.04, 0.04, 0.06, 16]} />
              <meshStandardMaterial
                color="#a78bfa"
                emissive="#8b5cf6"
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Crown ridge — subtle line on top */}
          <mesh position={[0, 0.92, -0.05]} scale={[0.04, 0.06, 0.6]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#c0c0d0"
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </group>
      </Float>

      {/* ── NECK ── */}
      <group>
        {/* Neck cylinder */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.4, 16]} />
          <meshStandardMaterial
            color="#1c1c2e"
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        {/* Neck ridges */}
        {[0, 1, 2].map((i) => (
          <mesh key={`ridge-${i}`} position={[0, -0.52 + i * 0.1, 0]}>
            <torusGeometry args={[0.19, 0.012, 8, 24]} />
            <meshStandardMaterial
              color="#2a2a3e"
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        ))}
        {/* Red/warm internal glow (echo of the video's signature red) */}
        <pointLight
          position={[0, -0.55, 0.15]}
          intensity={0.6}
          color="#ef4444"
          distance={1.5}
          decay={2}
        />
      </group>

      {/* ── SHOULDERS + CHEST ── */}
      <group>
        {/* Right shoulder plate */}
        <mesh position={[0.55, -0.95, 0]} rotation={[0, 0, 0.25]} scale={[0.6, 0.15, 0.45]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#d8d8e4"
            roughness={0.18}
            metalness={0.6}
          />
        </mesh>
        {/* Left shoulder plate */}
        <mesh position={[-0.55, -0.95, 0]} rotation={[0, 0, -0.25]} scale={[0.6, 0.15, 0.45]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#d8d8e4"
            roughness={0.18}
            metalness={0.6}
          />
        </mesh>
        {/* Chest plate — central */}
        <mesh position={[0, -1.1, 0.08]} scale={[0.7, 0.35, 0.2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#c0c0d0"
            roughness={0.15}
            metalness={0.65}
          />
        </mesh>
        {/* Chest emblem — small glowing dot */}
        <mesh position={[0, -1.05, 0.2]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={2}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ─── floating tech nodes ─── */

function FloatingNodes() {
  const nodePositions = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2.4 + Math.sin(i * 1.5) * 0.4;
      return [
        Math.cos(angle) * radius,
        (Math.sin(i * 2.1) * 0.5),
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  return (
    <>
      {nodePositions.map((pos, i) => (
        <Float
          key={i}
          speed={1 + i * 0.15}
          rotationIntensity={0}
          floatIntensity={0.4 + i * 0.08}
        >
          <mesh position={pos}>
            <octahedronGeometry args={[0.07, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
              emissive={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/* ─── full scene composition ─── */

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 5]} intensity={0.7} color="#3b82f6" />
      <pointLight position={[-4, -2, 4]} intensity={0.35} color="#8b5cf6" />
      <pointLight position={[0, 3, -4]} intensity={0.25} color="#06b6d4" />
      {/* Rim light for robot head silhouette */}
      <pointLight position={[-3, 2, -3]} intensity={0.5} color="#c0c0e0" />
      <pointLight position={[3, 1, -3]} intensity={0.3} color="#9090b0" />

      {/* Robot bust */}
      <RobotBust />

      {/* Tech overlay — orbit rings */}
      <OrbitRing radius={2.2} tube={0.018} color="#3b82f6" opacity={0.35} rotX={Math.PI / 3} rotY={0} rotZ={0} />
      <OrbitRing radius={2.5} tube={0.013} color="#8b5cf6" opacity={0.25} rotX={0} rotY={Math.PI / 4} rotZ={Math.PI / 3} />
      <OrbitRing radius={2.8} tube={0.01} color="#06b6d4" opacity={0.18} rotX={Math.PI / 2} rotY={Math.PI / 3} rotZ={0} />

      {/* Floating data nodes */}
      <FloatingNodes />

      {/* Connection lines */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.2;
        return (
          <ConnectionLine
            key={`line-${i}`}
            start={[0, 0, 0]}
            end={[
              Math.cos(angle) * radius,
              (i % 2 === 0 ? 0.3 : -0.3),
              Math.sin(angle) * radius,
            ]}
          />
        );
      })}

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </>
  );
}

/* ─── export capture (runs inside Canvas) ─── */

function CaptureController({
  onReady,
}: {
  onReady: (state: {
    gl: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    size: { width: number; height: number };
  }) => void;
}) {
  const { gl, scene, camera, size } = useThree();

  useEffect(() => {
    onReady({ gl, scene, camera, size });
  }, [gl, scene, camera, size, onReady]);

  return null;
}

/* ─── main component ─── */

export default function Hero3D() {
  const stateRef = useRef<{
    gl: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    size: { width: number; height: number };
  } | null>(null);

  const [exportState, setExportState] = useState<"idle" | "exporting" | "done">(
    "idle"
  );

  const handleReady = useCallback(
    (s: {
      gl: THREE.WebGLRenderer;
      scene: THREE.Scene;
      camera: THREE.Camera;
      size: { width: number; height: number };
    }) => {
      stateRef.current = s;
    },
    []
  );

  const handleExport = useCallback(() => {
    if (!stateRef.current || exportState === "exporting") return;
    const { gl, scene, camera, size } = stateRef.current;

    setExportState("exporting");

    // Compute export dimensions — same aspect ratio, ~1200px tall
    const aspect = size.width / size.height;
    const targetH = 1200;
    const targetW = Math.round(targetH * aspect);

    // Store originals
    const origW = gl.domElement.width;
    const origH = gl.domElement.height;
    const origClearColor = gl.getClearColor(new THREE.Color());
    const origClearAlpha = gl.getClearAlpha();
    const cam = camera as THREE.PerspectiveCamera;
    const origAspect = cam.aspect;
    const origNear = cam.near;

    // Upscale for high-res capture
    gl.setSize(targetW, targetH, false);
    cam.aspect = targetW / targetH;
    cam.updateProjectionMatrix();

    // Opaque dark background for the export
    gl.setClearColor("#050505", 1);
    gl.render(scene, camera);

    // Capture
    gl.domElement.toBlob(
      (blob) => {
        if (blob) {
          downloadBlob(blob, "vimal-3d-hero.png");
        }

        // Restore interactive view
        gl.setSize(origW / window.devicePixelRatio, origH / window.devicePixelRatio, false);
        cam.aspect = origAspect;
        cam.updateProjectionMatrix();
        gl.setClearColor(origClearColor, origClearAlpha);
        gl.render(scene, camera);

        setExportState("done");
        setTimeout(() => setExportState("idle"), 2000);
      },
      "image/png",
      1.0
    );
  }, [exportState]);

  return (
    <div className="w-full h-full relative group/scene">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
      >
        <CaptureController onReady={handleReady} />
        <Scene />
      </Canvas>

      {/* Export button — bottom right of the 3D container */}
      <button
        onClick={handleExport}
        disabled={exportState === "exporting"}
        className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                   bg-white/[0.06] border border-white/[0.08] text-[11px] text-muted
                   hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15]
                   transition-all duration-200 opacity-0 group-hover/scene:opacity-100
                   pointer-events-auto disabled:opacity-40 disabled:pointer-events-none
                   backdrop-blur-sm cursor-pointer"
        aria-label="Export 3D scene as PNG"
      >
        <Download className="w-3.5 h-3.5" />
        {exportState === "done" ? "Saved ✓" : exportState === "exporting" ? "Rendering…" : "Export PNG"}
      </button>
    </div>
  );
}