"use client"

import { Brain, PartyPopper, Rocket } from 'lucide-react'

import ContentShell from '@/components/ContentShell'
import TimelineItem from '@/components/TimelineItem'

// Abstracting experience data into an array
const experiences = [
  {
    icon: PartyPopper,
    title: "Senior Staff Software Engineer, Google",
    period: "Feb 2025 – Present • Atlanta, GA (Hybrid)",
    points: [
      "Collaborate with Google Research to integrate spiking neural networks (SNNs) into scalable production systems.",
      "Lead design and development of neuromorphic algorithms optimized for edge AI devices.",
      "Architect hybrid AI solutions that combine traditional deep-learning pipelines with brain-inspired components.",
      "Prototype and deploy low-power AI accelerators on custom silicon, driving cross-functional hardware/software efforts.",
      "Publish internal white-papers and contribute to open-source tooling for brain-inspired computing.",
    ],
  },
  {
    icon: Rocket,
    title: "Staff Software Engineer, Google",
    period: "Feb 2022 – Feb 2025",
    points: [
      "Designed machine-learning systems to optimize ad delivery and bidding strategies across Google Ads.",
      "Built scalable real-time data pipelines and ML model-training infrastructure.",
      "Launched the Budgeting Optimization System (BOS) for dynamic ad-spend allocation using reinforcement learning.",
      "Improved campaign outcomes through statistical modeling and continuous experimentation.",
    ],
  },
  {
    icon: Brain,
    title: "Senior Software Engineer, Google",
    period: "Jan 2020 – Feb 2022",
    points: [
      "Led a backend engineering team enhancing usability for Google Chat and Google Drive.",
      "Partnered with cross-functional groups to identify user-experience gaps and ship high-impact improvements.",
    ],
  },
  {
    icon: Brain,
    title: "Software Engineer, Google",
    period: "Jan 2018 – Jan 2020",
    points: [
      "Enhanced Google’s recommendation systems with machine learning and large-scale data analysis.",
      "Delivered personalized suggestions that boosted user engagement across core properties.",
    ],
  },
]

export default function About() {
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-2">About Leto Hillza</h1>
      <p className="text-lg text-muted-foreground mb-6">Google</p>

      <p className="mb-6">
        I’m a <strong>Senior Staff Software Engineer at Google</strong> building the next generation of
        neuromorphic computing—custom silicon and software that blur the line between biology and machine
        cognition. Over the past seven‑plus years I’ve tackled everything from large‑scale ML infrastructure
        to edge AI accelerators, always chasing systems that learn faster, run cooler, and think smarter.
      </p>

      {/* Experience Timeline */}
      <ol className="relative border-l border-border/50">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} icon={exp.icon} title={exp.title} period={exp.period}>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </TimelineItem>
        ))}
      </ol>
    </ContentShell>
  )
}
