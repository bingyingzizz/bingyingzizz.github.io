# de Rham 定理的 $k=0$ 情形：上同调数连通分支
`imp.derived-h0-from-de-rham` · 推出 · strong 边 · 根 `../`

`thm.de-rham` de Rham 定理 → `thm.de-rham-h0` 零次上同调

于是 $f$ 是上循环当且仅当它在每条道路两端取值相同，即 $f$ 在**道路连通分支**上常值；又因为没有 $-1$-单形，上边缘群为零。流形局部道路连通，连通与道路连通一致，设连通分支有 $c$ 个，则

$$H^{0}_{\mathrm{sing}}(M;\mathbb{R}) \cong \mathbb{R}^{c},$$

再由 $\Phi^{0}$ 得 $H^{0}_{\mathrm{dR}}(M) \cong \mathbb{R}^{c}$；特别地 $M \ne \emptyset$ 时 $M$ 连通当且仅当 $\dim H^{0}_{\mathrm{dR}}(M) = 1$。$\blacksquare$

> 这里没有任何「形式」的计算：$H^{0}$ 的整条结论都是从 de Rham 定理借来的，$k \ge 1$ 才需要 Poincaré 引理那一套。 ⚠ 本边证明条件于 `thm.de-rham`（`thm.de-rham` 仍 skeleton）。
