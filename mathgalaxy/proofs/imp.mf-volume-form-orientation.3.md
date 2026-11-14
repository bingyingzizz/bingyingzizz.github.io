# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式（欧氏开集） + `thm.smooth-partition-unity` 光滑单位分解 → `prop.volume-form-orientation` 体积与定向

把 $f_{\alpha} < 0$ 的那些卡换成 $(U_{\alpha}, \sigma \circ \varphi_{\alpha})$，其中 $\sigma$ 在 $n\ge 2$ 时交换前两个坐标、在 $n = 1$ 时取 $x\mapsto -x$ —— 两者都把 $\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 变号。

这族卡仍覆盖 $M$、仍两两相容（只差一个固定微分同胚），而新坐标系下系数全为正。

于是任意两张卡的转移映射满足

$$\omega = f_{\beta}\,\mathrm{d}y^{\beta} = f_{\alpha}\,\det\Bigl(\frac{\partial y}{\partial x}\Bigr)\,\mathrm{d}x^{\alpha},\qquad f_{\alpha}, f_{\beta} > 0 ,$$

故 $\det(\partial y/\partial x) > 0$ —— 这是定向图册。

> 续见 proofs/imp.mf-volume-form-orientation.4.md
