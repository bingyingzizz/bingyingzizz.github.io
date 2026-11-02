# 选择公理：Set 的小积存在
`imp.ac-presheaf-limits` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 → `thm.presheaf-limits-colimits` 预层范畴的极限与余极限

要证 $\mathbf{Set}$ 有所有小极限，只需：有小积 + 有等化子（极限由两者造）。

等化子显然是子集 $\{a : f(a) = g(a)\}$。

**小积**：给定一族集合 $\{A_{i}\}_{i \in I}$，乘积 $\prod_{i} A_{i}$ 是「每个 $i$ 挑一个元素的族」的全体 —— 它**非空**当且仅当每个 $A_{i}$ 非空，而「每层非空 $\implies$ 元组存在」正是选择公理。

（没有 AC 时，$\prod_{i} A_{i}$ 仍然**作为集合存在**（它是 $\mathcal{P}(I \times \bigcup A_{i})$ 的子集），但可能是空集 —— 而范畴论的极限要求「顶点集合非空且满足泛性质」，需要元组存在。）

所以「$\mathbf{Set}$ 完备」这一步用掉 AC；预层范畴的极限逐点构造，故同一 AC 也支撑了 `thm.presheaf-limits-colimits` 的第一句话。
