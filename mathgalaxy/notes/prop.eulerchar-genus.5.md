# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

**四、引理 D（完整）：$H_{2}(K';\mathbb{Z})\cong\mathbb{Z}$。** 设 $K'$ 是闭连通曲面的有限三角剖分，且 $2$-单形有一致定向。令 $z=\sum_{\sigma}\sigma$（每个 $\sigma$ 带上述定向），则 $\partial z=0$：每条内边恰好属于两个三角形，两者诱导的边定向相反，系数 $\pm1$ 相消；$S$ 闭，没有边界边，故无其它项。所以 $z$ 是 $2$-循环。反过来，设 $w=\sum n_{\sigma}\sigma$ 是任意 $2$-循环。对每条内边 $e$（两侧为 $\sigma,\tau$），$\partial w$ 中 $e$ 的系数是 $\pm n_{\sigma}\pm n_{\tau}$；由一致定向两个符号相反，故 $n_{\sigma}=n_{\tau}$。对偶图连通：$S$ 连通 $\implies$ 三角形的「共顶点」图连通；而曲面每个顶点的链环是圆 $\implies$ 绕同一顶点的三角形经共边相邻连成环。两步合起来 $\implies$「共边」对偶图连通。于是所有 $n_{\sigma}$ 相等，$w\in\mathbb{Z}\cdot z$。又 $K'$ 是 $2$ 维复形，$C_{3}=0$，故 $H_{2}(K')=\ker\partial_{2}=\mathbb{Z}\cdot z\cong\mathbb{Z}$。∎

> 续见 notes/prop.eulerchar-genus.6.md
