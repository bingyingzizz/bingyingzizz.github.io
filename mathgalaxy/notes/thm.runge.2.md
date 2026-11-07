# Runge 逼近定理　`thm.runge`　·　说明
根 `../`

**引理 A（Cauchy 表示）**：设 $K$ 紧、$V$ 是 $K$ 的开邻域、$f$ 在 $V$ 上全纯。则存在有限个闭正方形之并 $S$ 与它的正向边界 $\Gamma = \partial S$，使 $K \subset \operatorname{int} S,\qquad S \subset V,\qquad f(z) = \frac{1}{2\pi i}\int_{\Gamma}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta\quad(z\in K).$ 证明：$d := \operatorname{dist}(K,\mathbb{C}\setminus V) > 0$。取边长为 $h$ 的方格网，$h\sqrt{2} < d$；令 $S$ 为所有与 $K$ 相交的闭方格之并。则 $K\subset\operatorname{int} S$，且 $S$ 的每点距 $K$ 不超过 $h\sqrt{2} < d$，故 $S\subset V$。把每个方格的边界逆时针定向后相加，公共边上的积分相消，得 $\Gamma = \partial S$。对 $z\in K\subset\operatorname{int} S$，函数 $h(\zeta) := (f(\zeta)-f(z))/(\zeta - z)$（在 $\zeta = z$ 处补充定义为 $f'(z)$）在 $S$ 的一个邻域上全纯，故在每个方格上用 Cauchy–Goursat（`thm.cauchy-goursat`）有 $\int_{\partial Q} h = 0$，相加得 $\int_{\Gamma} h = 0$。于是 $\int_{\Gamma}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = f(z)\int_{\Gamma}

> 续见 notes/thm.runge.3.md
