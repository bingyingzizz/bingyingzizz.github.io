# 局部紧 Hausdorff 空间　`def.locally-compact`　·　说明
根 `../`

**等价说法**（Hausdorff 时）：每点有**紧邻域基**（即任意给定邻域 $U \ni x$ 里都能找到一个紧邻域 $K$ 使 $x \in \operatorname{int}K \subseteq K \subseteq U$）。这条更强的形式正是「商映射 $\times$ 局部紧」那条定理要用的。

**例子**：$\mathbb{R}^{n}$、任何离散空间、任何紧 Hausdorff 空间。**反例**：$\mathbb{Q}$（不是局部紧）、无穷维 Banach 空间（闭单位球不紧）。

⭐ **它在凝聚态数学里的位置**：$\mathbf{CHaus}$ 是场地，而**局部紧 Hausdorff**是「能用紧 Hausdorff 逼近」的最小一族 —— 局部紧 Hausdorff 空间都是**紧生成**的（例 1），所以都能忠实地变成凝聚态集。Pontryagin 对偶也只在局部紧 Hausdorff 阿贝尔群那一条线上成立。

⚠️ 「局部紧」这个条件**不能省**：商映射乘 id 那条定理、Tychonoff 以外的积性质、以及「紧提升条件」都要它。
