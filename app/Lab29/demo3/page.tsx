"use client";

import { useEffect, useRef, useState } from "react";

const gridSize = 20;
const tileCount = 20;

type Point = {
  x: number;
  y: number;
};

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [dx, setDx] = useState(1);
  const [dy, setDy] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && dy !== 1) {
        setDx(0);
        setDy(-1);
      }
      if (e.key === "ArrowDown" && dy !== -1) {
        setDx(0);
        setDy(1);
      }
      if (e.key === "ArrowLeft" && dx !== 1) {
        setDx(-1);
        setDy(0);
      }
      if (e.key === "ArrowRight" && dx !== -1) {
        setDx(1);
        setDy(0);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dx, dy]);

  // game loop
  useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        if (gameOver) return prevSnake;

        const head = {
          x: prevSnake[0].x + dx,
          y: prevSnake[0].y + dy,
        };

        // wall collision
        if (
          head.x < 0 ||
          head.x >= tileCount ||
          head.y < 0 ||
          head.y >= tileCount
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // self collision
        for (let s of prevSnake) {
          if (s.x === head.x && s.y === head.y) {
            setGameOver(true);
            return prevSnake;
          }
        }

        const newSnake = [head, ...prevSnake];

        // food collision
        if (head.x === food.x && head.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount),
          });
        } else {
          newSnake.pop();
        }

        draw(newSnake);
        return newSnake;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [dx, dy, food, gameOver]);

  const draw = (snakeBody: Point[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background - Soft Mint Wash
    ctx.fillStyle = "#e8f7f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle Grid Lines
    ctx.strokeStyle = "#d1ede3";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath(); ctx.moveTo(i * gridSize, 0); ctx.lineTo(i * gridSize, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i * gridSize); ctx.lineTo(canvas.width, i * gridSize); ctx.stroke();
    }

    // snake - Emerald
    ctx.fillStyle = "#10b981";
    snakeBody.forEach((s, index) => {
      // Rounded effect for head
      if (index === 0) ctx.fillStyle = "#059669";
      else ctx.fillStyle = "#10b981";
      
      ctx.beginPath();
      ctx.roundRect(s.x * gridSize + 1, s.y * gridSize + 1, gridSize - 2, gridSize - 2, 4);
      ctx.fill();
    });

    // food - Coral/Rose
    ctx.fillStyle = "#fb7185";
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize/2, food.y * gridSize + gridSize/2, gridSize/2 - 2, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    draw(snake);
  }, []);

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    });
    setDx(1);
    setDy(0);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfe] bg-[radial-gradient(45%_45%_at_50%_50%,#f0f4ff_0%,#ffffff_100%)] flex items-center justify-center p-6 font-sans">
      
      <div className="bg-white/90 backdrop-blur-lg border border-emerald-100 shadow-2xl rounded-[2.5rem] p-8 flex flex-col items-center relative overflow-hidden">
        
        {/* Header */}
        <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-emerald-800 uppercase tracking-widest">Snake Game</h1>
            <p className="text-emerald-600/60 text-xs font-bold">GAME PORTAL EDITION</p>
        </div>

        {/* Canvas Container with Game Over Overlay */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-emerald-50 shadow-inner">
            <canvas
                ref={canvasRef}
                width={gridSize * tileCount}
                height={gridSize * tileCount}
                className="block"
            />

            {gameOver && (
                <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 transition-all">
                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center border border-emerald-100">
                        <h2 className="text-3xl font-black text-rose-500 mb-2 uppercase tracking-tight">Game Over</h2>
                        <p className="text-slate-400 text-sm mb-6">Better luck next time!</p>
                        <button
                            onClick={restartGame}
                            className="w-full py-4 bg-[#66cdaa] hover:bg-[#57b998] text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95 px-12 uppercase tracking-wider"
                        >
                            Restart
                        </button>
                    </div>
                </div>
            )}
        </div>

        {/* Controls Hint */}
        <div className="mt-6 flex gap-4 text-[10px] font-bold text-emerald-700/40 uppercase tracking-tighter">
            <span>Arrow Keys to Move</span>
            <span>•</span>
            <span>Score: {snake.length - 1}</span>
        </div>
      </div>
    </div>
  );
}