npm list - watch downloaded dependencies

\\ white \\
const startingMeshValues = useSpring({
scale: isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8],
color: "white",
thickness: 1,
roughness: isHovered ? 2 : 0,
transmission: 1,
ior: 0.9,
chromaticAberration: 1,
backside: true,
config: { tension: 100, friction: 20 },
});

\\ orange \\
const startingMeshValues = useSpring({
scale: isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8],
color: "#F97315",
thickness: 0.2,
roughness: isHovered ? 2 : 0,
transmission: 1,
ior: 1,
chromaticAberration: 1,
backside: true,
config: { tension: 80, friction: 10 },
});

\\ new orange \\
const startingMeshValues = useSpring({
scale: isHovered ? [1.2, 1.2, 1.2] : [0.9, 0.9, 0.9], // Larger scale when hovered
color: "#FF5733",
thickness: 0.2,
roughness: isHovered ? 2 : 0,
transmission: 1,
ior: 1,
chromaticAberration: 1,
backside: true,
config: { tension: 100, friction: 20 },
});

\\ distorted \\
const startingMeshValues = useSpring({
scale: isHovered ? [1.3, 1.3, 1.3] : [0.7, 0.7, 0.7], // Larger scale when hovered
color: "#FF5733",
thickness: 0.2,
roughness: isHovered ? 3 : 1, // More roughness when hovered
transmission: 1,
ior: 1,
chromaticAberration: 1,
backside: true,
config: { tension: 100, friction: 20 },
});
