
export const portfolioData = {
  hero: {
    name: "Rizal Achmad Saputra",
    role: "Full Stack & Mobile Dev",
    level: 99,
    status: "READY PLAYER ONE",
  },
  stats: {
    hp: "100/100",
    mp: "MAX",
    exp: "999999",
    class: "Technomancer",
    skills: [
      { name: "ReactJS", power: 90, icon: "⚡" },
      { name: "NodeJS", power: 85, icon: "🟢" },
      { name: "Mobile App", power: 88, icon: "📱" },
      { name: "Database", power: 80, icon: "💾" },
      { name: "UI/UX", power: 75, icon: "🎨" },
      { name: "DevOps", power: 70, icon: "⚙️" },
    ]
  },
  quests: [
    {
      id: 1,
      title: "E-Commerce Empire",
      type: "Web App",
      difficulty: "Hard",
      description: "A full-stack marketplace with real-time inventory.",
      loot: ["React", "Node", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      id: 2,
      title: "Health Tracker Pro",
      type: "Mobile App",
      difficulty: "Medium",
      description: "Cross-platform mobile app for tracking daily fitness stats.",
      loot: ["React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 3,
      title: "Crypto Dashboard",
      type: "Web App",
      difficulty: "Expert",
      description: "Real-time cryptocurrency analytics and trading interface.",
      loot: ["Next.js", "WebSockets"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80"
    }
  ],
  guilds: [
    {
      id: 1,
      name: "Tech Titans Corp",
      role: "Senior Mage (Dev)",
      period: "2022 - PRESENT",
      description: "Leading the frontend battalion and architecting spellbooks (libraries).",
      icon: "🏰"
    },
    {
      id: 2,
      name: "Startup Dungeon",
      role: "Mercenary (Freelance)",
      period: "2020 - 2022",
      description: "Completed various high-level bounties for international clients.",
      icon: "⚔️"
    },
    {
      id: 3,
      name: "Junior Academy",
      role: "Apprentice",
      period: "2018 - 2020",
      description: "Learned the basic arts of coding and server management.",
      icon: "📜"
    }
  ],
  logs: [
    {
      id: 1,
      title: "Defeating the Bug King",
      date: "2024-03-15",
      snippet: "How I solved a critical memory leak in production...",
      tags: ["Debugging", "NodeJS"]
    },
    {
      id: 2,
      title: "New Skill Acquired: Rust",
      date: "2024-02-10",
      snippet: "My journey into low-level programming and memory safety.",
      tags: ["Learning", "Rust"]
    },
    {
      id: 3,
      title: "The Great Migration",
      date: "2024-01-05",
      snippet: "Moving our entire infrastructure from AWS to GCP.",
      tags: ["DevOps", "Cloud"]
    }
  ],
  reputation: [
    {
      id: 1,
      name: "King Arthur",
      role: "CEO of Camelot",
      message: "Rizal is the best wizard we've ever hired. His code is magic!",
      avatar: "👑"
    },
    {
      id: 2,
      name: "Lady Sarah",
      role: "Product Owner",
      message: "He delivered the quest items (features) way before the deadline.",
      avatar: "👸"
    }
  ],
  contact: {
    email: "rizal@example.com",
    github: "github.com/rizal",
    linkedin: "linkedin.com/in/rizal"
  }
};
