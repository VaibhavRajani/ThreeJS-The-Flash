import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, LoopOnce } from "three";

useGLTF.preload("/flash.glb");

export default function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/flash.glb");
  const { actions } = useAnimations(animations, scene);
  const [isJumpingDown, setIsJumpingDown] = useState(true);
  const [animationState, setAnimationState] = useState("");

  useEffect(() => {
    if (group.current) {
      group.current.position.y = 5;
      group.current.position.x = 0.2;
    }
    const jumpDownAction = actions["jumpDown"];
    if (jumpDownAction) {
      jumpDownAction.play();
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (isJumpingDown && group.current) {
      if (group.current.position.y > -1.8) {
        group.current.position.y -= delta * 5;
      } else {
        setIsJumpingDown(false);
        if (actions["jumpDown"]) {
          actions["jumpDown"].stop();
        }
        if (actions["waveHello"]) {
          actions["waveHello"].play();
        }
        setAnimationState("standing");
      }
    }
  });

  useFrame(() => {
    const scrollOffset =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);

    const runAction = actions["walk"];
    const punchAction = actions["punch"];

    if (animationState === "standing" && scrollOffset > 0) {
      if (actions["waveHello"]) {
        actions["waveHello"].play();
      }
      if (runAction) {
        runAction.play();
      }
      setAnimationState("running");
    }

    if (animationState === "running") {
      const offset =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        3;
      if (runAction) {
        runAction.time = runAction.getClip().duration * offset;
      }
    }

    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50 &&
      animationState !== "waving"
    ) {
      if (runAction) {
        runAction.stop();
      }
      if (punchAction) {
        punchAction.reset().play();
      }
      setAnimationState("waving");
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
