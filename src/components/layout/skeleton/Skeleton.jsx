import React from 'react';
import { StyledSkeleton } from './StyledSkeleton';

export const Skeleton = () => {
  return (
    <StyledSkeleton>
      <div className="skeleton">
        <div className="image"></div>
        <div className="content">
          <span></span>
          <span></span>
        </div>
      </div>
    </StyledSkeleton>
  );
};
