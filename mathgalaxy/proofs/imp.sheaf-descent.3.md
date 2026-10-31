# 预拓扑下的层 $\iff$ 正合列
`imp.sheaf-descent` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.pretopology` 预拓扑 + `def.sieve` 筛 → `thm.sheaf-descent` 层的下降条件

相容族恰好是 $\ker(\alpha - \beta)$ —— 即「$i$ 限制到交叠」与「$j$ 限制到交叠」结果一样。于是「层的双射条件」变成

$$F(X) \;\cong\; \ker(\alpha - \beta)$$

**（$\implies$）** 层给出 $\operatorname{Hom}(h_{X}, F) \cong \operatorname{Hom}(R, F)$，两边用米田与上面的计算展开就是所要的正合。**（$\Longleftarrow$）** 反过来，正合序列给出的那个 $\ker$ 与 $F(X)$ 的同构，对所有由覆盖族生成的筛 $R$ 成立；而每个 $R \in J(X)$ 都由某个覆盖族生成，所以对一切 $R \in J(X)$ 都有 $F(X) \cong \operatorname{Hom}(R, F)$，即 $F$ 是层。∎

> 续见 proofs/imp.sheaf-descent.4.md
