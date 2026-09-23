# 五种收敛　`def.convergence-modes`　·　说明
根 `../`

强弱关系（都能画成箭头）：



$$\text{一致} \implies\text{ 近一致} \implies \text{a.e.}$$

$$\text{一致} \implies\text{ 近一致} \implies\text{ 依测度}$$

$$L^1 \implies\text{ 依测度}$$



⚠ 「依测度收敛」是最温和的一个：它不要求任何一处真的收敛，只要求「收敛失败的区域」越来越小。

⚠ **a.e. 收敛与依测度收敛互不包含**：$\text{a.e.} \implies$ 依测度在**有限测度**空间上成立（Egorov 的推论），反过来依测度 $\nRightarrow$ a.e.（见反例 iv）。

⚠ $L^{1}$ 收敛 $\nRightarrow$ a.e. 收敛，a.e. 收敛 + 控制函数 $\implies L^{1}$ 收敛（这就是 DCT）。
