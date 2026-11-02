# Bessel 与 Parseval　`thm.bessel-parseval`　·　说明
根 `../`

Bessel 的证明：对有限 $J$，$0 \le \|x - \sum_{j \in J}\langle x, e_j\rangle e_j\|^2 = \|x\|^2 - \sum_{j \in J}|\langle x,e_j\rangle|^2$，再对 $J$ 取上确界。

⭐ 读法：Bessel 说「坐标投影不增加长度」（$x$ 在子空间上的影子不会比 $x$ 长）；Parseval 说「没有漏掉任何方向」。所以**完备性 $\iff$ 等号成立**——这就是把「基」这件几何事实变成一个**数值等式**。

⚠️ 不可数 $I$ 时 $\sum_{i \in I}$ 要按「非零项至多可数」理解（见 $\ell^2(I)$ 的注），否则这个和没有定义。
