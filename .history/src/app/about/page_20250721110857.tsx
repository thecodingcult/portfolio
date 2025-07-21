import ContentShell from '@/components/ContentShell'

export default function About() {
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-4">About Leto Hillza</h1>

      <p className="mb-6">
        I’m a <strong>Senior Staff Software Engineer at Google</strong> building the next generation of
        neuromorphic computing—custom silicon and software that blur the line between biology and machine
        cognition. Over the past seven‑plus years I’ve tackled everything from large‑scale ML infrastructure
        to edge AI accelerators, always chasing systems that learn faster, run cooler, and think smarter.
      </p>

      {/* Experience Timeline */}
      <section className="space-y-10">
        {/* Senior Staff Software Engineer */}
        <div>
          <h2 className="text-xl font-semibold">
            Senior Staff Software Engineer, Google
          </h2>
          <p className="text-sm text-muted-foreground">
            Feb&nbsp;2025 – Present • Atlanta, GA (Hybrid)
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-base leading-relaxed">
            <li>
              Collaborate with Google Research to integrate&nbsp;
              <em>spiking neural networks (SNNs)</em> into scalable production systems.
            </li>
            <li>
              Lead design and development of neuromorphic algorithms optimized for edge AI devices.
            </li>
            <li>
              Architect hybrid AI solutions that combine traditional deep‑learning pipelines with
              brain‑inspired components.
            </li>
            <li>
              Prototype and deploy low‑power AI accelerators on custom silicon, driving cross‑functional
              hardware/software efforts.
            </li>
            <li>
              Publish internal white‑papers and contribute to open‑source tooling for
              brain‑inspired computing.
            </li>
          </ul>
        </div>

        {/* Staff Software Engineer */}
        <div>
          <h2 className="text-xl font-semibold">
            Staff Software Engineer, Google
          </h2>
          <p className="text-sm text-muted-foreground">
            Feb&nbsp;2022 – Feb 2025
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Designed machine‑learning systems to optimize ad delivery and bidding strategies across
              Google Ads.
            </li>
            <li>
              Built scalable real‑time data pipelines and ML model‑training infrastructure.
            </li>
            <li>
              Launched the Budgeting Optimization System (BOS) for dynamic ad‑spend allocation using
              reinforcement learning.
            </li>
            <li>
              Improved campaign outcomes through statistical modeling and continuous experimentation.
            </li>
          </ul>
        </div>

        {/* Senior Software Engineer */}
        <div>
          <h2 className="text-xl font-semibold">
            Senior Software Engineer, Google
          </h2>
          <p className="text-sm text-muted-foreground">
            Jan&nbsp;2020 – Feb 2022
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Led a backend engineering team enhancing usability for Google Chat and Google Drive.
            </li>
            <li>
              Partnered with cross‑functional groups to identify user‑experience gaps and ship high‑impact
              improvements.
            </li>
          </ul>
        </div>

        {/* Software Engineer */}
        <div>
          <h2 className="text-xl font-semibold">
            Software Engineer, Google
          </h2>
          <p className="text-sm text-muted-foreground">
            Jan&nbsp;2018 – Jan 2020
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Enhanced Google’s recommendation systems with machine learning and large‑scale data analysis.
            </li>
            <li>
              Delivered personalized suggestions that boosted user engagement across core properties.
            </li>
          </ul>
        </div>
      </section>
    </ContentShell>
  )
}
