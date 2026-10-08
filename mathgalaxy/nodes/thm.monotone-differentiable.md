# 单调函数几乎处处可导　`thm.monotone-differentiable`
定理：单调函数几乎处处可导，且不连续点可数
layer 16 · 定理 · 有界变差与绝对连续 · 分析学

设 $F : \mathbb{R} \to \mathbb{R}$ 递增，$G(x) := F(x+)$（右极限）。则

**(a)** $F$ 的不连续点至多可数；

**(b)** $F$ 与 $G$ 都 **a.e. 可导**，且

$$F' = G'\quad  \text{a.e.}$$

## 为什么成立（入边，证明在 proofs/）
- `def.derivative` 导数：用到了定义 导数　proofs/dep.derivative-monotone-thm.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-monotone-differentiable.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.bv-regularity` BV 函数的正则性

refs: Folland, Real Analysis, Theorem 3.23

> 说明见 `notes/thm.monotone-differentiable.md`
