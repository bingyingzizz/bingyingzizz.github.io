# 递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型
`imp.wellorder-ordinal` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比 → `thm.wellorder-ordinal` 良序集的序型

— 但 $h(a) \in L_{< a}$ 意为 $h(a) \prec a$，矛盾。∎

> 整个证明只用 **ZF**（递归定理 + 替换公理 + 三歧性），不要选择公理。这正是 Hartogs 定理能在 ZF 里成立的原因之一。
