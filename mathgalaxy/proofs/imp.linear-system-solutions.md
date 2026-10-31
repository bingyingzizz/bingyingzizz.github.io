# 秩-零化度 $\implies$ 线性方程组的解结构
`imp.linear-system-solutions` · 推出 · strong 边 · 根 `../`

`thm.rank-nullity` 秩-零化度定理 + `def.kernel-image-vs` 核与像 → `thm.linear-system-solutions` 线性方程组的解结构

记 $T : K^{n} \to K^{m}$、$x \mapsto Ax$。

**有解判据**：$Ax = b$ 有解 $\iff$ $b \in \operatorname{im} T$。而 $\operatorname{im} T$ 就是 $A$ 的列空间，其维数是列秩；把 $b$ 添成一列不改变列空间的维数当且仅当 $b$ 落在其中 —— 即 $\operatorname{rank} A = \operatorname{rank}(A \mid b)$。

**解的结构**：若 $x_0$ 是一个解，则对任意 $u \in \ker T$，$A(x_0 + u) = b$，所以 $x_0 + \ker T \subseteq$ 解集。反之若 $x$ 也是解，则 $A(x - x_0) = 0$，即 $x - x_0 \in \ker T$，故 $x \in x_0 + \ker T$。两边相等。

> 续见 proofs/imp.linear-system-solutions.2.md
