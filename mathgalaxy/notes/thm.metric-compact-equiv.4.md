# 紧的三个等价刻画　`thm.metric-compact-equiv`　·　说明
根 `../`

**③ (c) $\implies$ (b)：完备 + 全有界 $\implies$ 列紧。** 设 $\{x_{n}\}$ 是 $X$ 中的序列。对每个 $k$，全有界给有限多个半径 $1/k$ 的球盖住 $X$。归纳构造无限下标集 $\mathbb{N} = S_{0} \supseteq S_{1} \supseteq S_{2} \supseteq \cdots$：给定无限集 $S_{k-1}$，由有限覆盖必有一个球 $B(y_{k}, 1/k)$ 含 $\{x_{n} : n \in S_{k-1}\}$ 中无限多个点，令 $S_{k}$ 为这些下标。再取 $n_{k} \in S_{k}$ 为大于 $n_{k-1}$ 的最小下标（$S_{k}$ 无限，必存在；这条规则不用选择公理）。对 $k \le l$ 有 $x_{n_{k}}, x_{n_{l}} \in B(y_{k}, 1/k)$（$S_{l} \subseteq S_{k}$），故 $d(x_{n_{k}}, x_{n_{l}}) \le 2/k$：$\{x_{n_{k}}\}$ 是 Cauchy 列，由完备性收敛 ✓。

> 续见 notes/thm.metric-compact-equiv.5.md
