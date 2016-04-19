"use strict";
import React from 'react';

export function renderLogo(svg){
  return (
    <span dangerouslySetInnerHTML={{__html: svg }} ></span>
  );
}
