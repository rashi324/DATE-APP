import { useState } from "react";

export default function DateInvite() {
  const [response, setResponse] = useState("");
  const [celebrate, setCelebrate] = useState(false);

  const handleClick = (type) => {
    setCelebrate(true);
    setResponse(
      type === "yes"
        ? "💖 Yay! YOU said YES! Get ready for a special outing together!"
        : "💌 Oh! ayanarashi always be together ❤️"
    );
  };

  const handleBack = () => {
    setCelebrate(false);
    setResponse("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 p-6 relative overflow-hidden transition-all duration-700">
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg animate-pulse">
        Ayanuoo! ❤️
      </h1>
      <p className="text-2xl text-white mb-8 text-center drop-shadow-md">
        Dear wife, would you like to go on a special outing with me for life long?
      </p>

      {/* Buttons */}
      {!celebrate && (
        <div className="flex gap-8 relative w-full max-w-md">
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

      {/* Celebration Popup */}
      {celebrate && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-pink-600 via-pink-700 to-pink-800 bg-opacity-90 backdrop-blur-sm animate-fadeIn">
          <div className="flex gap-6">
            <div className="w-32 h-32 bg-red-500 rounded-full shadow-lg animate-bounce transform scale-125 flex items-center justify-center text-white text-4xl">
              ❤️
            </div>
            <div className="w-32 h-32 bg-purple-500 rounded-full shadow-lg animate-bounce transform scale-125 flex items-center justify-center text-white text-4xl">
              ❤️
            </div>
          </div>

          <p className="mt-10 text-3xl font-extrabold text-white text-center animate-bounce drop-shadow-lg px-6">
            {response}
          </p>

          {/* Back to Home Button */}
          <button
            onClick={handleBack}
            className="mt-10 px-6 py-3 bg-white text-pink-700 font-semibold rounded-full shadow-lg hover:bg-pink-100 transition transform hover:scale-105"
          >
            back to rashi
          </button>
        </div>
      )}

      {/* Floating hearts */}
      {celebrate && (
        <div className="pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl text-red-200 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 3}s`,
                top: "100%",
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.2);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: 1;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 0.7s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
