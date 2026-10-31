# 局部常函数在分支上常值 $\implies$ 零次上同调是分支数
`imp.mf-h0` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.connected` 连通与连通分量 → `thm.de-rham-h0` 零次上同调

**维数。** 设分支为 $\{C_{\lambda}\}_{\lambda \in \Lambda}$（$|\Lambda| = c$）。每个局部常函数对应一族常数 $(a_{\lambda})$，反之给定 $(a_{\lambda})$ 令 $f\big|_{C_{\lambda}} \equiv a_{\lambda}$ 即得局部常函数（每个分支在 $M$ 里既开又闭，故 $f$ 光滑）。所以 $Z^{0} \cong \mathbb{R}^{\Lambda}$，维数 $c$。

**连通情形。** $c = 1$ 时 $H^{0} \cong \mathbb{R}$，维数 $1$；$c > 1$ 时维数大于 $1$。故 $M$ 连通当且仅当 $\dim H^{0} = 1$（$M \ne \emptyset$ 保证至少 $1$ 维）。∎
