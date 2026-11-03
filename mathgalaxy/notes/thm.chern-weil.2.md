# 陈–Weil 同态　`thm.chern-weil`　·　说明
根 `../`

⚠️ **“不变多项式”这个假设不能去掉**：若 $P$ 只在共轭下变成别的多项式，$P(F)$ 就不是标架无关的形式，连“形式”都定义不好（$F$ 的矩阵元依赖标架）。所以整台装置的地基是 `def.invariant-polynomial` 的那条不变性。

⚠️ **$H^{2m}(B;\mathbb{C})$ 里的类可能为 $0$**（例如 $B$ 是可缩的）—— 这不是定理的失败，而是「可缩空间上没有非平凡的示性类」这件事实。这也解释了为什么示性类能用来**区分拓扑**：它量的是 $B$ 的上同调有多不平凡。

⭐ **实向量的情形**：把 $\mathfrak{gl}(k,\mathbb{C})$ 换成 $\mathfrak{o}(k)$（反对称矩阵）时，$\operatorname{Pfaffian}$ 给出 Euler 类，$\operatorname{tr}(F^{2j})$ 给出 Pontryagin 类；机制与复情形完全一样，只是不变多项式的代数换成 $\mathfrak{o}(k)$ 的那套。
