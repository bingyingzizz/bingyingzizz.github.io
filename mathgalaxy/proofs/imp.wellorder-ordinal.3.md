# 递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型
`imp.wellorder-ordinal` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比 → `thm.wellorder-ordinal` 良序集的序型

**$\in$ 良序**：$\alpha$ 上的 $\in$ 经 ②③ 就是 $(W, \prec)$ 的序（$x \in y \iff F^{-1}(x) \prec F^{-1}(y)$），良序性原样搬过来。

**⑤ 于是 $F$ 是 $(W, \preceq ) \to (\alpha, \in)$ 的序同构**，故 $W$ 的序型 $\alpha$ 存在。

**⑥ 唯一性。** 设 $\alpha, \beta$ 都是 $W$ 的序型，则 $(\alpha, \in) \cong (\beta, \in)$。

由**三歧性**，$\alpha \in \beta$、$\alpha = \beta$、$\beta \in \alpha$ 恰有一个成立。

> 续见 proofs/imp.wellorder-ordinal.4.md
