# Euler 示性数与不可定向亏格　`prop.eulerchar-nonorientable`　·　说明
根 `../`

**五、支撑性附注：$H_{1}$ 为什么是 $k-1$ 而不是 $2k$（完整，但不用于上面的计算）。** 在标准形 $2k$ 边形的一个顶点取开覆盖，用 van Kampen（`thm.van-kampen`）得 $\pi_{1}(S_{k})=\langle c_{1},\ldots,c_{k}\mid c_{1}^{2}\cdots c_{k}^{2}=1\rangle$；交换化后 $H_{1}(S_{k};\mathbb{Z})\cong\mathbb{Z}^{k}/(2(c_{1}+\cdots+c_{k}))\cong\mathbb{Z}^{k-1}\oplus\mathbb{Z}/2$。它也可代入 $\chi=\sum_{i}(-1)^{i}\beta_{i}$ 复核上面的 $2-k$，但那个复核需要 $H_{2}=0$ 与「一般曲面的 $\beta_{i}$」两条本图没有独立节点的事实，所以这里只当旁证。

⚠ **「亏格」这个词在不可定向侧不能照搬**：`def.genus` 只对可定向曲面定义（除以 $2$ 依赖 $H_{1}$ 自由秩为偶数）。不可定向侧的标准量是 $k$（不可定向亏格），关系是 $\chi=2-k$。

⭐ 读数：$\mathbb{RP}^{2}$ 的 $k=1$、$\chi=1$；克莱因瓶的 $k=2$、$\chi=0$；三个射影平面的连通和 $k=3$、$\chi=-1$。
