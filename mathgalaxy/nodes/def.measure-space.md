# 有限 / σ-有限 / 半有限　`def.measure-space`
测度空间的几种「大小」：有限、σ-有限、半有限
layer 14 · 定义 · 测度的构造 · 分析学

设 $(X, \mathcal{M}, \mu )$ 是测度空间。

- **有限**：$\mu(X) < \infty$
- **$\sigma$有限**：$X$ 能写成可数个测度有限的集合之并：$X = \bigcup_{j=1}^{\infty} E_j, \quad  \mu(E_j) < \infty$
- **半有限**：每个无穷测度的集合里都藏着正有限测度的子集：
> 陈述续见 `nodes/def.measure-space.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.measure` 测度：用到了定义 测度　proofs/def-link.measure-space.md

## 它能推出什么 / 谁在用它
- 被 `def.semifinite-part` 半有限部分 用
- 被 `prop.finite-integral-consequences` 积分有限的后果 用
- 被 `prop.L1-support-sigma-finite` L¹ 函数的支撑 σ-有限 用
- 被 `prop.lp-inclusion-finite` 有限测度时方向反过来 用

refs: Folland, Real Analysis, §1.2

> 说明见 `notes/def.measure-space.md`
