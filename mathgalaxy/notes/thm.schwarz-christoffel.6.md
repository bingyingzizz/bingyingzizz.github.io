# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

（ii）**辐角原理收尾（完整）。** 设（i）已证：$J:=F(\partial\mathbb{H})$ 是简单闭曲线，$F$ 连续延拓到 $\overline{\mathbb{H}}$ 且在 $\mathbb{H}$ 内局部共形（$F'\ne0$）。对 $w\notin J$，$F-w$ 在 $\partial\mathbb{H}$ 上无零点。把 $F-w$ 在 $\mathbb{H}$ 上的零点个数记为 $N(w)$（计重数）：用半径 $R$ 的上半圆盘挖出有界区域再令 $R\to\infty$，因 $F'=O(1/z^2)$ 且 $F(z)\to F(\infty)\in J$，大圆弧上的积分趋于 $0$，故辐角原理给出 $N(w)=\frac{1}{2\pi i}\int_{\partial\mathbb{H}}\frac{F'(z)}{F(z)-w}\,\mathrm{d}z=n(J,w),$ 右端是 $J$ 绕 $w$ 的绕数。$N(w)\ge0$ 是整数，而简单闭曲线满足 $n(J,w)\in\{-1,0,1\}$；若 $J$ 取负向，则 $J$ 内部每点的绕数为 $-1$，与 $N(w)\ge0$ 矛盾。故 $J$ 正向，且 $N(w)=\begin{cases}1,&w\in\operatorname{Int}(J),\\0,&w\in\operatorname{Ext}(J).\end{cases}$ 于是 $F(\mathbb{H})\subseteq\operatorname{Int}(J)=P$，且每个 $w\in P$ 恰有一个原像（$F'\ne0$ 保证零点单重）。所以 $F:\mathbb{H}\to P$ 是双射；又 $F'\ne0

> 续见 notes/thm.schwarz-christoffel.7.md
