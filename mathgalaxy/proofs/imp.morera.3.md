# 连续 + 沿闭三角形积分为零 $\implies$ 全纯
`imp.morera` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 + `def.holomorphic` 全纯函数 → `thm.morera` Morera 定理

**第三步：$f$ 全纯。** $F$ 全纯 $\implies$ $F$ 无穷次可微（Taylor 展开）$\implies$ $F' = f$ 也全纯，且 $f$ 在该点有 Taylor 展开。圆盘任取，故 $f$ 在 $\Omega$ 上全纯。$\blacksquare$

> 连续性只用在「差商极限」那一步 —— 这正是 Morera 比 Cauchy 定理弱的地方：它假设了结论要用的东西（连续），却不需要预先知道可微。
