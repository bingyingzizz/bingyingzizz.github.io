# 围道估计：Cauchy 公式 + 留数 + 核 $F=e^{zT}(1+z^{2}/R^{2})$
`imp.newman-contour` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `def.contour-integral` 复围道积分 + `def.analytic-continuation` 解析延拓 + `def.holomorphic` 全纯函数 → `lem.newman-tauberian` Newman 解析定理

**$|I_{1}|\le B/R$**：在 $C_{+}$ 上 $x=\operatorname{Re}z>0$，由 (1)(3)，$\bigl|\int_{T}^{\infty}fe^{-tz}\mathrm{d}t\bigr||F|\le B e^{-Tx}/x\cdot e^{Tx}\cdot2x/R=2B/R$；再乘 $|\mathrm{d}z|/|z|=|\mathrm{d}z|/R$、沿长度 $\pi R$ 积分，得 $|I_{1}|\le B/R$。

> 续见 proofs/imp.newman-contour.5.md
