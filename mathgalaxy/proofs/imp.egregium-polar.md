# imp.egregium-polar
`imp.egregium-polar` · 推出 · strong 边 · 根 `../`

`lem.gauss-lemma` Gauss 引理 + `def.gauss-curvature` Gauss 曲率 → `thm.theorema-egregium` 绝妙定理

**目标：把 $K$ 写成只含唯一度量系数 $G$ 的表达式。**
**① 测地极坐标把 $I$ 压到一个函数。** 由高斯引理，$I = \mathrm{d}\rho^{2}+G(\rho,\theta)\,\mathrm{d}\theta^{2}$，其中 $E\equiv1$、$F\equiv0$。于是所有 $\Gamma$ 都可以用 $G$ 显式写出：$\Gamma^{\theta}_{\rho\theta} = \frac{G_{\rho}}{2G}$、$\Gamma^{\rho}_{\theta\theta} = -\frac{G_{\rho}}{2}$，其余为零。
**② 直接算唯一独立分量。** 代入 $R^{\ell}_{ijk}$ 的公式，取 $R_{1212}$（$1 = \rho$，$2 = \theta$）：
$$R_{1212} = \frac{1}{2}\left(\partial_{\rho}\partial_{\rho}G\right)-g_{\theta\theta}\Gamma^{\theta}_{\rho\theta}\Gamma^{\theta}_{\theta\rho} = \frac{G_{\rho\rho}}{2}-\frac{G_{\rho}^{2}}{4G}.$$
（$g_{11} = 1$，$\Gamma^{\rho}_{\rho

> 续见 proofs/imp.egregium-polar.2.md
