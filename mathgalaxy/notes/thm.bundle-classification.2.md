# 丛的分类　`thm.bundle-classification`　·　说明
根 `../`

**为什么是 $H^{1}$ 而不是 $H^{0}$**：$H^{0}$ 记的是「什么都不用粘」的数据（整体平凡化），$H^{1}$ 记的是「粘起来差多少」—— 前者数整体对象，后者数障碍。这与层上同调的分工完全一致。

**换结构群就是换系数**：$\operatorname{GL}(k,\mathbb{R})$ 换成 $\operatorname{O}(k)$ 得「配了纤维度量的丛」（`prop.bundle-metric` 保证总能配上，所以这一步不丢信息）；换成 $\operatorname{GL}(k,\mathbb{C})$ 得复丛；换成 $\operatorname{GL}(k,\mathbb{Z})$ 得平坦丛。所以分类定理的真正形状是「对每个结构群 $G$，秩 $k$ 的 $G$-丛由 $\check{H}^{1}(M;G)$ 分类」。

**例子（只列结论）**：$S^{1}$ 上的实线丛有两个同构类（平凡丛与 Möbius 带），对应 $\check{H}^{1}(S^{1};\mathbb{R}^{\times}) \cong \mathbb{Z}/2$；$S^{2}$ 上的复线丛由 $\mathbb{Z}$ 分类（Hopf 丛是生成元）。这两个数都不「局部」看得出来 —— 正是上同调该管的事。

> 续见 notes/thm.bundle-classification.3.md
