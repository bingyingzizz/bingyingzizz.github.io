# 自由模覆盖 $\implies$ 足够多投射
`imp.enough-projectives` · 推出 · strong 边 · 根 `../`

`def.enough-projectives` 足够多投射对象 → `thm.mod-enough-projectives` 足够多投射对象

取生成集 $(m_{i})_{i \in I}$（最省事的取法是 $I = M$、$m_{i} = i$），定义
$$\varphi : R^{(I)} \to M, \qquad \varphi\bigl((r_{i})_{i}\bigr) := \sum_{i} r_{i} m_{i}$$
（有限和）。由自由模的万有性质，$\varphi$ 是唯一确定的模同态；$\varphi(e_{i}) = m_{i}$ 说明它满 ✓。

**自由模投射**：$R \to B$ 由 $1$ 的像决定，对满射 $A \twoheadrightarrow B$ 任取一个原像即可提升 $R \to A$ ✓；直和保持投射性 ✓，故 $R^{(I)}$ 投射。

于是每个 $M$ 都有投射对象满射到它 —— 按 `def.enough-projectives` 的定义即「有足够多投射对象」；把核再这样盖住，递归得到投射消解 ✓。∎

> 与 `thm.mod-enough-injectives` 对照：投射这一侧是**显式**的（自由模写得出），内射那一侧是**存在性**的。
