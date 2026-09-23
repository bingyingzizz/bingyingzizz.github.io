# 良序集的序型　`thm.wellorder-ordinal`
每个良序集序同构于唯一的序数
layer 9 · 定理 · 序数与超限 · 集合论

设 $(W, \preceq )$ 是**良序集**。则存在**唯一**的序数 $\alpha$，使 $(W, \preceq )$ 与 $(\alpha, \in)$ **序同构**。这个 $\alpha$ 称为 $W$ 的**序型**，记作 $\operatorname{ot}(W) = \alpha$。

## 为什么成立（入边，证明在 proofs/）
- `thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比：递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型　proofs/imp.wellorder-ordinal.md

refs: Kunen, Set Theory, I.11；Jech, Set Theory, 2.3

> 说明见 `notes/thm.wellorder-ordinal.md`
