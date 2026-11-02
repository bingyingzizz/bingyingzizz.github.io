# 一点紧化　`def.one-point-compactification`　·　说明
根 `../`

⭐ **拓扑的直觉**：$U \cup \{\infty\}$ 开 $\iff$ 补集紧。所以「$X$ 的补集紧」就是「$\infty$ 的一个邻域」—— 无穷远点周围的空间正是「$X$ 跑出去以后剩下的部分」。于是 $\mathbb{R}^{n}$ 的 $\infty$ 邻域是「球外面」，$S^{n}$ 的北极。

⭐ **标准例子**：$(\mathbb{R}^{n})^{*} \cong S^{n}$（球极投影；$n = 1$ 时 $\mathbb{R} \cup \{\infty\} \cong S^{1}$）；$\mathbb{C}^{*} \cong S^{2}$ 就是 **Riemann 球面**，复分析里全靠它把 $\infty$ 当普通点处理；$\mathbb{N}$ 的一点紧化是 $\{1/n\} \cup \{0\}$。

⚠️ **为什么必须有局部紧**：$X$ 不局部紧时 $X^{*}$ 不 Hausdorff —— 直观上「$\infty$ 的邻域」太大，会与某些点的邻域永远相交。所以一点紧化存在性与 Hausdorff 性是**两件事**：$X^{*}$ 总是紧的，但要它 Hausdorff 就得付局部紧的代价。

> 续见 notes/def.one-point-compactification.2.md
