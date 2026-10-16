# 列紧 $\implies$ 紧
`imp.seqcompact-compact` · 推出 · strong 边 · 根 `../`

`def.sequentially-compact` 列紧 → `def.compact` 紧

$$B_1 \supseteq B_2 \supseteq B_3 \supseteq \cdots, \quad  B_k\text{ 的半径} \le 1/k, \quad \text{ 每个} B_k\text{ 都是坏的}$$

（每一步都只是在**有限**多个球里挑一个，可以规定「取编号最小的那个」，所以这里不动用选择公理。）

**③ 取点，得到 Cauchy 列。** 取 $x_{k} \in B_{k}$。由嵌套与半径趋于 0，对 $m \le n$ 有 $x_{m}, x_{n} \in B_{m}$ 而 $B_{m}$ 的半径 $\le 1/m$，于是

$$d(x_m, x_n) \le 2/m\quad  \implies\quad  \{x_k\}\text{ 是} Cauchy\text{ 列}$$

**④** 由列紧它有子列收敛到某点 $x \in X$；Cauchy 列一旦有收敛子列就整体收敛，故 $x_{k} \to x$。

> 续见 proofs/imp.seqcompact-compact.3.md
