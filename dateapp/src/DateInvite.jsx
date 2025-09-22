import { useState, useEffect } from "react";

export default function DateInvite() {
  const [response, setResponse] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleClick = (type) => {
    setCelebrate(true);
    setResponse(
      type === "yes"
        ? "💖 Yay! YES YES! Get ready for a special outing together!"
        : "💌 Awww! ayanarashi always be together ❤️"
    );

    // Generate confetti
    const confettiArray = [...Array(50)].map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      size: 5 + Math.random() * 10,
      duration: 3 + Math.random() * 4,
    }));
    setConfetti(confettiArray);
  };

  const handleBack = () => {
    setCelebrate(false);
    setResponse("");
    setConfetti([]);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 p-6 relative overflow-hidden transition-all duration-700">
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg animate-pulse">
        Ayanuoo! ❤️
      </h1>
      <p className="text-2xl text-white mb-8 text-center drop-shadow-md">
        Dear wife, would you like to go on a special outing with me for life long?
      </p>

      {/* Buttons */}
      {!celebrate && (
        <div className="flex gap-8 w-full max-w-md">
          <button
            onClick={() => handleClick("yes")}
            className="px-8 py-4 w-1/2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transform transition-all duration-500"
          >
            Yes
          </button>
          <button
            onClick={() => handleClick("no")}
            className="px-8 py-4 w-1/2 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transform transition-all duration-500"
          >
            No
          </button>
        </div>
      )}

      {/* Fullscreen Celebration Popup */}
      {celebrate && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-tr from-pink-600 via-pink-700 to-pink-800 bg-opacity-95 backdrop-blur-md animate-fadeIn">
          {/* Hearts */}
          <div className="flex gap-6 mb-8">
            <div className="w-32 h-32 bg-red-500 rounded-full shadow-lg animate-bounce transform scale-125 flex items-center justify-center text-white text-4xl">
              ❤️
            </div>
            <div className="w-32 h-32 bg-purple-500 rounded-full shadow-lg animate-bounce transform scale-125 flex items-center justify-center text-white text-4xl">
              ❤️
            </div>
          </div>

          {/* Response */}
          <p className="text-3xl font-extrabold text-white text-center animate-bounce drop-shadow-lg px-6">
            {response}
          </p>

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mt-10 px-6 py-3 bg-white text-pink-700 font-semibold rounded-full shadow-lg hover:bg-pink-100 transition transform hover:scale-105"
          >
            Back to Rashii
          </button>

          {/* Confetti */}
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute rounded-full opacity-80 animate-fallInfinite"
              style={{
                left: `${c.left}%`,
                width: `${c.size}px`,
                height: `${c.size}px`,
                backgroundColor: c.color,
                animationDuration: `${c.duration}s`,
              }}
            />
          ))}

          {/* Floating hearts */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl text-red-200 animate-floatInfinite"
              style={{
                left: `${Math.random() * 100}%`,
                top: "100%",
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }
        .animate-floatInfinite {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fallInfinite {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
