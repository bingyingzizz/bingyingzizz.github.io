# 递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型
`imp.wellorder-ordinal` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比 → `thm.wellorder-ordinal` 良序集的序型

**⑥ 唯一性。** 设 $\alpha, \beta$ 都是 $W$ 的序型，则 $(\alpha, \in) \cong (\beta, \in)$。由**三歧性**，$\alpha \in \beta$、$\alpha = \beta$、$\beta \in \alpha$ 恰有一个成立。若 $\alpha \in \beta$：由 $\beta$ 传递得 $\alpha \subseteq \beta$，且 $\alpha = \{ x \in \beta : x \in \alpha \}$ 是 $\beta$ 的**真**初始段。把两个序同构接起来，得到 $(\alpha, \in)$ 与自己的真初始段序同构 —— 而**良序集不能与自己的真初始段序同构**（见下），矛盾。故 $\alpha \notin \beta$；交换 $\alpha, \beta$ 同理得 $\beta \notin \alpha$。于是

> 续见 proofs/imp.wellorder-ordinal.5.md
