# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式（欧氏开集） + `thm.smooth-partition-unity` 光滑单位分解 → `prop.volume-form-orientation` 体积与定向

这族卡仍覆盖 $M$、仍两两相容（只差一个固定微分同胚），而新坐标系下系数全为正。

于是任意两张卡的转移映射满足

$$\omega = f_{\beta}\,\mathrm{d}y^{\beta} = f_{\alpha}\,\det\Bigl(\frac{\partial y}{\partial x}\Bigr)\,\mathrm{d}x^{\alpha},\qquad f_{\alpha}, f_{\beta} > 0 ,$$

故 $\det(\partial y/\partial x) > 0$ —— 这是定向图册。

**「同一个定向」的判据。** 处处非零的 $\omega_{1}, \omega$ 满足 $\omega_{1} = f\omega$，$f$ 处处非零。

逐点看体积形式的符号：$f > 0$ 时两者在每张卡上给出同一个正方向，故同一定向；

$f$ 在某点 $< 0$ 则两族卡在该点的换序不同，定向相反。

> 续见 proofs/imp.mf-volume-form-orientation.4.md
