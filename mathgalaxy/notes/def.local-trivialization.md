# 局部平凡化　`def.local-trivialization`　·　说明
根 `../`

**为什么单独给它一个节点**：它是「丛」这个词的全部技术内容。`def.fiber-bundle` / `def.vector-bundle` / `def.principal-bundle` / `def.covering-space` / `def.tangent-bundle` / `def.bundle-section` 等等一大批节点的定义里都在用它当已知量 —— 没有这一条，「局部长得像 $U\times F$」这句话就没处可查。

**定义本身是拓扑的**：同胚就够了，不需要光滑。光滑丛只是把同胚换成微分同胚再叠上去。这也解释了为什么它的层号能排在光滑流形之前 —— 它不是微分几何専有的概念，而是拓扑那一层的东西被借过来的。

**它和截面的关系**：局部平凡化把丛上的一块摊平之后，丛上的问题就都变回底空间上的「一族函数 / 一族向量」—— 截面的局部表示 $\sigma : U\to\mathbb{R}^{k}$（`def.bundle-section`）就是这么得来的。

> 续见 notes/def.local-trivialization.2.md
