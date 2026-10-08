# 完备情形的 F–T　`thm.fubini-complete`
定理：完备化的乘积测度上，Fubini–Tonelli 仍然成立
layer 20 · 定理 · 乘积测度与 Fubini · 分析学

设 $(X, \mathcal{M}, \mu )$、$(Y, \mathcal{N}, \nu )$ 都是**完备**的 $\sigma$有限测度空间，$(X \times Y, \mathcal{L}, \lambda)$ 是

$$(X \times Y, \mathcal{M} \otimes  \mathcal{N}, \mu \times \nu)$$

的**完备化**。设 $f$ 是 $\mathcal{L}$可测的。
> 陈述续见 `nodes/thm.fubini-complete.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.fubini-tonelli` Fubini–Tonelli + `thm.completion` 完备化定理 + `prop.product-incomplete` 乘积测度通常不完备：乘积测度通常不完备 $\implies$ 必须补一条完备情形的 F–T　proofs/imp.fubini-complete.md
- `def.product-measure` 乘积测度：用到了定义 乘积测度　proofs/def-link.productmeasure-complete.md
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.completion-fubini.md

refs: Folland, Real Analysis, Theorem 2.39

> 说明见 `notes/thm.fubini-complete.md`
