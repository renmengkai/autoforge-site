"use client";

import { motion } from "motion/react";
import { ArrowRight, RocketLaunch } from "@phosphor-icons/react";

export function CTASection() {
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card-glow rounded-2xl p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,229,255,0.06),transparent)]" />
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
              <RocketLaunch
                size={28}
                className="text-accent"
                weight="duotone"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              准备好改变
              <span className="text-gradient"> 构建方式</span>了吗？
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              AutoForge
              正在招募早期体验者。如果你相信软件行业需要一场生产方式的革命，
              我们期待与你同行。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@autoforge.dev"
                className="group flex items-center gap-2 px-8 py-3.5 bg-accent text-bg-primary font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300"
              >
                加入等候名单
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:hello@autoforge.dev"
                className="px-8 py-3.5 text-text-secondary border border-border rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                联系我们
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
