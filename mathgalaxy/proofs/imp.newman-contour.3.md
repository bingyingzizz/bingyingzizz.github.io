# 围道估计：Cauchy 公式 + 留数 + 核 $F=e^{zT}(1+z^{2}/R^{2})$
`imp.newman-contour` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `def.contour-integral` 复围道积分 + `def.analytic-continuation` 解析延拓 + `def.holomorphic` 全纯函数 → `lem.newman-tauberian` Newman 解析定理

令 $C_{+}=C\cap\{\operatorname{Re}z>0\}$、$C_{-}=C\cap\{\operatorname{Re}z\le0\}$，把 (2) 拆成三段 $I_{1}+I_{2}+I_{3}$：$I_{1}$ 在 $C_{+}$ 上用 $g-g_{T}=\int_{T}^{\infty}fe^{-zt}\,\mathrm{d}t$，$I_{2}$ 在 $C_{-}$ 上用 $g-g_{T}=g-\int_{0}^{T}fe^{-zt}\,\mathrm{d}t$，$I_{3}$ 是 $g$ 在 $C_{-}$ 上的部分。

在 $|z|=R$ 上，$R^{2}+z^{2}=2z\operatorname{Re}z$，故

$$\left|1+\frac{z^{2}}{R^{2}}\right|=\frac{2|\operatorname{Re}z|}{R},\qquad |F(z)|=e^{T\operatorname{Re}z}\,\frac{2|\operatorname{Re}z|}{R}.\tag{3}$$

> 续见 proofs/imp.newman-contour.4.md
