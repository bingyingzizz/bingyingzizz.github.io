# 积出来的函数是 AC · NBV　`cor.integral-is-ac-nbv`
推论：$f \in L^{1}(m) \implies F(x) = \int_{-\infty}^{x} f$ 是 AC、NBV；反之亦然
layer 20 · 推论 · 有界变差与绝对连续 · 分析学
[在星图里打开](../#n=cor.integral-is-ac-nbv)　·　[节点索引](../index.md)

**(1)** 若 $f \in L^1(m)$，则

$$F(x) := \int_{-\infty}^{x} f(t) dt$$

属于 $AC \cap NBV$。

**(2)** 反之，若 $F \in NBV$ 且绝对连续，则 $F' \in L^1(m)$ 且

$$F(x) = \int_{-\infty}^{x} F'(t) dt$$

## 为什么成立（入边，证明在 proofs/）
- [`def.nbv`](../nodes/def.nbv.md) NBV：用到了定义 NBV　[proofs/def-link.nbv-ftc.md](../proofs/def-link.nbv-ftc.md)

- …另有入边，续页见 [nodes/cor.integral-is-ac-nbv.2.md](./cor.integral-is-ac-nbv.2.md)

refs: Folland, Real Analysis, Theorem 3.35

> 说明见 `notes/cor.integral-is-ac-nbv.md`

引用：`cor.integral-is-ac-nbv`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
