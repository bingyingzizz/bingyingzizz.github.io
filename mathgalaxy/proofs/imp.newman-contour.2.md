# 围道估计：Cauchy 公式 + 留数 + 核 $F=e^{zT}(1+z^{2}/R^{2})$
`imp.newman-contour` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `def.contour-integral` 复围道积分 + `def.analytic-continuation` 解析延拓 + `def.holomorphic` 全纯函数 → `lem.newman-tauberian` Newman 解析定理

固定 $R>0$。由解析延拓假设，$g$ 在闭半平面 $\{\operatorname{Re}z\ge0\}$ 的某开邻域上全纯；紧集 $\{|z|\le R,\operatorname{Re}z\ge0\}$ 到补集有正距离，故存在 $\delta=\delta(R)>0$，使 $g$ 在 $D=\{|z|\le R,\operatorname{Re}z\ge-\delta\}$ 上全纯。令 $C=\partial D$（正向），$F(z)=e^{zT}(1+z^{2}/R^{2})$（整，$F(0)=1$）。$(g-g_{T})F/z$ 在 $D$ 内除 $z=0$ 外全纯，$z=0$ 是单极点、留数 $(g-g_{T})(0)=g(0)-g_{T}(0)$。由 Cauchy 积分公式与留数公式，

$$g(0)-g_{T}(0)=\frac{1}{2\pi i}\oint_{C}\bigl(g-g_{T}\bigr)(z)\,F(z)\,\frac{\mathrm{d}z}{z}.\tag{2}$$

> 续见 proofs/imp.newman-contour.3.md
