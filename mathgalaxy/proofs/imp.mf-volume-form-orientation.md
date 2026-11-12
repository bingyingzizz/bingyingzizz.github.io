# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式（欧氏开集） + `thm.smooth-partition-unity` 光滑单位分解 → `prop.volume-form-orientation` 体积与定向

**（$\implies$）有定向就有体积形式。** 取定向图册 $\{(U_{\alpha},\varphi_{\alpha})\}$ 与从属于它的光滑单位分解 $\{\rho_{\alpha}\}$（`thm.smooth-partition-unity`，先加细成局部有限）。令

$$\omega := \sum_{\alpha}\rho_{\alpha}\,\varphi_{\alpha}^{\ast}\bigl(\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}\bigr),$$

其中 $\rho_{\alpha}$ 在指标集外面延拓为 $0$。

每一项在 $p$ 处都 $\ge 0$ 倍的「正体积形式」：因为定向图册里任意两张卡的转移 Jacobi 行列式 $> 0$，所以同一张卡上两张卡给的正体积形式只差一个**正**的系数。

> 续见 proofs/imp.mf-volume-form-orientation.2.md
