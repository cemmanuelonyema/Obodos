import React from 'react';
import { StyledSkeleton } from './StyledSkeleton';

export const SelectSkeleton = () => {
  return (
    <StyledSkeleton>
      <div className="container select">
        <div className="image"></div>
        <div className="details">
          <span></span>
          <div className="data">
            <div className="data-right">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="data-left">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="borders">
            <span></span>
          </div>
        </div>
      </div>
    </StyledSkeleton>
  );
};
