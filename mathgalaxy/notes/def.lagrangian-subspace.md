# Lagrange 子空间　`def.lagrangian-subspace`　·　说明
根 `../`

**为什么这个维数特殊**：非退化型下 $\dim W + \dim W^{\perp} = \dim V$（与内积空间同一个公式）。若 $W = W^{\perp}$，则 $2\dim W = \dim V$ —— Lagrange 子空间的维数**被逼成一半**，不是选出来的。

⭐ **它是「迷向」与「极大」的交点**：比它小的迷向子空间有大把（任意一条辛直线就迷向），但再大一点就**不可能**仍然全迷向。所以 Lagrange 子空间就是迷向子空间里的**极大元**，这也是「极大全迷向子空间」这个别名。

⚠️ **与内积空间对照**：内积空间里 $W \cap W^{\perp} = 0$ 永远成立，所以 $W = W^{\perp}$ 只能 $W = 0$。正定内积空间里确实没有非平凡实例；但**不定对称型**也有 —— 对称双曲平面 $\beta = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ 取 $W = \mathbb{R}u$ 就有 $W^{\perp} = W$。所以它并非辛几何独有。

> 续见 notes/def.lagrangian-subspace.2.md
