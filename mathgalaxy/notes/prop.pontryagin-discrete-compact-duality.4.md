# 离散 与 紧 Hausdorff　`prop.pontryagin-discrete-compact-duality`　·　说明
根 `../`

**各方向用到的假设**（正向的紧性证明与反向的双对偶定理分工不同）：
- $M$ 离散 $\implies$ $\widehat M$ 紧 Hausdorff：特征标是 $\mathbb T^M$ 的闭子群，且紧开拓扑等于逐点拓扑；用 Tychonoff 紧性定理，通常在选择公理框架下，不是定义展开。
- $M$ 紧 $\implies$ $\widehat M$ 离散：取单位元附近不含非平凡子群的小圆弧，要求特征标在整个紧群上取值于该弧，就只剩零特征标；用紧开拓扑定义及圆群的无小子群性质。
- $\widehat M$ 紧 $\implies$ $M$ 离散及 $\widehat M$ 离散 $\implies$ $M$ 紧：分别应用前两条并用 Pontryagin 双对偶同构；局部紧、Hausdorff、阿贝尔是所用对偶定理的假设。
- 原注取不含单位元的上半圆不能构成零特征标的邻域，应取含单位元的小圆弧；离散与紧的互换本身都不是定义同义反复。非阿贝尔群的圆值特征标只看阿贝尔化，不能恢复原群。
