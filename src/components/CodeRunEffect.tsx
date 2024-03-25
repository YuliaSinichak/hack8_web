"use client"
import { useEffect, useRef } from "react";

const CodeRun: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth/2);
        let height = (canvas.height = window.innerHeight/5);
        let columns = width; // Number of columns based on character width
        const characters = "hackath0n::8";
        const charArray = characters.split("");
        let drops: number[] = [];

        let region = new Path2D();
        region.moveTo(0, 0);
        region.lineTo(width, 0);
        region.lineTo(0, height);
        region.lineTo(0, 0);
        region.closePath();

        let region2 = new Path2D();
        region2.moveTo(width, 0);
        region2.lineTo(0, height);
        region2.lineTo(width, height);
        region2.lineTo(width, 0);
        region2.closePath();


         // Initialize drops
         for (let i = 0; i < columns; i++) {
            drops[i] = 1;
            }
    
    
            let frameRate = 30; // Adjust the frame rate (lower value = slower speed)
            let lastFrameTime = Date.now();
            const draw = () => {
                
                // Create a translucent black rectangle to create the fading effect
                ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
                ctx.fill(region);
                ctx.fillStyle = "#0f0";// Green color for characters
               
    
                // Draw the characters
                ctx.font = "15px monospace";
                for (let i = 0; i < drops.length; i++) {
                  const text = charArray[Math.floor(Math.random() * charArray.length)];
                  ctx.fillText(text, i * 20, drops[i] * 20);
                // Reset drops when it reaches the right edge of the canvas
                if (drops[i] * 20 >= width && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
                }
                ctx.fillStyle = "rgba(0, 0, 0, 100)";
                ctx.fill(region2);
            };
    
            const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastFrameTime;
    
            // Update the animation only if enough time has passed
            if (elapsedTime > 1000 / frameRate) {
                draw();
                lastFrameTime = currentTime;
            }
    
            requestAnimationFrame(animate);
            };
    
            animate();
    
            // Update canvas dimensions on window resize
            const handleResize = () => {
            width = canvas.width = window.innerWidth/2;
            height = canvas.height = window.innerHeight/5;
            draw();
            };
    
            const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
            if (!isMobileDevice) {
            window.addEventListener("resize", handleResize);
            }
    
            return () => {
            if (!isMobileDevice) {
                window.removeEventListener("resize", handleResize);
            }
            };
        }, []);
    
        return <canvas className="matrix-canvas" ref={canvasRef}></canvas>;
    };
    
    export default CodeRun;