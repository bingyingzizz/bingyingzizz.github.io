# 由预测度诱导外测度　`prop.outer-measure-induced`　·　说明
根 `../`

这个公式就是「用已知面积的砖块去盖住 $A$，取最省的盖法」—— Lebesgue 外测度正是它的特例（$\mathcal{E}$ 取开区间，$\rho$ 取长度）。

为什么要求 $X \in \mathcal{E}$：保证 $A \subseteq X$ 总有覆盖，inf 不是对空集取。

⚠ 这一步只用到 $\rho (\emptyset ) = 0$，**没用到可加性** —— 所以 $\mu^{*}$ 一般并不还原成 $\rho$。要还原，就得靠 Carathéodory。
