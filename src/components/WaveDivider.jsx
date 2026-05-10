export default function WaveDivider({ flip = false, topColor = '#ffffff', bottomColor = '#f1f5f9', variant = 1 }) {
  const waves = {
    1: (
      <path
        d="M0,64 C180,160 360,0 540,80 C720,160 900,0 1080,64 C1260,128 1440,32 1440,32 L1440,160 L0,160 Z"
        fill={bottomColor}
      />
    ),
    2: (
      <>
        <path
          d="M0,96 C240,160 480,32 720,96 C960,160 1200,32 1440,96 L1440,160 L0,160 Z"
          fill={bottomColor}
          opacity="0.5"
        />
        <path
          d="M0,128 C360,64 720,160 1080,96 C1260,64 1380,128 1440,112 L1440,160 L0,160 Z"
          fill={bottomColor}
        />
      </>
    ),
    3: (
      <path
        d="M0,32 C120,80 240,0 360,48 C480,96 600,16 720,48 C840,80 960,0 1080,32 C1200,64 1320,16 1440,32 L1440,160 L0,160 Z"
        fill={bottomColor}
      />
    ),
  }

  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ transform: flip ? 'scaleY(-1)' : 'none', marginBottom: flip ? '-1px' : '0', marginTop: flip ? '0' : '-1px' }}
    >
      <svg
        viewBox="0 0 1440 160"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        style={{ display: 'block', background: topColor }}
      >
        {waves[variant]}
      </svg>
    </div>
  )
}
