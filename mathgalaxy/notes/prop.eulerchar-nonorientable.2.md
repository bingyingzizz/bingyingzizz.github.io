# Euler 示性数与不可定向亏格　`prop.eulerchar-nonorientable`　·　说明
根 `../`

**三、归纳。** 记 $S_{k}$ 为 $k$ 个 $\mathbb{RP}^{2}$ 的连通和。$\chi(S_{1})=1$；由第二步，$\chi(S_{k})=\chi(S_{k-1})+\chi(\mathbb{RP}^{2})-2=\chi(S_{k-1})-1$。所以 $\chi(S_{k})=1-(k-1)=2-k$。∎

**四、与剖分无关。** `thm.euler-characteristic` 说对任何有限单纯复形 $\chi=\sum_{p}(-1)^{p}\beta_{p}$；右端只依赖同调型，所以上面用特定剖分算出的数就是 $\chi(S)$，不是剖分的偶然。

**五、支撑性附注：$H_{1}$ 为什么是 $k-1$ 而不是 $2k$（完整，但不用于上面的计算）。** 在标准形 $2k$ 边形的一个顶点取开覆盖，用 van Kampen（`thm.van-kampen`）得 $\pi_{1}(S_{k})=\langle c_{1},\ldots,c_{k}\mid c_{1}^{2}\cdots c_{k}^{2}=1\rangle$；交换化后 $H_{1}(S_{k};\mathbb{Z})\cong\mathbb{Z}^{k}/(2(c_{1}+\cdots+c_{k}))\cong\mathbb{Z}^{k-1}\oplus\mathbb{Z}/2$。它也可代入 $\chi=\sum_{i}(-1)^{i}\beta_{i}$ 复核上面的 $2-k$，但那个复核需要 $H_{2}=0$ 与「一般曲面的 $\beta_{i}$」两条本图没有独立节点的事实，所以这里只当旁证。

> 续见 notes/prop.eulerchar-nonorientable.3.md
