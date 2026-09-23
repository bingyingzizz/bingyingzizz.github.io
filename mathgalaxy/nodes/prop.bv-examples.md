# BV 的例子与基本性质　`prop.bv-examples`
命题：BV 的几个例子与封闭性
layer 16 · 命题 · 有界变差与绝对连续 · 分析学

1. 若 $F : \mathbb{R} \to \mathbb{R}$ **有界递增**，则 $F \in BV$（此时 $T_F = F - F(-\infty)$）。

2. $BV$ 是 $\mathbb{C}$向量空间。

3. 若 $F$ 实可微且 $F'$ 有界，则对一切 $-\infty < a < b < \infty$ 有 $F \in BV([a,b])$。

4. $F(x) = \sin x$：对任何紧区间 $[a,b]$，$F \in BV([a,b])$。
> 陈述续见 `nodes/prop.bv-examples.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.bounded-variation` 有界变差 BV：用到了定义 有界变差 BV　proofs/def-link.bv-variation.md

refs: Folland, Real Analysis, §3.5

> 说明见 `notes/prop.bv-examples.md`
