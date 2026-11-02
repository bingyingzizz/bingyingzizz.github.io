# 序数的定义 $\implies$ 三歧性
`imp.ordinal-trichotomy` · 推出 · strong 边 · 根 `../`

`def.ordinal` 序数 + `ax.found` 正则公理 → `thm.ordinal-trichotomy` 序数可比

**④ 三者不相容。** 若 $\alpha \in \beta$ 且 $\beta \in \alpha$，则由传递性 $\alpha \in \alpha$，与 $\in$ 在 $\alpha$ 上是良序（无 $\in$-循环）矛盾。

又 $\alpha \in \beta$ 与 $\alpha = \beta$ 显然不相容。

**⑤ $\in$ 是良序。** 可比性已得；非空序数集合 $S$ 取 $\alpha \in S$，若 $\alpha$ 不是 $\in$-最小元，则 $\alpha \cap S$ 是集合，由正则公理有 $\in$-最小元 $m$，而 $m$ 也是 $S$ 的 $\in$-最小元。∎

> ② 是全部关键：「序数之间 $\subset$ 就是 $\in$」。它让序数的比较退化成集合的属于关系。
