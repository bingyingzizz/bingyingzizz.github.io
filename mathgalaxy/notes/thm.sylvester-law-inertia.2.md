# 惯性定理　`thm.sylvester-law-inertia`　·　说明
根 `../`

**唯一性（维数计数）**。设 $A$ 合同于 $D = \operatorname{diag}(I_{p}, -I_{q}, 0_{z})$ 与 $D' = \operatorname{diag}(I_{p'}, -I_{q'}, 0_{z'})$，即存在可逆 $Q$ 使 $D' = Q^{T}DQ$。反设 $p > p'$。在 $D'$ 的坐标下取 $E := \{x : x_{1} = \cdots = x_{p'} = 0\}$，$\dim E = n - p'$；在 $D$ 的坐标下取 $U := \{y : y_{p+1} = \cdots = y_{n} = 0\}$，$\dim U = p$。子空间 $Q(E)$ 与 $U$ 的维数和 $= (n-p') + p > n$，故有交；取 $0 \ne y \in Q(E) \cap U$，令 $x := Q^{-1}y \in E$。则 $x \ne 0$，且 $x^{T}D'x = \sum_{i > p'} d'_{i} x_{i}^{2} \le 0$（$D'$ 第 $i$ 个对角元在 $i > p'$ 时 $\le 0$）；另一方面 $y^{T}Dy = x^{T}Q^{T}DQx = x^{T}D'x$，而 $y \in U$、$y \ne 0$ 给出 $y^{T}Dy = \sum_{i \le p} y_{i}^{2} > 0$ —— 矛盾。故 $p \le p'$；交换 $D, D'$ 同理得 $p' \le p$，即 $p = p'$。对 $-A$ 用同一论证得 $q = q'$，再由秩 $p+q+z = n$ 得 $z = z'$ ✓。

**合同分类**。合同是等价关系，且上面的论证表明合同变换保持 $(p, q)$：同阶实对称矩阵合同 $\iff$ 它们有相同的惯性指数。

> 续见 notes/thm.sylvester-law-inertia.3.md
