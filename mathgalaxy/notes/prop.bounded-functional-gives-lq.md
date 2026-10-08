# 有界 ⟹ g ∈ L^q　`prop.bounded-functional-gives-lq`　·　说明
根 `../`

这条是下一个大定理（$(L^p)^* \cong L^q$）的技术准备：它说「泛函有界」这件事本身就已经把 $g$ 逼进了 $L^q$。

证明分三步（见右侧箭头）：Step 1 先证「$f$ 有限支可测」时也有 $|\int fg| \le M_g(g)$；Step 2 处理 $q < \infty$；Step 3 处理 $q = \infty$。

⚠ 两个前提条件（$\sigma$有限 / 半有限）在 Step 2、Step 3 里各用一次，**不能省**。
