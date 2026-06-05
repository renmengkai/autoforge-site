"use client";

import { motion } from "motion/react";
import {
  Factory,
  Brain,
  GitBranch,
  ShieldCheck,
} from "@phosphor-icons/react";

const features = [
  {
    icon: Factory,
    title: "流水线式开发",
    desc: "将需求分析、架构设计、编码、测试、部署串联为标准化流水线，每个环节可量化、可追溯、可优化。",
  },
  {
    icon: Brain,
    title: "AI 深度参与",
    desc: "AI 不只是辅助工具，而是核心生产力。从理解需求到生成代码，AI 贯穿软件生命周期的每个阶段。",
  },
  {
    icon: GitBranch,
    title: "人类关键决策",
    desc: "在架构选型、业务逻辑确认、质量验收等关键节点保留人类决策权，确保软件符合真实业务意图。",
  },
  {
    icon: ShieldCheck,
    title: "质量内建",
    desc: "自动化测试、静态分析、安全扫描嵌入每个环节，缺陷在产生时即被发现和修复，而非事后补救。",
  },
];

export function ProductSection() {
  return (
    <section id="product" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase mb-4 block">
              What is AutoForge
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6">
              不是又一个
              <br />
              <span className="text-gradient">AI 编程助手</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[55ch]">
              AutoForge 是一套完整的软件生产系统。它重新定义了软件的构建方式——
              将碎片化的开发活动整合为工业级流水线，让 AI
              承担重复性劳动，让人类专注于创造性决策。
            </p>
            <div className="mt-8 glow-line w-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-glow rounded-xl p-6 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <f.icon size={20} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
