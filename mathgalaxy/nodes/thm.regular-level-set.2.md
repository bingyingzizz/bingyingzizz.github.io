# 正则水平集定理　`thm.regular-level-set`　·　续页（第 2 页）
[在星图里打开](../#n=thm.regular-level-set)　·　第 1 页 [nodes/thm.regular-level-set.md](./thm.regular-level-set.md)

## 陈述（续）
只要导数满秩，就是光滑流形，维数 = 变量数减方程数。这是分析通往几
何的那座桥。
设 $U\subseteq\mathbb{R}^{n}$ 开，$F = (F^{1},\ldots,F^{m}) : U\to\mathbb{R}
^{m}$ 是 $C^{\infty}$，$c\in\mathbb{R}^{m}$。若 $M := F^{-1}(c) \ne \emptyset
$，且对每个 $p\in M$，微分
$$\mathrm{d}F_{p} : \mathbb{R}^{n}\longrightarrow\mathbb{R}^{m}$$
都是满射（等价地：$m\times n$ 矩阵 $\bigl(\partial F^{i}/\partial x^{j}(p)\bigr)$ 的
秩为 $m$，即有一个 $m\times m$ 子式非零），则 $M$ 是 $n-m$ 维光滑流形，且
$$T_{p}M = \ker\mathrm{d}F_{p}\qquad (p\in M).$$
特别地 $m = 1$ 时：$\nabla F(p)\ne 0$ 的每个正则值 $c$ 的原像是 $(n-1)$ 维光滑
流形（**超曲面**）。

> 续见 [nodes/thm.regular-level-set.3.md](./thm.regular-level-set.3.md)
