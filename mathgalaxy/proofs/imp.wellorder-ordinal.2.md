# 递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型
`imp.wellorder-ordinal` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比 → `thm.wellorder-ordinal` 良序集的序型

**③ $F$ 是单射。** 反设存在 $v \ne w$ 使 $F(v) = F(w)$；由于 $\preceq$ 是全序，不妨 $v \prec w$。由 ② 得 $F(v) \in F(w) = F(v)$，即 $F(v) \in F(v)$ —— 与「任何集合都不属于自身」（正则公理的推论）矛盾。（这一步是真正用到**正则公理**的地方。）

> 续见 proofs/imp.wellorder-ordinal.3.md
