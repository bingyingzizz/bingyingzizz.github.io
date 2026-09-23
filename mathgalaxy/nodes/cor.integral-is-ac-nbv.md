# 积出来的函数是 AC · NBV　`cor.integral-is-ac-nbv`
推论：$f \in L^{1}(m) \implies F(x) = \int_{-\infty}^{x} f$ 是 AC、NBV；反之亦然
layer 19 · 推论 · 有界变差与绝对连续 · 分析学

**(1)** 若 $f \in L^1(m)$，则

$$F(x) := \int_{-\infty}^{x} f(t) dt$$

属于 $AC \cap NBV$。

**(2)** 反之，若 $F \in NBV$ 且绝对连续，则 $F' \in L^1(m)$ 且
> 陈述续见 `nodes/cor.integral-is-ac-nbv.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.nbv` NBV：用到了定义 NBV　proofs/def-link.nbv-ftc.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-integral-is-ac-nbv.md

refs: Folland, Real Analysis, Theorem 3.35

## 说明
两个方向合起来就是「绝对连续函数正好是某个 $L^{1}$ 函数的积分」。
