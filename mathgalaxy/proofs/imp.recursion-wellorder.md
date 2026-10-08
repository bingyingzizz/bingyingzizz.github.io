# 良序性 $\implies$ 递归定理
`imp.recursion-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 → `thm.recursion-wellorder` 超限递归

设 $(W, \preceq )$ 是良序集，$G$ 任给。记 $W_{< w} = \{ v \in W : v \prec w \}$。

**① 初始段上的解至多一个。** 设 $w \in W$，$f, g$ 都是 $W_{< w}$ 上满足递归式的函数。反设 $f \ne g$，取最小的 $v \prec w$ 使 $f(v) \ne g(v)$（这一步用的是**良序性**：$\{ u \prec w : f(u) \ne g(u) \}$ 非空故有最小元）。于是在 $W_{< v}$ 上 $f$ 与 $g$ 相同，从而

$$f(v) = G\big( f \upharpoonright W_{< v} \big) = G\big( g \upharpoonright W_{< v} \big) = g(v)$$

矛盾。故 $W_{< w}$ 上至多一个解，且这个解唯一确定。

**② 构造候选关系的集合。** 令

> 续见 proofs/imp.recursion-wellorder.2.md
