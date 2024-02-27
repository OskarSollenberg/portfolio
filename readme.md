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

\\ black \\
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
