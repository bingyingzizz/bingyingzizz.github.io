# 收缩引理　`lem.shrink`　·　说明
根 `../`

 i$，而 $\mathcal{W}_{i}$ 覆盖给出某个 $j < i$ 使 $x \in U_{j}$。由**点有限性**（局部有限 $\implies$ 点有限），$J := \{\, j < i : x \in U_{j} \,\}$ 有限且非空；取 $j := \max J$，则对一切 $k > j$ 有 $x \notin U_{k}$，故 $x \in A_{j} \subseteq V_{j}$。
**收尾**：由 $V_{i} \subseteq U_{i}$，只碰有限多个 $U_{i}$ 的开邻域也只碰有限多个 $V_{i}$，故 $\mathcal{V}$ 局部有限；覆盖性：给定 $x$，点有限性给出下标 $i$ 大于一切含 $x$ 的 $U_{j}$，再对 $\mathcal{W}_{i}$ 用覆盖性即得 $x \in V_{j}$（某个 $j < i$）。∎

> 续见 notes/lem.shrink.3.md
