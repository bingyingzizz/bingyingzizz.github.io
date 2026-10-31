# 留数定理 + 绕数 $\implies$ 辐角原理
`imp.argument-principle` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 + `def.winding-number` 绕数 → `thm.argument-principle` 辐角原理

设 $f$ 在 $\gamma$ 内部的零点为 $a_1, \ldots, a_N$（重数 $m_1, \ldots, m_N$），极点为 $b_1, \ldots, b_M$（阶 $n_1, \ldots, n_M$），$\gamma$ 上既无零点也无极点。

**第一步：把零极点一次剥掉。** 令

$$g(z) := f(z)\cdot\prod_{k=1}^{N} (z - a_k)^{-m_k}\cdot\prod_{j=1}^{M} (z - b_j)^{n_j}.$$

每个零点都被 $m_k$ 次幂除尽、每个极点都被 $n_j$ 次幂乘掉，故 $g$ 在 $\gamma$ 及其内部全纯，且**处处非零**。

**第二步：取对数导数。** 乘积的导数给出

$$\frac{f'(z)}{f(z)} = \sum_{k=1}^{N} \frac{m_k}{z - a_k} - \sum_{j=1}^{M} \frac{n_j}{z - b_j} + \frac{g'(z)}{g(z)}.$$

> 续见 proofs/imp.argument-principle.2.md
