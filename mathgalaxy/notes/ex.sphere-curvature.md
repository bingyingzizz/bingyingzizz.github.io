# 球面的曲率　`ex.sphere-curvature`　·　说明
根 `../`

**怎么算**：取球坐标 $r(\theta, \varphi) = R(\sin\theta\cos\varphi, \sin\theta\sin\varphi, \cos\theta)$，第一基本形式是 $R^{2}\,\mathrm{d}\theta^{2} + R^{2}\sin^{2}\theta\,\mathrm{d}\varphi^{2}$，第二基本形式是 $R\,\mathrm{d}\theta^{2} + R\sin^{2}\theta\,\mathrm{d}\varphi^{2}$。于是 $k_{1} = k_{2} = 1/R$，$K = k_{1}k_{2} = 1/R^{2}$。

⭐ **Gauss 的绝妙定理在这里看得最清楚**：$K = 1/R^{2}$ 只用到了 $R$，而 $R$ 是**内蕴**量（测地线距离、面积都能量出来）——尽管上面是用外在的第二基本形式算的。

📌 **Gauss–Bonnet 对账**：$\int_{S^{2}_{R}} K\,\mathrm{d}A = (1/R^{2})\cdot 4\pi R^{2} = 4\pi = 2\pi\chi(S^{2})$，与 $\chi = 2$ 吻合 —— 而且与 $R$ 无关（曲率变小、面积变大，正好抵消）。

⚠ **不要对一般曲面说「$K = 1/R^{2}$ 那种形式」**：只有球面两个主曲率相等。环面上 $K$ 变号（外侧正、内侧负），平面上 $K = 0$。
