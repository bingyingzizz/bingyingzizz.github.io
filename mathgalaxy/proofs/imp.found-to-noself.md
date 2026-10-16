# 正则公理 + 配对公理 $\implies A \notin A$
`imp.found-to-noself` · 推出 · strong 边 · 根 `../`

`ax.found` 正则公理 + `ax.pair` 配对公理 → `thm.noself` 无自属集合

反设存在集合 $A$ 使 $A \in A$。由配对公理取 $a = b = A$，得单点集 {A}。

由外延公理 $\{A\} \ne \emptyset$（它含有 $A$）。对 {A} 用正则公理：存在 $x \in \{A\}$ 使

$$x \cap \{ A \} = \emptyset$$

而 {A} 只有唯一的元素，故 $x = A$。于是 $A \cap \{A\} = \emptyset$。

但由假设 $A \in A$ 且 $A \in \{A\}$，所以 $A \in A \cap \{A\}$，与 $A \cap \{A\} = \emptyset$ 矛盾。故 $A \notin A$。∎

> 把同样的论证用在任意有限 $\in$循环 $A_{0} \ni A_{1} \ni \cdots \ni A_{n} = A_{0}$ 上，取集合 $\{A_{0}$ …$A_{n-1}\}$（可由配对公理反复构造），也能得到矛盾。
