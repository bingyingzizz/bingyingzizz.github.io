# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式 → `prop.volume-form-orientation` 定向与体积形式

**（$\Longleftarrow$）有体积形式就有定向。** 设 $\omega$ 处处非零。覆盖 $M$ 的每张卡 $(U_{\alpha},\varphi_{\alpha})$ 上，$\omega\big|_{U_{\alpha}} = f_{\alpha}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 且 $f_{\alpha}$ 处处非零。把 $f_{\alpha} < 0$ 的那些卡换成 $(U_{\alpha}, \sigma \circ \varphi_{\alpha})$，其中 $\sigma$ 是交换前两个坐标的换位（它把 $\mathrm{d}x^{1}\wedge\cdots$ 变号）。这族卡仍覆盖 $M$、仍两两相容（只差一个固定微分同胚），而新坐标系下系数全为正。于是任意两张卡的转移映射满足

$$\omega = f_{\beta}\,\mathrm{d}y^{\beta} = f_{\alpha}\,\det\Bigl(\frac{\partial y}{\partial x}\Bigr)\,\mathrm{d}x^{\alpha},\qquad f_{\alpha}, f_{\beta} > 0 ,$$

> 续见 proofs/imp.mf-volume-form-orientation.4.md
