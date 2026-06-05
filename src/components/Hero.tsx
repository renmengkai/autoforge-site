"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,255,0.12),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8"
        >
          <Sparkle size={14} className="text-accent" weight="fill" />
          <span className="text-xs font-mono text-accent tracking-wider uppercase">
            软件工业化的践行者
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8"
        >
          <span className="text-text-primary">人类轻在环的</span>
          <br />
          <span className="text-gradient">软件工厂</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          AutoForge 将软件开发从手工作坊推向工业化生产。
          <br className="hidden md:block" />
          AI 驱动全流程，人类把控关键决策，规模化交付高质量软件。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-3.5 bg-accent text-bg-primary font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300"
          >
            开始使用
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#product"
            className="px-8 py-3.5 text-text-secondary border border-border rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-300"
          >
            了解更多
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-20 flex items-center justify-center gap-8 text-text-muted text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>系统运行中</span>
          </div>
          <span className="text-border">|</span>
          <span>v0.1.0-alpha</span>
          <span className="text-border">|</span>
          <span>Human-in-the-Loop</span>
        </motion.div>
      </div>
    </section>
  );
}
