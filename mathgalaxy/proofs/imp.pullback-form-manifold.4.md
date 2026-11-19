# imp.pullback-form-manifold
`imp.pullback-form-manifold` · 推出 · strong 边 · 根 `../`

`def.form-on-manifold` 微分形式 + `def.differential-map` 切映射 + `def.smooth-map` 光滑映射 → `prop.pullback-form-manifold` 拉回

(2) **保楔积**：固定 $p$，记 $L = \mathrm{d}F_{p} : T_{p}M\to T_{F(p)}N$。对 $v_{1},\ldots,v_{k+l}\in T_{p}M$，用楔积的洗牌公式（对 $(k,l)$-洗牌 $\sigma$ 求和）：$(L^{\ast}\alpha\wedge L^{\ast}\beta)(v) = \sum_{\sigma}\operatorname{sgn}(\sigma)\,(L^{\ast}\alpha)(v_{\sigma(1)},\ldots)(L^{\ast}\beta)(v_{\sigma(k+1)},\ldots) = \sum_{\sigma}\operatorname{sgn}(\sigma)\,\alpha(Lv_{\sigma(1)},\ldots)\beta(Lv_{\sigma(k+1)},\ldots) = (\alpha\wedge\beta)(Lv_{1},\ldots,Lv_{k+l}) = L^{\ast}(\alpha\wedge\beta)(v).$ 取 $\alpha = \omega_{F(p)}$、$\beta = \eta_{F(p)}$，即得 (2)。

> 续见 proofs/imp.pullback-form-manifold.5.md
