
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";

function Cube() {
  return (
    <Float speed={2} rotationIntensity={1.5}>
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>
    </Float>
  );
}

export default function App() {
  return (
    <div className="container">

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1>3D Fullstack Portfolio</h1>
          <p>
            Modern portfolio website dengan React, Three.js,
            Framer Motion, dan UI futuristik.
          </p>

          <button>Explore</button>
        </motion.div>

        <Canvas className="canvas">
          <ambientLight intensity={1.5} />
          <directionalLight position={[2,2,2]} />
          <Cube />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </section>

      <section className="about">
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:1 }}
        >
          <h2>Tentang Saya</h2>
          <p>
            Saya developer yang fokus pada frontend modern,
            backend development, UI/UX dan pengalaman 3D web.
          </p>
        </motion.div>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="cards">

          <motion.div
            whileHover={{ scale:1.05 }}
            className="card"
          >
            <h3>AI Dashboard</h3>
            <p>Dashboard modern dengan animasi realtime.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale:1.05 }}
            className="card"
          >
            <h3>Roblox Game</h3>
            <p>Game open world cinematic voice chat.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale:1.05 }}
            className="card"
          >
            <h3>3D Website</h3>
            <p>Website interaktif berbasis Three.js.</p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
