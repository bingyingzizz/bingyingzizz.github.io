# BV 的 Jordan 分解　`thm.bv-jordan`
定理：$F \in BV \iff F = G - H$（G、H 有界递增）
layer 17 · 定理 · 有界变差与绝对连续 · 分析学

**(a)** $F \in BV \iff \operatorname{Re} F \in BV\text{ 且} \operatorname{Im} F \in BV$。

**(b)** 设 $F : \mathbb{R} \to \mathbb{R}$。则

$$F \in BV \iff F = G - H,\text{ 其中} G, H\text{ 都是有界递增函数}$$

## 为什么成立（入边，证明在 proofs/）
- `lem.variation-monotone` T_F ± F 递增：$T_F \pm F$ 递增 $\implies BV$ 的 Jordan 分解　proofs/imp.bv-jordan.md
- `def.bounded-variation` 有界变差 BV：用到了定义 有界变差 BV　proofs/def-link.bv-jordan-thm.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.bv-regularity` BV 函数的正则性
- ⇒ `thm.borel-measure-nbv` 测度 ↔ NBV 的一一对应

refs: Folland, Real Analysis, Theorem 3.27

> 说明见 `notes/thm.bv-jordan.md`
