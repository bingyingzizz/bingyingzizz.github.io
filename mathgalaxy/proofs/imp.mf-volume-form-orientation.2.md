# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式（欧氏开集） → `prop.volume-form-orientation` 定向与体积形式

于是局部只有有限项非零、且没有异号项，$\omega_{p}$ 是若干非负倍数之和，而至少有一项系数 $\rho_{\alpha}(p) > 0$（和为 $1$）且那项在局部坐标下系数为正 —— 故 $\omega_{p} \ne 0$。

**（$\Longleftarrow$）有体积形式就有定向。** 设 $\omega$ 处处非零。

覆盖 $M$ 的每张卡 $(U_{\alpha},\varphi_{\alpha})$ 上，$\omega\big|_{U_{\alpha}} = f_{\alpha}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 且 $f_{\alpha}$ 处处非零。

把 $f_{\alpha} < 0$ 的那些卡换成 $(U_{\alpha}, \sigma \circ \varphi_{\alpha})$，其中 $\sigma$ 是交换前两个坐标的换位（它把 $\mathrm{d}x^{1}\wedge\cdots$ 变号）。

> 续见 proofs/imp.mf-volume-form-orientation.3.md
