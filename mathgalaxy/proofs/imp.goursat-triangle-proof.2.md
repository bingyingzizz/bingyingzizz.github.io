# 全纯 + 围道积分 $\implies$ 三角形上的积分为零
`imp.goursat-triangle-proof` · 推出 · strong 边 · 根 `../`

`def.holomorphic` 全纯函数 + `def.contour-integral` 复围道积分 → `lem.goursat-triangle` Goursat 三角形引理

$$f(z)=f(z_0)+f'(z_0)(z-z_0)+\rho(z),\qquad |\rho(z)|\le\varepsilon\,|z-z_0|.$$

线性函数 $f(z_0)+f'(z_0)(z-z_0)$ 有原函数，沿闭曲线积分为零，因此

$$\eta_n=\oint_{\partial T^{(n)}}\rho(z)\,\mathrm{d}z.$$

在 $\partial T^{(n)}$ 上 $|z-z_0|\le \operatorname{diam}T^{(n)}=2^{-n}\operatorname{diam}T$，且周长 $\le 2^{-n}\operatorname{perim}T$，由 ML 估计

$$|\eta_n|\le \varepsilon\cdot 2^{-n}\operatorname{diam}T\cdot 2^{-n}\operatorname{perim}T.$$

> 续见 proofs/imp.goursat-triangle-proof.3.md
