# μ*-可测集　`def.caratheodory-measurable`
Carathéodory 可测性（$\mu^{*}$-Measurable Set）
layer 14 · 定义 · 测度的构造 · 分析学

设 $\mu^{*}$ 是 $X$ 上的外测度。$A \subseteq X$ 称为 **$\mu^{*}$-可测的**，当且仅当 $A$ 把每个集合都「干净地切成两块」：

$$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)\quad  \forall E \subseteq X$$

## 为什么成立（入边，证明在 proofs/）
- `def.outer-measure` 外测度：用到了定义 外测度　proofs/def-dep.outer-carath.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.caratheodory` Carathéodory 定理
- 被 `thm.caratheodory` Carathéodory 定理 用

refs: Halmos, Measure Theory, §11；Folland, Real Analysis, Theorem 1.11

> 说明见 `notes/def.caratheodory-measurable.md`
