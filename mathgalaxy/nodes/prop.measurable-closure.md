# 可测函数的封闭性　`prop.measurable-closure`
命题：可测函数对和、积、sup、max、极限封闭
layer 14 · 命题 · 可测函数与收敛 · 分析学

以下都设函数取值在 $\overline{\mathbb{R}} = [-\infty , +\infty ]$ 或 $\mathbb{C}$ 中，且可测。

- **和与积**：$f + g$、$fg$ 可测；
- **逐点上确界**：$\{f_j\}$ 可测 $\implies$ $\sup_j f_j$ 可测；
- **有限个取大**：$f, g$ 可测 $\implies$ $\max_{f, g}$ 可测；
- **极限**：若 $\lim_j f_j$ 逐点存在，则它是可测的。

## 为什么成立（入边，证明在 proofs/）
- `def.simple-function` 简单函数 + `thm.simple-approximation` 简单函数逼近：简单函数逼近 $\implies$ 可测函数在极限下封闭　proofs/imp.measurable-limit.md
- `def.measure` 测度：用到了定义 测度　proofs/def-link.measure-closure.md

refs: Folland, Real Analysis, Prop. 2.7

> 说明见 `notes/prop.measurable-closure.md`
