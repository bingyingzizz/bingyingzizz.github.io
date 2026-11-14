# Gauss 引理 + 结构方程给出测地极坐标的度量形式
`dep-cgc-geo` · 推出 · strong 边 · 根 `../`

`lem.gauss-lemma` Gauss 引理 + `thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 → `thm.constant-gauss-curvature` 常 Gauss 曲率曲面

**第三步（解 ODE）**：$K$ 为常数时特征根为 $\pm\sqrt{-K}$，配合测地极坐标的初值 $f(0)=0$、$f_{r}(0)=1$，$f$ 只有三角（$K>0$）、线性（$K=0$）、双曲（$K<0$）三族解，代回 $g$ 即三种常曲率度量形式。∎

> Gauss 引理只用在这一步：它把度量在测地极坐标下压成 $\mathrm{d}r^{2}+f^{2}\mathrm{d}\theta^{2}$。剩下的是一条二阶 ODE，来自 Gauss 方程 $\mathrm{d}\omega^{1}_{\ 2} = K\,\omega^{1}\wedge\omega^{2}$（第二结构方程），而不是一阶的 $\mathrm{d}\omega^{2}$。
