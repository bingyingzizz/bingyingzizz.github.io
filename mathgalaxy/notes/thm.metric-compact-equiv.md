# 紧的三个等价刻画　`thm.metric-compact-equiv`　·　说明
根 `../`

**证明**（绕一圈：(a) $\implies$ (b) $\implies$ (c) $\implies$ (b) $\implies$ (a)）：

**① (a) $\implies$ (b)：紧 $\implies$ 列紧。** 设 $\{x_{n}\}$ 是 $X$ 中的序列，反设它没有收敛子列。令 $S = \{x_{n} : n \in \mathbb{N}\}$。$S$ 必无限：$S$ 有限时某个点出现无穷多次，给出常子列，它收敛。又对每个 $y \in X$ 存在 $\varepsilon_{y} > 0$ 使 $B(y, \varepsilon_{y})$ 只含 $S$ 中有限多个点：否则存在 $y$ 使每个球都含 $S$ 中无限多个点，于是可取 $n_{1} < n_{2} < \cdots$ 使 $x_{n_{k}} \in B(y, 1/k)$，得到收敛于 $y$ 的子列，矛盾。于是每个 $y \notin S$ 有开邻域不碰 $S$（把 $B(y, \varepsilon_{y})$ 里那有限个 $S$ 中的点去掉），故 $S$ 是闭集。开覆盖

$$\{B(y, \varepsilon_{y})\}_{y \in X} \cup \{X \setminus S\}$$

> 续见 notes/thm.metric-compact-equiv.2.md
