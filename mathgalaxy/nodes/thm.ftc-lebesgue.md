# 微积分基本定理（Lebesgue 版）　`thm.ftc-lebesgue`
定理（TFAE）：绝对连续 $\iff$ 是 $L^{1}$ 函数的积分 $\iff$ 导数的积分还原
layer 21 · 定理 · 有界变差与绝对连续 · 分析学

设 $F : [a, b] \to \mathbb{C}$，区间紧。则下列三条**彼此等价**：

**(a)** $F$ 在 $[a, b]$ 上**绝对连续**；

**(b)** 存在 $f \in L^1([a, b])$ 使

$$F(x) - F(a) = \int_a^x f(t) dt\quad  \forall x \in [a, b]$$

**(c)** $F$ **a.e. 可导**、$F' \in L^1([a, b])$，且
> 陈述续见 `nodes/thm.ftc-lebesgue.2.md`


## 为什么成立（入边，证明在 proofs/）
- `lem.ac-subset-bv` AC ⊆ BV + `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续 + `prop.nbv-derivative` NBV 函数的导数与测度的关系：$(a) \iff (b) \iff (c)$：微积分基本定理的三条等价　proofs/imp.ftc.md
- `def.ac-function` 绝对连续函数：用到了定义 绝对连续函数　proofs/def-link.ac-ftc.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-ftc.md

refs: Folland, Real Analysis, Theorem 3.35

> 说明见 `notes/thm.ftc-lebesgue.md`
