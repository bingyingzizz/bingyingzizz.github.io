# 留数定理 + 绕数 $\implies$ 辐角原理
`imp.argument-principle` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 + `def.winding-number` 绕数 → `thm.argument-principle` 辐角原理

**第三步：逐项算留数。** 每一项都是 $\gamma$ 内部的一阶极点：$\operatorname{Res}\left( \dfrac{m_k}{z - a_k}, a_k \right) = m_k$，$\operatorname{Res}\left( \dfrac{-n_j}{z - b_j}, b_j \right) = -n_j$；而 $g'/g$ 在内部全纯，没有留数。由留数定理

$$\frac{1}{2\pi i}\oint_{\gamma} \frac{f'(z)}{f(z)}\,\mathrm{d}z = \sum_{k} m_k - \sum_{j} n_j = Z - P.$$

**第四步：左边也是绕数。** 令 $w = f(z)$，则 $\mathrm{d}w = f'(z)\,\mathrm{d}z$，$f \circ \gamma$ 是绕 $0$ 的闭曲线：

$$n(f \circ \gamma, 0) = \frac{1}{2\pi i}\oint_{f \circ \gamma} \frac{\mathrm{d}w}{w} = \frac{1}{2\pi i}\oint_{\gamma} \frac{f'(z)}{f(z)}\,\mathrm{d}z.$$

两式相合即得 $Z - P = n(f \circ \gamma, 0)$。$\blacksquare$
