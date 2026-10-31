# 张量积与外幂 $\implies$ 张量场是多重线性场的统一外壳
`imp.mf-tensor-field-smooth` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 + `def.exterior-algebra` 外代数 → `def.tensor-field` 张量场

**先把逐点的事说清。** 对固定 $p$，$T^{(r,s)}_{p}M = \bigl(T_{p}M\bigr)^{\otimes r} \otimes \bigl(T_{p}^{\ast}M\bigr)^{\otimes s}$，而「吃了 $r$ 个余向量与 $s$ 个向量吐一个数」的全体与它自然同构（张量积的泛性质）。维数 $n^{r+s}$。

**三种特例对齐。**

- $r = 0, s = 1$：$T_{p}^{\ast}M$ 的元素就是余向量，光滑截面即 $1$-形式；
- $r = 1, s = 0$：$T_{p}M$ 的元素就是切向量，光滑截面即向量场（`def.vector-field`）；
- $r = 0, s = k$ 且对调任两变元变号：就是交错 $k$-线性型，光滑截面即 $k$-形式 —— 这正是 `def.exterior-algebra` 里每点取的 $\bigwedge^{k}$（`def.alternating-form`）。

**丛的构造。** $T^{(r,s)}M := \bigsqcup_{p} T^{(r,s)}_{p}M$ 带投影 $\pi$。取卡 $(U,\varphi)$，令

> 续见 proofs/imp.mf-tensor-field-smooth.2.md
