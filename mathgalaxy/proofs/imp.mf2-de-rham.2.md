# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

**第二步：把左边认成层上同调。** $\Omega^{\bullet}$ 是常层 $\underline{\mathbb{R}}$ 的消解：逐点的正合性就是 Poincaré 引理（`lem.poincare-lemma`），逐点的核是 $\mathbb{R}$；而 $\Omega^{0}$ 中 $\mathrm{d}$-闭的元素正是局部常函数（`thm.de-rham-h0` 的论证），即 $\underline{\mathbb{R}}$ 的截面。于是复形的上同调 $H^{\bullet}_{\mathrm{dR}}(M)$ 就是层上同调 $H^{\bullet}(M;\underline{\mathbb{R}})$。

**第三步：Čech–de Rham 双复形。** 取「好的覆盖」$\mathfrak{U}$（每点邻域与每个有限交都可缩），把 $\check{C}^{p}(\mathfrak{U},\Omega^{q})$ 排成双复形：横向是 Čech 微分 $\delta$、纵向是 $\mathrm{d}$。两条谱序列算出同一个全上同调：

> 续见 proofs/imp.mf2-de-rham.3.md
