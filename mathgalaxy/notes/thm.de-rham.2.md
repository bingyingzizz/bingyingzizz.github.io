# de Rham 定理　`thm.de-rham`　·　说明
根 `../`

1. **配对先良定义**：$\int_{c}\omega$ 只依赖 $[\omega]$ 与 $[c]$ —— 换 $c$ 为同调等价的链差一个边界，而闭形式在边界上的积分为零（`thm.stokes-chain` 的一个方向）；换 $\omega$ 为相差 $\mathrm{d}\eta$ 的形式，差为 $\int_{c}\mathrm{d}\eta = \int_{\partial c}\eta = 0$（同一条 Stokes 的另一个方向）。
2. **认成层上同调**：$\Omega^{\bullet}$ 是常层 $\underline{\mathbb{R}}$ 的消解（正合性逐点成立，逐点核为 $\mathbb{R}$，就是 Poincaré 引理 `lem.poincare-lemma`），于是 $H^{\bullet}_{\mathrm{dR}}(M) \cong H^{\bullet}(M;\underline{\mathbb{R}})$。
3. **Čech–de Rham 双复形**：取「好的覆盖」，把 $\check{C}^{p}(\mathfrak{U},\Omega^{q})$ 排成双复形（横向 Čech 微分、纵向 $\mathrm{d}$），两条谱序列算出同一个全上同调，得到 $H^{\bullet}_{\mathrm{dR}}(M) \cong \check{H}^{\bullet}(M;\underline{\mathbb{R}})$。
4. **Čech = 层上同调**：仿紧流形上 $\check{H}^{\bullet} \cong H^{\bullet}$（`thm.paracompact-cech-equals-sheaf`）。
5. **层上同调 = 奇异上同调*

> 续见 notes/thm.de-rham.3.md
