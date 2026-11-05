# 素数定理：$\zeta$ 在 $\operatorname{Re}\,s = 1$ 上无零点
`imp.nt-pnt` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 → `thm.prime-number-theorem` 素数定理

再由 $\psi \sim \theta$（Abel 部分求和）与 $\theta(x) = \sum_{p\le x}\log p \sim \pi(x)\log x$（因为 $\sum_{p\le x}\log p = \pi(x)\log x - \int_{2}^{x}\frac{\pi(t)}{t}\,\mathrm{d}t$ 再分部求和）得 $\pi(x) \sim x/\log x$。

⛔ 本节点**只给陈述与骨架**，证明的每一步（尤其 ② 与 ③ 的截断估计）都不在本图 —— 它需要复分析整章（`complex` 星系那一条线）。要真正做完，得先有 $\zeta$、$\Gamma$、Perron 公式与零点计数，那是另一个量级的工作。
