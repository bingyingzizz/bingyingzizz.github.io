# 良序性 $\implies$ 递归定理
`imp.recursion-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 + `ax.repl` 替换公理模式 + `ax.sep` 分离公理模式 → `thm.recursion-wellorder` 超限递归

$$f(v) = G\big( f \upharpoonright W_{< v} \big) = G\big( g \upharpoonright W_{< v} \big) = g(v)$$

矛盾。故 $W_{< w}$ 上至多一个解，且这个解唯一确定。

**② 构造候选关系的集合。** 令

$$R = \{ (w, y) : \text{存在函数} f \text{ 定义在} W_{< w} \text{ 上、满足递归式，且} y = G(f) \}$$

由 ①，对每个 $w \in W$ 至多一个 $y$ 使 $(w, y) \in R$，所以 $R$ **是单值的**。

> 续见 proofs/imp.recursion-wellorder.3.md
