# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 + `thm.stokes` Stokes 定理 + `thm.stokes-chain` 链上的 Stokes 定理 + `lem.poincare-lemma` Poincaré 引理 + `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调 → `thm.de-rham` de Rham 定理

**第三步：Čech–de Rham 双复形。** 取「好的覆盖」$\mathfrak{U}$（每点邻域与每个有限交都可缩），把 $\check{C}^{p}(\mathfrak{U},\Omega^{q})$ 排成双复形：横向是 Čech 微分 $\delta$、纵向是 $\mathrm{d}$。

两条谱序列算出同一个全上同调：

- 沿 $q$ 先算：每行是 $\Omega^{\bullet}$ 在可缩开集上的截面，由 Poincaré 引理正合，得 $\check{H}^{\bullet}(\mathfrak{U};\underline{\mathbb{R}})$；

> 续见 proofs/imp.mf2-de-rham.7.md
