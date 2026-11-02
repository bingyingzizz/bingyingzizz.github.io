# 秩-零化度 $\implies$ 线性方程组的解结构
`imp.linear-system-solutions` · 推出 · strong 边 · 根 `../`

`thm.rank-nullity` 秩-零化度定理 + `def.kernel-image-vs` 核与像 → `thm.linear-system-solutions` 线性方程组的解结构

**维数**：由秩-零化度定理，$\dim \ker T = n - \operatorname{rank} A$；平移不改变「维数」（仿射子空间与 $\ker T$ 同维）。

**唯一性**：$\det A \ne 0$ 时 $\ker T = \{0\}$，解集是单点集 $\{A^{-1}b\}$。∎

> 第 2 段是**纯集合论**的：解集 = 一个特解 + 全体齐次解。它对任何群同态、任何环同态都成立 —— 「非齐次解 = 特解 + 齐次解」是这一招的通用形态。
