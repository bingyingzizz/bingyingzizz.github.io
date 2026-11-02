# 递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型
`imp.wellorder-ordinal` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比 → `thm.wellorder-ordinal` 良序集的序型

设 $(W, \preceq )$ 是良序集。

**① 造出函数。** 由**递归定理**（取 $G(f) = \operatorname{ran}\, f$，即「前面全部取值的值域」）得到唯一的 $F$ 定义在 $W$ 上，使

$$F(w) = \{ F(v) : v \prec w \}, \qquad \forall w \in W$$

每个 $F(w)$ 都是集合 —— 由**替换公理模式**，$\{ F(v) : v \prec w \}$ 是某个集合的像。

**② $F$ 保序。** 若 $v \prec w$，则 $F(v) \in \{ F(u) : u \prec w \} = F(w)$。反过来若 $F(v) \in F(w)$，则 $F(v) = F(u)$ 对某个 $u \prec w$；再由 ③ 的单射性得 $v = u \prec w$。

> 续见 proofs/imp.wellorder-ordinal.2.md
