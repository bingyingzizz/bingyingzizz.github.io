# 乘积测度　`def.product-measure`
乘积测度（Product Measure $\mu \times \nu$）
layer 16 · 定义 · 乘积测度与 Fubini · 分析学

设 $(X, \mathcal{M}, \mu )$ 与 $(Y, \mathcal{N}, \nu )$ 是测度空间。

**① 矩形**：形如 $A \times B$（$A \in \mathcal{M}$，$B \in \mathcal{N}$）的集合叫（可测）矩形。全体矩形**生成** $\mathcal{M} \otimes  \mathcal{N}$。
> 陈述续见 `nodes/def.product-measure.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.premeasure` 预测度 + `thm.caratheodory` Carathéodory 定理：矩形上的预测度 $\implies$ Carathéodory 扩张得到乘积测度　proofs/imp.product-measure.md
- `def.premeasure` 预测度：用到了定义 预测度　proofs/def-link.productmeasure-premeasure.md
- `def.product-sigma` 积 σ-代数：用到了定义 积 σ-代数　proofs/def-link.productmeasure-sigma.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-product-measure.md

- …另有入边，续页见 `nodes/def.product-measure.3.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/def.product-measure.4.md`

refs: Folland, Real Analysis, §2.5；Halmos, Measure Theory, §35

> 说明见 `notes/def.product-measure.md`
