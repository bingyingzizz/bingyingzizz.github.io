# 拉回　`prop.pullback-form-manifold`　·　说明
根 `../`

**逐条验证**：(1) $\mathbb{R}$-线性由 $\omega\mapsto\omega_{F(p)}(\mathrm{d}F_{p}\cdot)$ 对 $\omega$ 线性得到；函数的拉回 $(F^{\ast}f)(p) = f(F(p)) = (f\circ F)(p)$ 就是定义。

(2) **保楔积**：固定 $p$，记 $L = \mathrm{d}F_{p} : T_{p}M\to T_{F(p)}N$。对 $v_{1},\ldots,v_{k+l}\in T_{p}M$，用楔积的洗牌公式（对 $(k,l)$-洗牌 $\sigma$ 求和）：$(L^{\ast}\alpha\wedge L^{\ast}\beta)(v) = \sum_{\sigma}\operatorname{sgn}(\sigma)\,(L^{\ast}\alpha)(v_{\sigma(1)},\ldots)(L^{\ast}\beta)(v_{\sigma(k+1)},\ldots) = \sum_{\sigma}\operatorname{sgn}(\sigma)\,\alpha(Lv_{\sigma(1)},\ldots)\beta(Lv_{\sigma(k+1)},\ldots) = (\alpha\wedge\beta)(Lv_{1},\ldots,Lv_{k+l}) = L^{\ast}(\alpha\wedge\beta)(v).$ 取 $\alpha = \omega_{F(p)}$、$\beta = \eta_{F(p)}$，即得 (2)。

> 续见 notes/prop.pullback-form-manifold.3.md
