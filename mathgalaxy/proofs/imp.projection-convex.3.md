# imp.projection-convex
`imp.projection-convex` · 推出 · strong 边 · 根 `../`

`def.hilbert-space` Hilbert 空间 + `def.convex-set` 凸集 + `def.closed-set` 闭集与闭包 + `def.inner-product` 内积 + `def.norm` 范数 → `thm.projection-convex` 凸闭集的最近点

- **① 存在且唯一**：存在用**极小化序列 + 凸性取中点**（$\frac{x_{n}+x_{m}}{2}$ 仍在 $C$ 里，于是 $\lVert\cdot\rVert^{2}$ 的平行四边形法则给 Cauchy），唯一用**严格凸性**（内积空间的范数是严格凸的：等号只在同一点）。⚠️ 这一步**要完备性**（Hilbert 而非一般内积空间，否则极小区间可能不收敛）。
- **② 变分不等式**：$y = P_C(x)$ $\iff$ $\operatorname{Re}\langle x-y, z-y\rangle \le 0$（$\forall z\in C$）。$(\implies)$ 用 $y + t(z-y) \in C$ 对 $t \in (0,1)$ 展开 $\lVert x - (\cdot)\rVert^2$ 取 $t \to 0$；$(\Leftarrow)$ 由同一个展开式（凸性保证二次项 $\ge 0$）。**这一条不需要完备性**（只要 $P_C(x)$ 存在）。
- **③ 非扩张**：**由 ② 两边相加**（对 $x$ 与 

> 续见 proofs/imp.projection-convex.4.md
