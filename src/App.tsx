/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#050608] flex flex-col overflow-hidden">
      <iframe
        id="asteroids-frame"
        src="/asteroids.html"
        className="w-full flex-1 border-0"
        title="Asteroids Vector Game"
        allow="autoplay"
      />
    </div>
  );
}
