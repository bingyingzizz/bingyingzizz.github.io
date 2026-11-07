# 拉回　`prop.pullback-form-manifold`　·　说明
根 `../`

**证明分四步**：先说明 $F^{\ast}\omega$ 确实是光滑的 $k$-形式，再逐条验证 (1)–(4)，最后 (2)+(3) 合起来说明它是微分分次代数同态。所有等式都是逐点验证 —— 形式逐点定义，所以「逐点相等」就是「形式相等」。

**光滑性**：取 $M$ 的图卡 $(U,x)$ 与 $N$ 的图卡 $(V,y)$，且 $F(U)\subseteq V$。在 $y$ 坐标下 $\omega = \sum_{I} a_{I}\,\mathrm{d}y^{I}$，$F$ 写成 $y = F(x) = (F^{1}(x), \ldots, F^{n}(x))$。则 $F^{\ast}\omega = \sum_{I}(a_{I}\circ F)\,\mathrm{d}F^{i_{1}}\wedge\cdots\wedge\mathrm{d}F^{i_{k}},\qquad \mathrm{d}F^{i} = \sum_{j}\frac{\partial F^{i}}{\partial x^{j}}\,\mathrm{d}x^{j}.$ 右端系数是光滑函数的积与和，故 $F^{\ast}\omega$ 在 $U$ 上光滑；图卡 $U$ 覆盖 $M$，故整体光滑。（这里 $\mathrm{d}F$ 与 `def.differential-map` 的微分是同一个东西：$\mathrm{d}F_{p}$ 是切映。）

> 续见 notes/prop.pullback-form-manifold.2.md
