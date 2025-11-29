
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
      content: `
        <p>It was a dark and stormy night in the server room. The memory usage graphs were spiking like crazy.</p>
        <p>I equipped my debugging sword and dived into the heap snapshots. The enemy was elusive, hiding within a closure that refused to let go of its references.</p>
        <h3>The Battle</h3>
        <p>After hours of tracing, I found the culprit: a global event listener that was never removed when components unmounted. A classic rookie mistake, but deadly at scale.</p>
        <h3>The Solution</h3>
        <p>I implemented a proper cleanup function in the useEffect hook. The memory usage dropped instantly. The kingdom was safe once again.</p>
      `,
      tags: ["Debugging", "NodeJS"]
    },
    {
      id: 2,
      title: "New Skill Acquired: Rust",
      date: "2024-02-10",
      snippet: "My journey into low-level programming and memory safety.",
      content: `
        <p>I've always relied on the Garbage Collector to clean up my mess. But I wanted more power. I wanted control.</p>
        <p>Enter Rust. The borrow checker was a harsh mistress at first, rejecting my code at every turn. "You cannot borrow this as mutable!" it screamed.</p>
        <h3>Leveling Up</h3>
        <p>Slowly, I began to understand ownership. I learned to love the compiler. It wasn't fighting me; it was protecting me from myself.</p>
        <p>Now, I can write safe, concurrent code without fear of data races. My power level has increased significantly.</p>
      `,
      tags: ["Learning", "Rust"]
    },
    {
      id: 3,
      title: "The Great Migration",
      date: "2024-01-05",
      snippet: "Moving our entire infrastructure from AWS to GCP.",
      content: `
        <p>The old castle (AWS) was getting too expensive to maintain. The king ordered a migration to the new lands of Google Cloud.</p>
        <h3>The Strategy</h3>
        <p>We used Terraform to map out the new territory. We containerized everything with Docker to ensure the villagers (microservices) could move easily.</p>
        <h3>The Outcome</h3>
        <p>The migration took 3 days. We experienced zero downtime. The cost savings were immediate. A successful campaign indeed.</p>
      `,
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
