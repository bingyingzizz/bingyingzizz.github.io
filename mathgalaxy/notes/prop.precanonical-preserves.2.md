# 余积与商在层范畴中不变　`prop.precanonical-preserves`　·　说明
根 `../`

**各方向用到的假设**（保余积与保商来自层条件的泛性质）：
- 有限余积的层条件 $F(\coprod_iX_i)\cong\prod_iF(X_i)$ $\implies$ Yoneda 嵌入保该余积：对任意层应用 Yoneda 引理，就是余积泛性质。
- 反向若可表示层的余积确为 $h_{\coprod_iX_i}$，对任意层取 Hom 即恢复乘积公式；这一步是免费的范畴论形式转换。
- 商的层条件 $F(X/R)\cong\operatorname{Eq}(F(X)\rightrightarrows F(R))$ $\iff$ $h_{X/R}$ 是相应余等化子，同样由 Yoneda 与泛性质转换；有效下降来自预拓扑斯和预标准拓扑。
- 拓扑假设不可省：有限集合范畴配平凡拓扑时所有预层都是层，而常值两元素预层满足 $F(\{1,2\})$ 只有两元素，不能等于 $F(\{1\})\times F(\{2\})$ 的四元素。有限余积的结论也不自动涵盖无限余积。
