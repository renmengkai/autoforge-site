"use client";

import { motion } from "motion/react";
import {
  ChatCircleText,
  Code,
  TestTube,
  Rocket,
  ArrowsClockwise,
  Eye,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: ChatCircleText,
    step: "01",
    title: "需求输入",
    desc: "用自然语言描述你的软件需求，AutoForge 自动解析并结构化为可执行的工程任务。",
  },
  {
    icon: Eye,
    step: "02",
    title: "人类审核",
    desc: "关键决策点交由人类确认：架构方案、技术选型、业务逻辑——你拥有最终决定权。",
  },
  {
    icon: Code,
    step: "03",
    title: "AI 生产",
    desc: "AI 引擎并行处理编码、配置、文档生成，遵循工程最佳实践和你的团队规范。",
  },
  {
    icon: TestTube,
    step: "04",
    title: "自动验证",
    desc: "单元测试、集成测试、安全扫描、性能基准自动运行，确保每个交付物达到生产标准。",
  },
  {
    icon: Rocket,
    step: "05",
    title: "一键部署",
    desc: "从代码到上线，自动化流水线处理构建、容器化、部署、监控配置。",
  },
  {
    icon: ArrowsClockwise,
    step: "06",
    title: "持续迭代",
    desc: "用户反馈和运行数据自动回流，驱动下一轮优化。软件工厂永不停机。",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,229,255,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            六步完成
            <span className="text-gradient"> 软件交付</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            从需求到上线，标准化流程确保每一步可重复、可度量、可优化
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-glow rounded-xl p-6 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-accent/[0.03] font-mono leading-none select-none">
                {s.step}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <s.icon
                      size={18}
                      className="text-accent"
                      weight="duotone"
                    />
                  </div>
                  <span className="text-xs font-mono text-accent/60">
                    STEP {s.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
