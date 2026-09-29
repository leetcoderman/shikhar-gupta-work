import React from 'react';
import { registerRoot, Composition } from 'remotion';
import { ProcessReel } from './process-reel';

const Root = () => (
  <Composition
    id="ProcessReel"
    component={ProcessReel}
    durationInFrames={210}
    fps={30}
    width={960}
    height={600}
  />
);

registerRoot(Root);
