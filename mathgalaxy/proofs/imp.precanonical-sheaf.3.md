# imp.precanonical-sheaf
`imp.precanonical-sheaf` · 推出 · strong 边 · 根 `../`

`def.precanonical-topology` 预标准拓扑 + `def.topos` 拓扑斯 + `def.sheaf` 层 → `prop.precanonical-sheaf` 预标准拓扑下的层

于是层条件读作 $F(X) \cong \ker\bigl(F(\coprod X_{i}) \rightrightarrows F(R)\bigr)$；

再接上「余积变积」就得到陈述里的第一条等式 ✓。

反过来取 $X = X/R$ 的商映射作覆盖，得 $F(X/R) \cong \ker(F(X)\rightrightarrows F(R))$ ✓。
- **合起来**：两条所说正是所有覆盖（都是有限族、余积满）的层条件 ✓。
- **推论**：$h_{X} = \operatorname{Hom}(X,-)$ 满足两条（Hom 把余积送成积、把商送成核），故每个可表示预层都是层 —— 即预标准拓扑是次标准的 ✓。∎
