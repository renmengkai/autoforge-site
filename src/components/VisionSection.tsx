"use client";

import { motion } from "motion/react";
import { Lightning, TrendUp, Users, Globe } from "@phosphor-icons/react";

const stats = [
  { icon: Lightning, value: "10×", label: "开发效率提升" },
  { icon: TrendUp, value: "90%", label: "缺陷自动拦截" },
  { icon: Users, value: "70%", label: "人力聚焦创造" },
  { icon: Globe, value: "∞", label: "持续交付能力" },
];

export function VisionSection() {
  return (
    <section id="vision" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_80%,rgba(99,102,241,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(0,229,255,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase mb-4 block">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8">
            改变软件行业的
            <br />
            <span className="text-gradient">生产方式</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[60ch] mb-6">
            过去三十年，软件行业始终停留在手工作坊阶段——依赖个人英雄主义，项目成败充满偶然性。
            AutoForge
            的使命是将软件生产从「手工匠人」模式升级为「工业流水线」模式。
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[60ch]">
            我们不是要取代开发者，而是要解放开发者。让工程师从重复性劳动中解脱，
            将创造力投入到真正需要人类智慧的地方——架构创新、用户体验、业务洞察。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-glow rounded-xl p-6 text-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                <s.icon size={20} className="text-accent" weight="duotone" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent font-mono mb-2">
                {s.value}
              </div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
