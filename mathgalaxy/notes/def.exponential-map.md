# 指数映射　`def.exponential-map`　·　说明
根 `../`

**$(\mathrm{d}\exp_{p})_{0} = \mathrm{id}$ 的三行算法**：取 $c(t) = tv$，则 $(\mathrm{d}\exp_{p})_{0}(v) = \frac{\mathrm{d}}{\mathrm{d}t}\big|_{t=0}\exp_{p}(tv) = \frac{\mathrm{d}}{\mathrm{d}t}\big|_{t=0}\gamma_{v}(t) = \dot\gamma_{v}(0) = v$。这就是「齐次性」换来的东西。

**法坐标在 $p$ 处是欧氏的**：由上一行得 $g_{ij}(p) = \delta_{ij}$，进一步还有 $\Gamma^{k}_{ij}(p) = 0$ 与 $\partial_{k}g_{ij}(p) = 0$（见「法坐标的欧氏性」那条引理）。⚠️ 只在 $p$ **一点**成立 —— 若在邻域上成立，曲面就平了。

**测地极坐标的构造**：$(\rho,\theta)\mapsto \exp_{p}(\rho\cos\theta\,e_{1}+\rho\sin\theta\,e_{2})$。第一条坐标线是测地线、$\rho$ 是弧长，第二条是「测地圆」。由高斯引理，第一基本形式在这个坐标下只剩 $I = \mathrm{d}\rho^{2}+G(\rho,\theta)\,\mathrm{d}\theta^{2}$。

> 续见 notes/def.exponential-map.2.md
