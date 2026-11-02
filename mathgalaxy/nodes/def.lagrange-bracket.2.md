# Lagrange 括号　`def.lagrange-bracket`　·　续页（第 2 页）
[在星图里打开](../#n=def.lagrange-bracket)　·　第 1 页 [nodes/def.lagrange-bracket.md](./def.lagrange-bracket.md)

## 陈述（续）
然。
设 $(q, p)$ 是 Darboux 坐标，$u = (u_{1}, \ldots, u_{2n})$、$v = (v_{1}, \ldots, v_{2n})$ 是两组坐标函数。**Lagrange 括号**定义为
$$[u, v]_{q,p} := \sum_{i=1}^{n}\Bigl(\frac{\partial q_{i}}{\partial u}\frac{\partial p_{i}}{\partial v} - \frac{\partial p_{i}}{\partial u}\frac{\partial q_{i}}{\partial v}\Bigr) .$$
**与 Poisson 括号的关系**：把 Poisson 括号矩阵 $\bigl(\{u_{i}, u_{j}\}\bigr)$ 记为 $P$，Lagrange 括号矩阵记为 $L$，则

$$L \cdot P = I ,$$

即 $L = P^{-1}$ —— 两者互为逆矩阵。
**正则性的判据**：变换 $(q, p) \mapsto (Q, P)$ 是**正则变换**（辛同胚）$\iff$ 对每个 $i, j$ 有 $[Q_{i}, Q_{j}] = [P_{i}, P_{j}] = 0$ 且 $[Q_{i}, P_{j}] = \delta_{ij}$。

> 续见 [nodes/def.lagrange-bracket.3.md](./def.lagrange-bracket.3.md)
