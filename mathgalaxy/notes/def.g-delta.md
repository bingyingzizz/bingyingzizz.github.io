# G_δ 与 F_σ　`def.g-delta`　·　说明
根 `../`

两个方向先分清。**平凡的**：闭集是「一个闭集之并」，故 闭 $\subseteq F_\sigma$；开集是「一个开集之交」，故 开 $\subseteq G_\delta$。**度量空间里反过来也对**（这才是非平凡的那一半）：开 $\subseteq F_\sigma$、闭 $\subseteq G_\delta$。证法：$U$ 开时令 $F_n := \{x : d(x, X\setminus U) \ge 1/n\}$，每个 $F_n$ 闭、且 $U = \bigcup_n F_n$（$x \in U$ 取 $n > 1/d(x, X\setminus U)$），于是 $U$ 是 $F_\sigma$；对补集取对偶即得「闭 $\subseteq G_\delta$」。这一步不需要可分性 ——「开集是可数多个球的并」是另一条（更粗的）写法，那条才需要可分。

⭐ Baire 之后，「稠密 $G_\delta$」是「几乎全部的点」的标准写法：对**连续函数列的逐点极限** $f$，其连续点集是稠密 $G_\delta$（无条件成立的只有这条 —— 「可微点集」不行：$f = \mathbf{1}_{\mathbb{Q}}$ 的连续点集与可微点集都是空集）；$C[0,1]$ 里无处可微函数的全体也是稠密 $G_\delta$。
