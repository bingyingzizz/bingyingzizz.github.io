# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式 → `prop.volume-form-orientation` 定向与体积形式

其中 $\rho_{\alpha}$ 在指标集外面延拓为 $0$。每一项在 $p$ 处都 $\ge 0$ 倍的「正体积形式」：因为定向图册里任意两张卡的转移 Jacobi 行列式 $> 0$，所以同一张卡上两张卡给的正体积形式只差一个**正**的系数。于是局部只有有限项非零、且没有异号项，$\omega_{p}$ 是若干非负倍数之和，而至少有一项系数 $\rho_{\alpha}(p) > 0$（和为 $1$）且那项在局部坐标下系数为正 —— 故 $\omega_{p} \ne 0$。

> 续见 proofs/imp.mf-volume-form-orientation.3.md
