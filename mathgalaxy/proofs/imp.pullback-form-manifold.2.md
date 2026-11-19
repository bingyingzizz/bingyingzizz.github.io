# imp.pullback-form-manifold
`imp.pullback-form-manifold` · 推出 · strong 边 · 根 `../`

`def.form-on-manifold` 微分形式 + `def.differential-map` 切映射 + `def.smooth-map` 光滑映射 → `prop.pullback-form-manifold` 拉回

**光滑性**：取 $M$ 的图卡 $(U,x)$ 与 $N$ 的图卡 $(V,y)$，且 $F(U)\subseteq V$。在 $y$ 坐标下 $\omega = \sum_{I} a_{I}\,\mathrm{d}y^{I}$，$F$ 写成 $y = F(x) = (F^{1}(x), \ldots, F^{n}(x))$。则 $F^{\ast}\omega = \sum_{I}(a_{I}\circ F)\,\mathrm{d}F^{i_{1}}\wedge\cdots\wedge\mathrm{d}F^{i_{k}},\qquad \mathrm{d}F^{i} = \sum_{j}\frac{\partial F^{i}}{\partial x^{j}}\,\mathrm{d}x^{j}.$ 右端系数是光滑函数的积与和，故 $F^{\ast}\omega$ 在 $U$ 上光滑；图卡 $U$ 覆盖 $M$，故整体光滑。（这里 $\mathrm{d}F$ 与 `def.differential-map` 的微分是同一个东西：$\mathrm{d}F_{p}$ 是切映。）

> 续见 proofs/imp.pullback-form-manifold.3.md
