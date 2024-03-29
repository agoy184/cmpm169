// M_1_5_03
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * noise values (noise 3d) are used to animate a bunch of agents.
 *
 * KEYS
 * 1-2                 : switch noise mode
 * space               : new noise seed
 * backspace           : clear screen
 * s                   : save png
 */
'use strict';

var sketch = function(p) {
  var agents = [];
  var agentCount = 600;
  var noiseScale = 123;
  var noiseStrength = 2.91;
  var noiseZRange = 10.001;
  var noiseZVelocity = 0.1;
  var overlayAlpha = 10;
  var agentAlpha = 900;
  var strokeWidth = 1.8;
  var drawMode = 1;

  p.setup = function() {
    p.canvasContainer = $("#canvas-container");

    p.createCanvas(p.windowWidth, p.windowHeight);

    for (var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);
    }
  };

  p.draw = function() {
    p.background(166, 246, 255)
    p.fill(97, 131, 255);
    p.rect(0, 650, 10000, 10000)
    p.fill(0, overlayAlpha);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    // Draw agents
    p.stroke(97, 131, 255);
    for (var i = 0; i < agentCount; i++) {
      if (drawMode == 1) {
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      } else {
        agents[i].update2(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      }
    }
  };

  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    if (p.key == ' ') {
      var newNoiseSeed = p.floor(p.random(10000));
      console.log('newNoiseSeed', newNoiseSeed);
      p.noiseSeed(newNoiseSeed);
    }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
  };

};

var myp5 = new p5(sketch);
