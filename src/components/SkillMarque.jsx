const row1 = [
  { name: "React",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind",    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Telegraf.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" },
  { name: "Git",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const row2 = [
  { name: "Node.js",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
];

const SkillCard = ({ name, logo }) => (
  <div className="flex items-center gap-3 px-5 py-3 mx-3 rounded-xl border border-cyan-800 bg-[#0f172a] min-w-max">
    <img src={logo} alt={name} className="w-7 h-7 object-contain" />
    <span className="text-cyan-300 font-semibold text-sm whitespace-nowrap">{name}</span>
  </div>
);

// Scrolling row for mobile
const MarqueeRow = ({ items, direction }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex p-3 w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}>
        {doubled.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </div>
  );
};

// Static row for bigger screens
const StaticRow = ({ items }) => (
  <div className="flex flex-wrap justify-center gap-4 py-2">
    {items.map((skill, i) => (
      <SkillCard key={i} {...skill} />
    ))}
  </div>
);

const SkillsMarquee = () => (
  <div className="w-full py-6 flex flex-col gap-4">

    {/* Mobile — scrolling */}
    <div className="block sm:hidden">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>

    {/* 600px and above — static */}
    <div className="hidden sm:flex sm:flex-col gap-4">
      <StaticRow items={row1} />
      <StaticRow items={row2} />
    </div>

  </div>
);

export default SkillsMarquee;