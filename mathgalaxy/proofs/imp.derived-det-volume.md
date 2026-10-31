# 流形上的换元公式给出 $|\det A|$ 的体积含义
`imp.derived-det-volume` · 推出 · strong 边 · 根 `../`

`thm.change-of-variables-manifold` 流形上的换元公式 → `def.determinant` 行列式

取 $M = U \subseteq \mathbb{R}^{n}$ 有界、$N = A(U)$，其中 $A$ 是可逆线性映射（把它看成 $\mathbb{R}^{n}$ 到自身的微分同胚），$\omega = \mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$。

**第一步：$A^{\ast}\omega = \det(A)\,\omega$。** 左边按定义是 $\omega(Au_1,\ldots,Au_n)$ 给出的 $n$ 重交错 $n$ 线性型；$n$ 维空间上这样的型全体是一维的，而 $\omega(e_1,\ldots,e_n) = 1$，于是由行列式的「交错、多重线性、取单位阵为 $1$」这三条刻画，

$$\omega(Au_1,\ldots,Au_n) = \det(A)\,\omega(u_1,\ldots,u_n).$$

> 续见 proofs/imp.derived-det-volume.2.md
