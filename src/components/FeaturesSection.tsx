"use client";

import { motion } from "motion/react";
import {
  Cpu,
  FlowArrow,
  Gauge,
  Lock,
  PuzzlePiece,
  ChartLineUp,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Cpu,
    title: "智能代码生成",
    desc: "基于需求语义理解，自动生成符合工程规范的代码。不是补全，是完整的模块级生产。",
    span: "lg:col-span-1",
  },
  {
    icon: FlowArrow,
    title: "流程编排引擎",
    desc: "可视化定义和调整软件生产流水线，每个环节可配置、可替换、可扩展。像管理工厂车间一样管理开发流程。",
    span: "lg:col-span-1",
  },
  {
    icon: Gauge,
    title: "实时质量度量",
    desc: "代码覆盖率、复杂度、安全评分、性能指标实时可视。质量问题不再是黑盒。",
    span: "lg:col-span-1",
  },
  {
    icon: Lock,
    title: "安全左移",
    desc: "安全检查嵌入开发早期阶段，依赖漏洞、敏感信息泄露、权限配置在提交前即被拦截。",
    span: "lg:col-span-1",
  },
  {
    icon: PuzzlePiece,
    title: "生态集成",
    desc: "无缝对接 GitHub、GitLab、Jira、Slack 等主流工具链。AutoForge 融入你的工作方式，而非要求你改变。",
    span: "lg:col-span-1",
  },
  {
    icon: ChartLineUp,
    title: "效能洞察",
    desc: "追踪从需求到交付的全链路效能数据，识别瓶颈，量化改进。让工程管理有据可依。",
    span: "lg:col-span-1",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase mb-4 block">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            工厂级的
            <span className="text-gradient"> 核心能力</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            每一项能力都指向同一个目标：让软件生产像制造业一样可靠、高效、可预测
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`card-glow rounded-xl p-7 group ${c.span}`}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <c.icon size={22} className="text-accent" weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
