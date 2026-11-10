# 围道估计：Cauchy 公式 + 留数 + 核 $F=e^{zT}(1+z^{2}/R^{2})$
`imp.newman-contour` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `def.contour-integral` 复围道积分 + `def.analytic-continuation` 解析延拓 + `def.holomorphic` 全纯函数 → `lem.newman-tauberian` Newman 解析定理

**$|I_{2}|\le B/R$**：$h(z)=\int_{0}^{T}fe^{-tz}\mathrm{d}t$ 整，$hF/z$ 在左半圆盘上全纯（$0$ 不在其中）；由 Cauchy 定理把 $C_{-}$ 变形为左半圆 $L=\{|z|=R,\operatorname{Re}z\le0\}$。在 $L$ 上 $x<0$，$|h|\le B(e^{-Tx}-1)/(-x)\le Be^{-Tx}/(-x)$，于是 $|hF|\le Be^{-Tx}/(-x)\cdot e^{Tx}\cdot2(-x)/R=2B/R$，同得 $|I_{2}|\le B/R$。

> 续见 proofs/imp.newman-contour.6.md
