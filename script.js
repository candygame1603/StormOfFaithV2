// Tailwind dark mode config
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {}
  }
}

let vantaEffect;

// Theme switcher initialization
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } 
  //else if (prefersDark) {
  //  document.documentElement.classList.add('dark');
  //}
  
  updateThemeIcon();
});

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  
  if (vantaEffect) {
    vantaEffect.destroy();
  }

  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  
  if (isDark) {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');

      vantaEffect = VANTA.CLOUDS({
        el: "#hero-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x19117a,
        cloudColor: 0x69699d,
        cloudShadowColor: 0x0,
        sunColor: 0x0,
        sunGlareColor: 0x0,
        sunlightColor: 0x0
      });
  } else {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');


      vantaEffect = VANTA.CLOUDS({
        el: "#hero-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('opacity-0', 'translate-y-8');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

// VANTA effects are now handled by the initializeVantaEffect function
