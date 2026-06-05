"use client";

import { GithubLogo, TwitterLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-mono text-xs font-bold">
                  A
                </span>
              </div>
              <span className="text-sm font-semibold text-text-primary">
                AutoForge
              </span>
            </div>
            <p className="text-xs text-text-muted max-w-sm">
              软件工业化的践行者。人类轻在环的软件工厂。
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={20} weight="fill" />
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <TwitterLogo size={20} weight="fill" />
            </a>
          </div>
        </div>

        <div className="glow-line mt-8 mb-6 w-full" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>
            &copy; {new Date().getFullYear()} AutoForge. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
