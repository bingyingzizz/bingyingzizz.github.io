# Euler 示性数与不可定向亏格　`prop.eulerchar-nonorientable`　·　说明
根 `../`

**二、同调为什么是 $k$ 而不是 $2k$**：不可定向闭曲面的 $H_{1}$ 有挠部，$H_{1}(S;\mathbb{Z})\cong\mathbb{Z}^{k-1}\oplus\mathbb{Z}/2$，故 $\operatorname{rank}H_{1}=k-1$；又 $H_{2}(S;\mathbb{Z})=0$（不可定向紧曲面没有整体基本类）。代入 $\chi=\sum_{i}(-1)^{i}\beta_{i}$ 得 $1-(k-1)+0=2-k$，与组合计数一致。⚠ 这两条同调事实（$H_{1}$ 结构、$H_{2}=0$）本图没有节点，只在此以定理形式引用。

**标准形上的 $H_{1}$ 推导（完整）**：用 van Kampen（`thm.van-kampen`）对 $2k$ 边形的一个顶点取开覆盖，得 $\pi_{1}=\langle c_{1},\ldots,c_{k}\mid c_{1}^{2}\cdots c_{k}^{2}=1\rangle$；交换化后 $H_{1}\cong\mathbb{Z}^{k}/(2(c_{1}+\cdots+c_{k}))\cong\mathbb{Z}^{k-1}\oplus\mathbb{Z}/2$。这一步只处理标准形，桥到一般曲面仍靠分类定理。

**三、连通和公式**：$\chi(M\#N)=\chi(M)+\chi(N)-2$（证明见 `prop.eulerchar-genus` 的注）。由 $\chi(\mathbb{RP}^{2})=1$ 归纳得 $k$ 个射影平面的连通和 $\chi=2-k$。

> 续见 notes/prop.eulerchar-nonorientable.3.md
