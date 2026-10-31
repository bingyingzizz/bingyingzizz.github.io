# 固态张量积的计算　`ex.solid-tensor-computations`　·　说明
根 `../`

⭐ 读法：固态张量积**同时读取两个因子的 $I$-进拓扑，再把它们合起来**。$\mathbb{Z}_p$ 自带 $p$-进补全，$\mathbb{Z}[[T]]$ 自带 $T$-进补全，合起来就是 $\mathbb{Z}_p[[T]]$。

⚠ 第一条（$\mathbb{Z}_p \otimes^{L\blacksquare} \mathbb{R} = 0$）不是「算错」：它等于说 $\mathbb{R}$ 的固态化是 $0$（`cor.solid-compact-generators` (iii)）。

📌 推导顺序：最后一条由 `prop.solid-product-tensor` 得到；往上是商掉 $U - p$、$T - \ell$、$T - p$ 得到的。
