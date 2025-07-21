import ContentShell from '@/components/ContentShell'
import TimelineItem from '@/components/TimelineItem'
import { Brain, PartyPopper, Rocket } from 'lucide-react'

export default function About() {
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-2">About Leto Hillza</h1>
      <p className="text-lg text-muted-foreground mb-6">Turning neurons into playful algorithms.</p>

      <p className="mb-6">
        I’m a <strong>Senior Staff Software Engineer at Google</strong> building the next generation of
        neuromorphic computing—custom silicon and software that blur the line between biology and machine
        cognition. Over the past seven‑plus years I’ve tackled everything from large‑scale ML infrastructure
        to edge AI accelerators, always chasing systems that learn faster, run cooler, and think smarter.
      </p>

      {/* Experience Timeline */}
      <section className="space-y-10">
        <TimelineItem icon={PartyPopper} title="Senior Staff Software Engineer, Google" period="Feb 2025 – Present • Atlanta, GA (Hybrid)">
          <li>
            Collaborate with Google Research to integrate&nbsp;
            <em>spiking neural networks (SNNs)</em> into scalable production systems.
          </li>
          <li>Lead design and development of neuromorphic algorithms optimized for edge AI devices.</li>
          <li>
            Architect hybrid AI solutions that combine traditional deep‑learning pipelines with
            brain‑inspired components.
          </li>
          <li>
            Prototype and deploy low‑power AI accelerators on custom silicon, driving cross‑functional
            hardware/software efforts.
          </li>
          <li>Publish internal white‑papers and contribute to open‑source tooling for brain‑inspired computing.</li>
        </TimelineItem>

        <TimelineItem icon={Rocket} title="Staff Software Engineer, Google" period="Feb 2022 – Feb 2025">
          <li>
            Designed machine‑learning systems to optimize ad delivery and bidding strategies across Google Ads.
          </li>
          <li>Built scalable real‑time data pipelines and ML model‑training infrastructure.</li>
          <li>
            Launched the Budgeting Optimization System (BOS) for dynamic ad‑spend allocation using reinforcement learning.
          </li>
          <li>Improved campaign outcomes through statistical modeling and continuous experimentation.</li>
        </TimelineItem>

        <TimelineItem icon={Brain} title="Senior Software Engineer, Google" period="Jan 2020 – Feb 2022">
          <li>Led a backend engineering team enhancing usability for Google Chat and Google Drive.</li>
          <li>Partnered with cross‑functional groups to identify user‑experience gaps and ship high‑impact improvements.</li>
        </TimelineItem>

        <TimelineItem icon={Brain} title="Software Engineer, Google" period="Jan 2018 – Jan 2020">
          <li>Enhanced Google’s recommendation systems with machine learning and large‑scale data analysis.</li>
          <li>Delivered personalized suggestions that boosted user engagement across core properties.</li>
        </TimelineItem>
      </section>
    </ContentShell>
  )
}
