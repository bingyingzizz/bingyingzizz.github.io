# 交叉同态 + 半直积 $\implies$ 一维上同调分类分裂结构
`imp.h1-semidirect` · 推出 · strong 边 · 根 `../`

`thm.h1-crossed` 一维上同调与交叉同态 + `def.semidirect-product` 半直积 → `thm.h1-semidirect` 一维上同调与分裂扩张

设 $1 \to A \xrightarrow{i} E \xrightarrow{\pi} G \to 1$ 有同态截面 $s$。

**① 截面就是交叉同态。** 对 $d : G \to A$ 令 $s_{d}(g) := i(d(g)) s(g)$；则 $\pi s_{d} = \pi s = \operatorname{id}$，所以 $s_{d}$ 是截面。又

$$s_{d}(g_{1})s_{d}(g_{2}) = i(d(g_{1}))\, s(g_{1})\, i(d(g_{2}))\, s(g_{2}) = i\bigl(d(g_{1}) + g_{1}d(g_{2})\bigr)\, s(g_{1}g_{2}),$$

其中用了共轭恒等式 $s(g_{1})\, i(a)\, s(g_{1})^{-1} = i(g_{1} \cdot a)$（这正是 $A$ 上 $G$-模结构的定义）。

而 $s_{d}(g_{1}g_{2}) = i(d(g_{1}g_{2})) s(g_{1}g_{2})$。

两式相等 $\iff$ $d(g_{1}g_{2}) = d(g_{1}) + g_{1}d(g_{2})$，即 $d \in Z^{1}$。

> 续见 proofs/imp.h1-semidirect.2.md
