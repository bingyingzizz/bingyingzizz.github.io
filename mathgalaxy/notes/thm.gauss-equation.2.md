# Gauss 方程　`thm.gauss-equation`　·　说明
根 `../`

**二维只剩一个独立分量**：$R_{ijkl}$ 的分量被对称性锁死，二维时只有一个（$R_{1212}$），所以二维的 Gauss 方程是**一个**方程 —— 这也是二维曲面论能算得动的原因。

**点的分类**：$K > 0$ 椭圆点、$K = 0$ 且主曲率不全为零是抛物点、$K < 0$ 双曲点；$k_{1} = k_{2}$ 为脐点。

⭐ **读出来的推论（绝妙定理）**：$K = \mathrm{d}\omega^{1}_{\ 2}/(\omega^{1}\wedge\omega^{2})$ 里只出现 $\omega^{1},\omega^{2}$；而 $\omega^{1}_{\ 2}$ 由 $\mathrm{d}\omega^{1},\mathrm{d}\omega^{2}$ 加挠率为零的条件唯一解出（写 $\omega^{1}_{\ 2} = a_{1}\omega^{1}+a_{2}\omega^{2}$，两个方程给两个系数），所以 $K$ 只依赖 $I$ —— 即 Gauss 曲率是**内蕴**量。这条结果在 `diffgeom.intrinsic` 里有独立节点 `thm.theorema-egregium`（证明走标架与测地极坐标两条路），本包按「一个概念一个节点」不再重复建点，只把这一步记在这里。

> 续见 notes/thm.gauss-equation.3.md
