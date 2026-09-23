# 乘积测度由截口给出　`thm.product-measure-sections`
定理：$\mu \times \nu(E) = \int \nu(E_{x}) d\mu(x) = \int \mu(E^{y}) d\nu(y)$
layer 17 · 定理 · 乘积测度与 Fubini · 分析学

设 $(X, \mathcal{M}, \mu )$、$(Y, \mathcal{N}, \nu )$ 都是 **$\sigma$有限**的，$E \in \mathcal{M} \otimes  \mathcal{N}$。则

- $x \mapsto \nu(E_x)$ 在 $X$ 上可测；
- $y \mapsto \mu(E^y)$ 在 $Y$ 上可测；

并且
> 陈述续见 `nodes/thm.product-measure-sections.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.monotone-class` 单调类定理 + `prop.section-measurable` 截口可测：单调类定理 $\implies$ 乘积测度由截口积分给出　proofs/imp.product-sections.md
- `def.monotone-class` 单调类：用到了定义 单调类　proofs/def-link.monotoneclass-lemma.md
- `def.product-measure` 乘积测度：用到了定义 乘积测度　proofs/def-link.productmeasure-sections-thm.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.fubini-tonelli` Fubini–Tonelli

refs: Folland, Real Analysis, Theorem 2.36

> 说明见 `notes/thm.product-measure-sections.md`
