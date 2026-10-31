# Codazzi–Mainardi 方程　`thm.codazzi-mainardi`　·　说明
根 `../`

**它在说什么**：弯曲变化率在切方向上对称 —— 沿 $X$ 走时 $II$ 的改变量沿 $Y$ 的分量，等于沿 $Y$ 走时沿 $X$ 的分量。等价说法：$\mathbb{R}^{3}$ 曲率的混合分量 $R^{i}_{\ 3jk}$ 必须为零。

⭐ **不是假设，是必要条件**：$\mathbb{R}^{3}$ 平坦，所以任何能嵌入的曲面自动满足 Codazzi。它和 Gauss 方程一起构成「能否实现为 $\mathbb{R}^{3}$ 中的曲面」的完整相容性条件（`thm.fundamental-theorem-surfaces`）。

**坐标版对照**：写成 $n_{ij} = n_{ji}$ 的等价形式，p005 写成 $\nabla_{i}h_{kj} = \nabla_{j}h_{ki}$（$h$ 对称，两种写法一致）。标架版只要看 $\mathrm{d}\omega^{i}_{\ 3}$ 的 $\omega^{1}\wedge\omega^{2}$ 系数，不必碰 Christoffel 符号。

⚠️ 这条只在余维 $1$（曲面在 $\mathbb{R}^{3}$ 里）时取这个简单形状；高余维时右端还要多一项法丛曲率。本包只在 $\mathbb{R}^{3}$ 里用它。
