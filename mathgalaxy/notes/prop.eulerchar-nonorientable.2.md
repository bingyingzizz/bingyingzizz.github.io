# Euler 示性数与不可定向亏格　`prop.eulerchar-nonorientable`　·　说明
根 `../`

**二、连通和公式（完整）。** 设 $M,N$ 是已三角剖分的闭曲面。各取一个 $2$-单形，挖去它的内部（剩下一个带三角形边界的曲面）；把两个边界三角形按顶点对应粘合，得到 $M\#N$ 的三角剖分。计数：$V=V_{M}+V_{N}-3$、$E=E_{M}+E_{N}-3$、$F=(F_{M}-1)+(F_{N}-1)=F_{M}+F_{N}-2$，故 $\chi(M\#N)=\chi(M)+\chi(N)-2$。

**三、归纳（完整）。** 记 $S_{k}$ 为 $k$ 个 $\mathbb{RP}^{2}$ 的连通和。$\chi(S_{1})=1$；由第二步，$\chi(S_{k})=\chi(S_{k-1})+\chi(\mathbb{RP}^{2})-2=\chi(S_{k-1})-1$。所以 $\chi(S_{k})=1-(k-1)=2-k$。∎

**四、与剖分无关。** `thm.euler-characteristic` 说对任何有限单纯复形 $\chi=\sum_{p}(-1)^{p}\beta_{p}$；右端只依赖同调型，所以上面用特定剖分算出的数就是 $\chi(S)$，不是剖分的偶然。

> 续见 notes/prop.eulerchar-nonorientable.3.md
