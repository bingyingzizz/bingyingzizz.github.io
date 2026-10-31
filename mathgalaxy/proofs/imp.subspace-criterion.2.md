# 子空间的定义 $\implies$ 两条判据与生成
`imp.subspace-criterion` · 推出 · strong 边 · 根 `../`

`def.subspace` 子空间 → `prop.subspace-criterion` 子空间判据

**阶梯版。** 设 $U_1 \subseteq U_2 \subseteq \cdots$，令 $U := \bigcup_n U_n$。非空。取 $u, v \in U$、$c \in K$：存在 $i, j$ 使 $u \in U_i$、$v \in U_j$。由链的递增性，取 $N := \max\{i, j\}$ 就有 $u, v \in U_N$；由 $U_N$ 是子空间，$cu + v \in U_N \subseteq U$。由合并版，$U$ 是子空间。

**生成版。** 令 $\mathcal{U} := \{U \subseteq V : U \supseteq S,\ U$ 是子空间$\}$，$U_0 := \bigcap \mathcal{U}$。

> 续见 proofs/imp.subspace-criterion.3.md
