# Minkowski 不等式　`thm.minkowski`
Minkowski 不等式（$L^p$ 的三角不等式）
layer 20 · 定理 · L^p 空间 · 分析学
[在星图里打开](../#n=thm.minkowski)　·　[节点索引](../index.md)

设 $1 \le p < \infty$。则对 $f, g \in L^p$：

$$\|f + g\|_p \le \|f\|_p + \|g\|_p$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.holder`](../nodes/thm.holder.md) Hölder 不等式：Hölder 不等式 $\implies$ Minkowski 不等式　[proofs/imp.minkowski.md](../proofs/imp.minkowski.md)
- [`def.lp-norm`](../nodes/def.lp-norm.md) L^p 范数：用到了定义 L^p 范数　[proofs/def-link.lp-minkowski.md](../proofs/def-link.lp-minkowski.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.lp-banach`](../nodes/thm.lp-banach.md) L^p 是 Banach 空间

refs: Folland, Real Analysis, Theorem 6.2

> 说明见 `notes/thm.minkowski.md`

引用：`thm.minkowski`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
