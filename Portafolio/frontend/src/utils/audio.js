let audioCtx = null;

export const playClickSound = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const startTime = audioCtx.currentTime;
  const duration = 0.9;
  const freq = 261.63; // Do central (C4) - Clásico, elegante y neutro

  // Osc 1: Tono puro y claro (Voz principal lírica)
  const osc1 = audioCtx.createOscillator();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, startTime);
  
  // Osc 2: Armónicos más graves (Cuerpo, como un violonchelo o bajo operístico)
  const osc2 = audioCtx.createOscillator();
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(freq / 2, startTime);
  
  // Osc 3: Un toque de la quinta justa (Sol) para dar un sonido majestuoso
  const osc3 = audioCtx.createOscillator();
  osc3.type = 'sine';
  osc3.frequency.setValueAtTime(freq * 1.5, startTime);

  const masterGain = audioCtx.createGain();
  
  // LFO para el Vibrato (El efecto característico de la Ópera y las cuerdas frotadas)
  const lfo = audioCtx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.setValueAtTime(5, startTime); // Frecuencia de vibrato clásico
  
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.setValueAtTime(0, startTime);
  lfoGain.gain.linearRampToValueAtTime(freq * 0.015, startTime + 0.2); // El vibrato entra suavemente
  
  lfo.connect(lfoGain);
  lfoGain.connect(osc1.frequency);
  lfoGain.connect(osc2.frequency);
  lfoGain.connect(osc3.frequency);

  // Envolvente de volumen: Ataque rápido pero sin "clic" y Decaimiento largo y majestuoso
  masterGain.gain.setValueAtTime(0, startTime);
  masterGain.gain.linearRampToValueAtTime(0.12, startTime + 0.05);
  masterGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  
  // Balanceo de los tres osciladores para lograr el "color" de sonido perfecto
  const gain1 = audioCtx.createGain(); gain1.gain.value = 1.0;
  const gain2 = audioCtx.createGain(); gain2.gain.value = 0.6; // Triángulo para dar cuerpo
  const gain3 = audioCtx.createGain(); gain3.gain.value = 0.15; // Quinta muy sutil para brillo

  osc1.connect(gain1).connect(masterGain);
  osc2.connect(gain2).connect(masterGain);
  osc3.connect(gain3).connect(masterGain);
  
  masterGain.connect(audioCtx.destination);
  
  lfo.start(startTime);
  osc1.start(startTime);
  osc2.start(startTime);
  osc3.start(startTime);
  
  lfo.stop(startTime + duration);
  osc1.stop(startTime + duration);
  osc2.stop(startTime + duration);
  osc3.stop(startTime + duration);
};
