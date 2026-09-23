# 序数的定义 $\implies$ 三歧性
`imp.ordinal-trichotomy` · 推出 · strong 边 · 根 `../`

`def.ordinal` 序数 + `ax.found` 正则公理 → `thm.ordinal-trichotomy` 序数可比

设 $\alpha, \beta$ 是序数。

**① 序数的元素是序数。** 若 $\gamma \in \alpha$：$\gamma \subseteq \alpha$（$\alpha$ 传递），故 $\gamma$ 传递（$\gamma$ 的元素属于 $\alpha$，而 $\alpha$ 传递）；又 $\in$ 在 $\gamma$ 上继承 $\alpha$ 上的良序性，故 $\gamma$ 是序数。

> 续见 proofs/imp.ordinal-trichotomy.2.md
