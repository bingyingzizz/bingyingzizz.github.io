# 序数的定义 $\implies$ 三歧性
`imp.ordinal-trichotomy` · 推出 · strong 边 · 根 `../`

`def.ordinal` 序数 + `ax.found` 正则公理 → `thm.ordinal-trichotomy` 序数可比

**③ 三歧性。** 若 $\alpha \ne \beta$，则 $\alpha \subseteq \beta$ 与 $\beta \subseteq \alpha$ 不能同时成立。不妨设 $\beta \nsubseteq \alpha$，则 $\beta \setminus \alpha \ne \emptyset$，故 $\beta \subset \alpha$ 不成立，由 ② 得 $\alpha \in \beta$。对调 $\alpha, \beta$ 同理。

**④ 三者不相容。** 若 $\alpha \in \beta$ 且 $\beta \in \alpha$，则由传递性 $\alpha \in \alpha$，与 $\in$ 在 $\alpha$ 上是良序（无 $\in$-循环）矛盾。又 $\alpha \in \beta$ 与 $\alpha = \beta$ 显然不相容。

> 续见 proofs/imp.ordinal-trichotomy.4.md
