# Liouville 公式　`thm.liouville-formula`　·　说明
根 `../`

**结构**：$k_{g} = \frac{\mathrm{d}\theta}{\mathrm{d}s}-\omega^{1}_{2}(\dot\gamma)$，第一项是曲线相对标架的转角，第二项是标架本身的转动；把 $\omega^{1}_{2} = \frac{(\ln E)_{v}}{2\sqrt G}\omega^{1}-\frac{(\ln G)_{u}}{2\sqrt E}\omega^{2}$ 代进去就是上式。

**两处校验**（都能手算）：

- 平面极坐标（$E = 1$，$G = \rho^{2}$）上半径 $\rho_{0}$ 的同心圆：$\theta\equiv\frac{\pi}{2}$、$\frac{\mathrm{d}\theta}{\mathrm{d}s} = 0$，公式给 $k_{g} = \frac{2/\rho_{0}}{2} = \frac{1}{\rho_{0}}$ —— 圆的曲率，正确；
- 球面（$I = \mathrm{d}\rho^{2}+\sin^{2}\rho\,\mathrm{d}\theta^{2}$）上的纬线圈 $\rho = \rho_{0}$：$k_{g} = \frac{2\cot\rho_{0}}{2} = \cot\rho_{0}$，与直接计算一致。

> 续见 notes/thm.liouville-formula.2.md
