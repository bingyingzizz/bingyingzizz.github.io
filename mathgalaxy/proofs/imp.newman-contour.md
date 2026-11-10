# 围道估计：Cauchy 公式 + 留数 + 核 $F=e^{zT}(1+z^{2}/R^{2})$
`imp.newman-contour` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `def.contour-integral` 复围道积分 + `def.analytic-continuation` 解析延拓 + `def.holomorphic` 全纯函数 → `lem.newman-tauberian` Newman 解析定理

记 $B=\sup_{t\ge0}|f(t)|$。对 $T>0$ 令 $g_{T}(z)=\int_{0}^{T}f(t)e^{-zt}\,\mathrm{d}t$；它是整函数，对 $\operatorname{Re}z>0$ 有

$$|g(z)-g_{T}(z)|\le B\,\frac{e^{-T\operatorname{Re}z}}{\operatorname{Re}z}.\tag{1}$$

> 续见 proofs/imp.newman-contour.2.md
