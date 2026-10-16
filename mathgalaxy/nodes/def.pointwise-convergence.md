# 逐点收敛　`def.pointwise-convergence`
逐点收敛（Pointwise Convergence）
layer 14 · 定义 · 函数列、幂级数与初等函数 · 分析学
[在星图里打开](../#n=def.pointwise-convergence)　·　[节点索引](../index.md)

设 $f_n : X \to \mathbb{R}$（$n = 1, 2, \ldots$）与 $f : X \to \mathbb{R}$。称 $\{f_n\}$ **逐点收敛**到 $f$，当且仅当对**每个固定的** $x \in X$ 都有

$$\forall \varepsilon > 0,\ \exists N,\ \forall n \ge N :\ |f_n(x) - f(x)| < \varepsilon$$

记 $f_n \to f$（逐点）。

## 它能推出什么 / 谁在用它
- 被 [`def.uniform-convergence`](../nodes/def.uniform-convergence.md) 一致收敛 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.pointwise-convergence.2.md](./def.pointwise-convergence.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 7

> 说明见 `notes/def.pointwise-convergence.md`

引用：`def.pointwise-convergence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
