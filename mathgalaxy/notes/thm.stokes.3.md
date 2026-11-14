# Stokes 定理　`thm.stokes`　·　说明
根 `../`

**与 Gauss–Bonnet 的关系**：曲面上 $K\,\mathrm{d}A = \mathrm{d}\omega^{1}_{\ 2}$（Gauss 方程，`thm.gauss-equation`），于是 Gauss–Bonnet 的整体形式可以看成 Stokes 加上边界项 $\int k_{g}\,\mathrm{d}s$ —— 两条定理在这一层同源。

⚠️ **边界定向最容易错**：约定是「外法向在前」，即 $\partial M$ 的定向由「外法向 $\wedge$ $M$ 的定向」给出。符号错了整条公式就差一个负号，而所有特例都会「看起来对」。

**为什么需要定向**：两边都依赖定向，且同时变号，所以等式与定向的选取无关；但没有定向就写不出「积分」这件事（`def.integral-form`）。
