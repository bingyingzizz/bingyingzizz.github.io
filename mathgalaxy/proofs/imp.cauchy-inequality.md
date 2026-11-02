# 高阶导数公式 + ML 不等式 $\implies$ Cauchy 不等式
`imp.cauchy-inequality` · 推出 · strong 边 · 根 `../`

`thm.cauchy-higher-derivative` 高阶导数公式 → `thm.cauchy-inequality` Cauchy 不等式

取 $0 < r < R$。由高阶导数公式，在圆周 $|\zeta - z_0| = r$ 上

$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_{|\zeta - z_0| = r}\frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\,\mathrm{d}\zeta.$$

取模，把 $|\mathrm{d}\zeta|$ 的总长 $2\pi r$ 与分母的 $r^{n+1}$ 提出来：

$$\left| f^{(n)}(z_0) \right| \le \frac{n!}{2\pi} \cdot \frac{\max_{|\zeta - z_0| = r}|f(\zeta)|}{r^{n+1}} \cdot 2\pi r = \frac{n!\,M(r)}{r^n},$$

其中 $M(r) = \sup_{D(z_0, r)}|f|$（圆周上的上确界不超过圆盘上的）。$M(r)$ 关于 $r$ 单调不减，故 $M(r) \le M(R)$，得 $|f^{(n)}(z_0)| \le n! M(R)/r^n$。

左端与 $r$ 无关，令 $r \to R^-$ 即得 $|f^{(n)}(z_0)| \le n! M(R)/R^n$。$\blacksquare$
