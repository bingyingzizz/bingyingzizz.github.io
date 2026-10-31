# Cauchy 不等式（$n = 1$）$\implies$ Liouville 定理
`imp.complex-liouville` · 推出 · strong 边 · 根 `../`

`thm.cauchy-inequality` Cauchy 不等式 → `thm.liouville` Liouville 定理

设 $f$ 在 $\mathbb{C}$ 上全纯且 $|f| \le M$。

**逐点估计。** 固定任意 $z \in \mathbb{C}$ 与任意 $R > 0$。$f$ 在 $D(z, R)$ 上全纯，由 $n = 1$ 的 Cauchy 不等式

$$|f'(z)| \le \frac{1!}{R^{1}}\,M(R) \le \frac{M}{R}.$$

**让 $R \to \infty$。** 右端与 $z$ 无关，左端与 $R$ 无关，故 $f'(z) = 0$ 对每个 $z$ 成立。

**从导数到函数。** $f' \equiv 0$ 且 $\mathbb{C}$ 连通：沿连接任意两点的折线，$\frac{\mathrm{d}}{\mathrm{d}t} f(z_0 + tv) = f' \cdot v = 0$，故 $f$ 在这条路上为常数。所以 $f$ 是常数。

**为什么必须是「全平面」。** 同一论证在 $D(0, R_0)$ 上只给出 $|f'(z)| \le M/(R_0 - |z|)$，右端随 $R_0$ 固定而不趋零 —— 所以有界全纯函数在**有界**区域上可以非常数（恒等映射在单位圆盘上就是）。$\blacksquare$
