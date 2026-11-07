# 球面的同调　`thm.sphere-homology`　·　说明
根 `../`

**证明**：对 $n$ 归纳，使用约化同调（`def.reduced-homology`）与约化 Mayer–Vietoris（`thm.mv-homology`）。约定 $S^{n} \subset \mathbb{R}^{n+1}$，北极 $N := (0, \ldots, 0, 1)$、南极 $S := -N$。

**基础情形 $n = 0$。** $S^{0} = \{\pm 1\}$ 是两个点，由 `prop.h0-components`，$H_{0}(S^{0}) = \mathbb{Z}^{2}$，故 $\tilde{H}_{0}(S^{0}) = \mathbb{Z}$；$p > 0$ 时 $\tilde{H}_{p}(S^{0}) = 0$。

**归纳步。** 设 $n \ge 1$，令 $U := S^{n} \setminus \{S\}$、$V := S^{n} \setminus \{N\}$；两者都是开集。

**$U, V$ 可缩。** 对 $U$ 用同伦

$$H_{s}(x) := \frac{(1-s)x + sN}{\lVert (1-s)x + sN \rVert}\qquad (x \in U,\ s \in [0,1]).$$

> 续见 notes/thm.sphere-homology.2.md
