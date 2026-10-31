# 共轭作用的轨道分解 + 轨道–稳定子 $\implies$ 类方程
`imp.class-equation` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.class-equation` 类方程

**第三步：分解。** 由第一步，$X = G$ 被共轭类划分。把长度 $1$ 的类（即 $Z(G)$ 的元素）单独拎出，其余类按代表元 $x_1, \ldots, x_r$ 计数，得

$$|G| = |Z(G)| + \sum_{i=1}^{r} |\text{$x_i$ 的共轭类}| = |Z(G)| + \sum_{i=1}^{r} [G : C_G(x_i)],$$

最后一步用了轨道–稳定子（`thm.orbit-stabilizer`）。

> 续见 proofs/imp.class-equation.3.md
