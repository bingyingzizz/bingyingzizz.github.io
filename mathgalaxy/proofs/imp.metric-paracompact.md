# imp.metric-paracompact
`imp.metric-paracompact` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 → `def.paracompact` 仿紧空间

**骨架**（Stone 定理：距离空间都仿紧；完整证明属一般拓扑的标准定理，这里给结构与关键构造）。

设 $(X, d)$ 是距离空间，$\mathcal{U}$ 是开覆盖。分三步：

**第 1 步（造 $\sigma$-离散加细）**：对每个 $n \ge 1$，取极大的「$2^{-n}$-分离」子集 $S_{n} \subseteq X$（任意两点距离 $\ge 2^{-n}$；用 Zorn 引理或超限递归取极大）。由极大性，球族

$$\mathcal{B}_{n} := \bigl\{\, B(s, 2^{-n}) : s \in S_{n} \,\bigr\}$$

覆盖 $X$（否则可再加一点，与极大性矛盾）。

同一个 $\mathcal{B}_{n}$ 里的球**两两不交**（中心相距 $\ge 2^{-n}$ $\implies$ 半径 $2^{-n}$ 的球不交），所以 $\mathcal{B}_{n}$ 是**离散**族；

$\bigcup_{n}\mathcal{B}_{n}$ 是 $\sigma$-离散族。

> 续见 proofs/imp.metric-paracompact.2.md
