# Fubini–Tonelli　`thm.fubini-tonelli`
Fubini–Tonelli 定理（重积分可交换次序）
layer 19 · 定理 · 乘积测度与 Fubini · 分析学

设 $(X, \mathcal{M}, \mu )$、$(Y, \mathcal{N}, \nu )$ 是 **$\sigma$有限**的测度空间。

**(a) Tonelli（非负情形，无附加条件）**：若 $f \in L^+(X \times Y)$，则

$$\int f_x d\nu \in L^+(X), \quad  \int f^y d\mu \in L^+(Y)$$

且
> 陈述续见 `nodes/thm.fubini-tonelli.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.product-measure-sections` 乘积测度由截口给出 + `thm.mct` 单调收敛定理：集合版（截口公式）+ MCT $\implies$ Tonelli　proofs/imp.tonelli.md
- `def.section` 截口：用到了定义 截口　proofs/def-link.section-fubini.md
- `def.product-measure` 乘积测度：用到了定义 乘积测度　proofs/def-link.productmeasure-fubini.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-fubini.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.fubini-complete` 完备情形的 F–T

refs: Folland, Real Analysis, Theorem 2.37

> 说明见 `notes/thm.fubini-tonelli.md`
