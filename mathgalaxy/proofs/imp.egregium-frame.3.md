# imp.egregium-frame
`imp.egregium-frame` · 推出 · strong 边 · 根 `../`

`def.gauss-curvature` 高斯曲率 + `def.curvature-tensor` 黎曼曲率张量 + `prop.christoffel-frame` 标架下的联络系数 → `thm.theorema-egregium` 绝妙定理

。于是
$$K\,\omega^{1}\wedge\omega^{2} = \mathrm{d}\omega^{1}_{2},$$
右端只依赖 $I$（第②步），所以 $K$ 只依赖 $I$。
**④ 收尾。** 若 $\varphi$ 是局部等距，则 $I_{1} = \varphi^{*}I_{2}$，故两侧的 $\omega$ 都被拉回、$\mathrm{d}\omega^{1}_{2}$ 逐点相等，于是 $K_{1} = K_{2}\circ\varphi$。$\blacksquare$
⚠️ 符号与约定：本包取 $\omega^{i}_{j} = \langle\nabla e_{j},e_{i}\rangle$。这时单位球面可以直接验算：取测地极坐标，$\omega^{1} = \mathrm{d}\rho$、$\omega^{2} = \sin\rho\,\mathrm{d}\theta$、$\omega^{1}_{2} = -\cos\rho\,\mathrm{d}\theta$，于是 $\mathrm{d}\omega^{1}_{2} = \sin\rho\,\mathrm{d}\rho\wedge\mathrm{d}\theta = +\omega^{1}\wedge\omega^{2}$，即 $K = 1$；同时 $

> 续见 proofs/imp.egregium-frame.4.md
