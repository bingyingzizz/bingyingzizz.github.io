# Zorn 引理：Baer 判据的极大延拓
`imp.zorn-baer` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.baer-criterion` 内射的理想判据

即 $f_{0}(a) + rx = f_{0}(a') + r'x$ ✓。**$R$-线性**：$f_{1}(s(a + rb)) = f_{0}(sa) + (sr)x = s f_{0}(a) + s(rx) = s f_{1}(a + rb)$，加法同理 ✓。又 $f_{1}|_{A_{0}} = f_{0}$（取 $r = 0$），故 $(A_{1}, f_{1}) \in \mathcal{S}$ 严格大于 $(A_{0}, f_{0})$ —— 与极大性矛盾。

所以 $A_{0} = B$，$f_{0}$ 就是 $f$ 到 $B$ 的延拓。由于 $A \hookrightarrow B$ 与 $f$ 任意，$I$ 内射 ✓。∎
