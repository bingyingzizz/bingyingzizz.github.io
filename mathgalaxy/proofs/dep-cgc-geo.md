# Gauss 引理给出测地极坐标的度量形式
`dep-cgc-geo` · 推出 · strong 边 · 根 `../`

`lem.gauss-lemma` Gauss 引理 → `thm.constant-gauss-curvature` 常 Gauss 曲率曲面

在 $p$ 处取测地极坐标 $(r,\theta)$。由 Gauss 引理（推论二：极坐标展开），径向测地线与测地圆正交，故 $\partial_{r}\perp\partial_{\theta}$，度量写成 $g = \mathrm{d}r^{2} + f(r,\theta)^{2}\,\mathrm{d}\theta^{2}$。把这一形式代入 Cartan 结构方程 $\mathrm{d}\omega^{2} = K\,\omega^{1}\wedge\omega^{2}$，得 $f$ 满足 $f_{rr} + Kf = 0$；$K$ 为常数时特征根为 $\pm\sqrt{-K}$，配合测地极坐标的初值 $f(0)=0$、$f_{r}(0)=1$，解只有三角、线性、双曲三族，即三种常曲率度量形式。∎

> Gauss 引理只用在这一步：它把度量在测地极坐标下压成 $\mathrm{d}r^{2}+f^{2}\mathrm{d}\theta^{2}$，其余全是 ODE。
