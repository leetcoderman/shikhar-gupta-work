import React from 'react';
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion';

const ease = Easing.bezier(0.18, 0.75, 0.2, 1);
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' };

const stages = [
  { number: '01', title: 'UNDERSTAND', line: 'Find the actual constraint', x: 72 },
  { number: '02', title: 'BUILD', line: 'Make the solution real', x: 326 },
  { number: '03', title: 'MEASURE', line: 'Prove the outcome', x: 580 },
  { number: '04', title: 'REITERATE', line: 'Learn and improve', x: 824 },
];

export const ProcessReel = () => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 15, 188, 209], [0, 1, 1, 0], clamp);
  const progress = interpolate(frame, [26, 166], [0, 1], { ...clamp, easing: ease });

  return (
    <AbsoluteFill style={{ backgroundColor: '#26352f', color: '#f5f3ed', fontFamily: 'Arial, sans-serif', opacity: fade, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(223,255,128,.035) 1px, transparent 1px),linear-gradient(90deg, rgba(223,255,128,.035) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div style={{ position: 'absolute', left: 72, top: 65, fontSize: 15, fontWeight: 700, letterSpacing: 3, color: '#dfff80' }}>FROM PROBLEM TO PROGRESS</div>
      <div style={{ position: 'absolute', left: 72, top: 110, fontSize: 40, fontWeight: 700, letterSpacing: -2 }}>A clearer way forward.</div>
      <div style={{ position: 'absolute', left: 72, top: 316, width: 810, height: 2, backgroundColor: '#607165' }} />
      <div style={{ position: 'absolute', left: 72, top: 316, width: 810 * progress, height: 2, backgroundColor: '#dfff80' }} />
      {stages.map((stage, index) => {
        const start = 20 + index * 36;
        const appear = interpolate(frame, [start, start + 18], [0, 1], { ...clamp, easing: ease });
        const lift = interpolate(frame, [start, start + 18], [25, 0], { ...clamp, easing: ease });
        const active = interpolate(frame, [start + 8, start + 28], [0, 1], clamp);
        return (
          <React.Fragment key={stage.number}>
            <div style={{ position: 'absolute', left: stage.x, top: 288, width: 58, height: 58, borderRadius: 30, backgroundColor: active > 0.9 ? '#dfff80' : '#36483c', border: '2px solid #dfff80', color: '#26352f', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16, fontWeight: 700, opacity: appear, scale: interpolate(frame, [start, start + 18], [0.6, 1], { ...clamp, easing: ease }) }}>{stage.number}</div>
            <div style={{ position: 'absolute', left: index === 3 ? 707 : stage.x, top: 382, width: 225, textAlign: index === 3 ? 'right' : 'left', opacity: appear, translate: '0 ' + lift + 'px' }}>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>{stage.title}</div>
              <div style={{ fontSize: 16, color: '#bbcabd' }}>{stage.line}</div>
            </div>
          </React.Fragment>
        );
      })}
      <div style={{ position: 'absolute', right: 75, bottom: 45, color: '#9eb3a0', fontSize: 12, letterSpacing: 2, fontWeight: 700 }}>SHIKHAR GUPTA · PRODUCT / GROWTH / AI</div>
    </AbsoluteFill>
  );
};
