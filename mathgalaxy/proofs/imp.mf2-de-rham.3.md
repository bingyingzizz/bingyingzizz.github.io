# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

**第三步：Čech–de Rham 双复形。** 取「好的覆盖」$\mathfrak{U}$（每点邻域与每个有限交都可缩），把 $\check{C}^{p}(\mathfrak{U},\Omega^{q})$ 排成双复形：横向是 Čech 微分 $\delta$、纵向是 $\mathrm{d}$。

两条谱序列算出同一个全上同调：

- 沿 $q$ 先算：每行是 $\Omega^{\bullet}$ 在可缩开集上的截面，由 Poincaré 引理正合，得 $\check{H}^{\bullet}(\mathfrak{U};\underline{\mathbb{R}})$；

- 沿 $p$ 先算：Čech 方向正合（层条件），得 $H^{\bullet}_{\mathrm{dR}}(M)$。

两者收敛到同一极限，故 $H^{\bullet}_{\mathrm{dR}}(M) \cong \check{H}^{\bullet}(M;\underline{\mathbb{R}})$。

> 续见 proofs/imp.mf2-de-rham.4.md
