# 控制收敛定理　`thm.dct`
控制收敛定理（DCT, Dominated Convergence Theorem）
layer 20 · 定理 · 积分 · 分析学
[在星图里打开](../#n=thm.dct)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^1$，$f_n \to f$ a.e.，且存在**控制函数** $g \in L^1$ 使

$$|f_n| \le g\quad  \text{a.e.}\quad  \forall n$$

则 $f \in L^1$ 且

$$\int f = \lim_{n\to\infty} \int f_n$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.differentiate-under-integral`](../nodes/thm.differentiate-under-integral.md) 交换极限/导数与积分

- …另有出边，续页见 [nodes/thm.dct.3.md](./thm.dct.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.dct.2.md](./thm.dct.2.md)

refs: Folland, Real Analysis, Theorem 2.24

外部：Wikipedia https://en.wikipedia.org/wiki/Dominated_convergence_theorem · Mathlib https://leanprover-community.github.io/mathlib4_docs/Mathlib/MeasureTheory/Integral/DominatedConvergence.html

> 说明见 `notes/thm.dct.md`

引用：`thm.dct`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
