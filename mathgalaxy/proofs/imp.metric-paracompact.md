# imp.metric-paracompact
`imp.metric-paracompact` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 → `def.paracompact` 仿紧空间

**骨架**（Stone 定理：距离空间都仿紧；完整证明属一般拓扑的标准定理，这里给结构与关键构造）。

设 $(X, d)$ 是距离空间，$\mathcal{U}$ 是开覆盖。分三步：

**第 1 步（造 $\sigma$-离散加细）**：对每个 $n \ge 1$，取极大的「$2^{-n}$-分离」子集 $S_{n} \subseteq X$（任意两点距离 $\ge 2^{-n}$；用 Zorn 引理或超限递归取极大）。由极大性，球族

$$\mathcal{B}_{n} := \bigl\{\, B(s, 2^{-n}) : s \in S_{n} \,\bigr\}$$

覆盖 $X$（否则可再加一点，与极大性矛盾）。

**半径要减半**：中心相距 $\ge 2^{-n}$ 只保证**半径 $2^{-n-1}$** 的球两两不交（两球交于 $z$ 会给出 $d(x,y) \le d(x,z)+d(z,y) < 2\cdot 2^{-n-1} = 2^{-n}$，矛盾）；半径 $2^{-n}$ 那族只负责**覆盖**。下面说的「离散族」指的都是减半后的 $\bigl\{, B(s,2^{-n-1}):s\in S_{n},\bigr\}$；

> 续见 proofs/imp.metric-paracompact.2.md
