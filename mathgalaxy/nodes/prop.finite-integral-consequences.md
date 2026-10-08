# 积分有限的后果　`prop.finite-integral-consequences`
命题：$\int f < \infty$ 时，f 几乎处处有限、支撑 σ-有限
layer 15 · 命题 · 积分 · 分析学

设 $f \in L^+$ 且 $\int f < \infty$。则

- $\{x : f(x) = \infty\}$ 是零集；
- $\{x : f(x) > 0\}$ 是 **$\sigma$有限**的（即它是可数个有限测度集之并）。

## 为什么成立（入边，证明在 proofs/）
- `def.lplus` L⁺：用到了定义 L⁺　proofs/def-link.lplus-finite-integral.md
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.null-set-finite-integral.md
- `def.measure-space` 有限 / σ-有限 / 半有限：用到了定义 有限 / σ-有限 / 半有限　proofs/def-link.measure-space-finite-integral.md

refs: Folland, Real Analysis, Prop. 2.20

> 说明见 `notes/prop.finite-integral-consequences.md`
