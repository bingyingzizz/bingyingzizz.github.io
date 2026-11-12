# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 + `thm.stokes` Stokes 定理 + `thm.stokes-chain` 链上的 Stokes 定理 + `lem.poincare-lemma` Poincaré 引理 + `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调 → `thm.de-rham` de Rham 定理

**第二步：把左边认成层上同调。** $\Omega^{\bullet}$ 是常层 $\underline{\mathbb{R}}$ 的消解：逐点的正合性就是 Poincaré 引理，逐点的核是 $\mathbb{R}$；

而 $\Omega^{0}$ 中 $\mathrm{d}$-闭的元素正是局部常函数（同层事实：d-闭 0-形式局部常），即 $\underline{\mathbb{R}}$ 的截面。

于是复形的上同调 $H^{\bullet}_{\mathrm{dR}}(M)$ 就是层上同调 $H^{\bullet}(M;\underline{\mathbb{R}})$。

> 续见 proofs/imp.mf2-de-rham.5.md
