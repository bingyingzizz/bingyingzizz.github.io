# BV 函数的正则性　`prop.bv-regularity`
命题：BV 函数的单侧极限都存在、不连续点可数、a.e. 可导
layer 18 · 命题 · 有界变差与绝对连续 · 分析学

设 $F \in BV$。则

**(c)** 对每个 $x \in \mathbb{R}$，$F(x+)$ 与 $F(x-)$ 都存在；$F(\pm \infty)$ 也存在；

**(d)** $F$ 的不连续点至多可数；

**(e)** 令 $G(x) = F(x+)$，则 $F'$ 与 $G'$ 处处存在且相等（a.e.）。

## 为什么成立（入边，证明在 proofs/）
- `thm.bv-jordan` BV 的 Jordan 分解 + `thm.monotone-differentiable` 单调函数几乎处处可导：化归到递增函数 $\implies BV$ 的正则性　proofs/imp.bv-regularity.md
- `def.bounded-variation` 有界变差 BV：用到了定义 有界变差 BV　proofs/def-link.bv-regularity-thm.md

refs: Folland, Real Analysis, Theorem 3.27

> 说明见 `notes/prop.bv-regularity.md`
