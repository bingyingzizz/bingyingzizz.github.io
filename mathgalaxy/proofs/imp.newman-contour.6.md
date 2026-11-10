# 围道估计：Cauchy 公式 + 留数 + 核 $F=e^{zT}(1+z^{2}/R^{2})$
`imp.newman-contour` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `def.contour-integral` 复围道积分 + `def.analytic-continuation` 解析延拓 + `def.holomorphic` 全纯函数 → `lem.newman-tauberian` Newman 解析定理

**$I_{3}\to0$**：在 $C_{-}$ 上 $x\le0$；弦 $x=-\delta$ 上 $|F|\le2e^{-\delta T}$；圆弧上 $|F|=e^{xT}2|x|/R$。给定 $\varepsilon>0$：$|x|\le\varepsilon R/2$ 处 $|F|\le\varepsilon$，其余 $x\le-\varepsilon R/2$ 处 $|F|\le2e^{-\varepsilon RT/2}$，故 $F$ 在紧集 $C_{-}$ 上一致趋于 $0$；$g$ 有界、$|z|\ge\delta$，故 $I_{3}\to0$（$T\to\infty$）。

于是对每个固定 $R$，$|g(0)-g_{T}(0)|\le2B/R+o(1)$（$T\to\infty$）。先令 $T\to\infty$ 再令 $R\to\infty$，得 $g_{T}(0)=\int_{0}^{T}f\to g(0)$，即 $\int_{0}^{\infty}f=g(0)$。∎
