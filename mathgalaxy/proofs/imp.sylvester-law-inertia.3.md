# imp.sylvester-law-inertia
`imp.sylvester-law-inertia` · 推出 · strong 边 · 根 `../`

`def.inertia-index` 惯性指数 + `def.congruent-matrices` 合同矩阵 + `def.quadratic-form` 二次型 + `def.bilinear-form` 双线性型 → `thm.sylvester-law-inertia` 惯性定理

**唯一性（维数计数）**。设 $A$ 合同于 $D = \operatorname{diag}(I_{p}, -I_{q}, 0_{z})$ 与 $D' = \operatorname{diag}(I_{p'}, -I_{q'}, 0_{z'})$，即存在可逆 $Q$ 使 $D' = Q^{T}DQ$。反设 $p > p'$。在 $D'$ 的坐标下取 $E := \{x : x_{1} = \cdots = x_{p'} = 0\}$，$\dim E = n - p'$；在 $D$ 的坐标下取 $U := \{y : y_{p+1} = \cdots = y_{n} = 0\}$，$\dim U = p$。子空间 $Q(E)$ 与 $U$ 的维数和 $= (n-p') + p > n$，故有交；取 $0 \ne y \in Q(E) \cap U$，令 $x := Q^{-1}y \in E$。则 $x \ne 0$，且 $x^{T}D'x = \sum_{i > p'} d'_{i} x_{i}^{2} \le 0$（$D'$ 第 $i$ 个对角元在 $i > p'$ 时 $\le 0$）；另一方面 $y^{T}Dy = x^{T}Q^{T}DQx = x^{T}D'x$，而 $y \in U$、$y \n

> 续见 proofs/imp.sylvester-law-inertia.4.md
