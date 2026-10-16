# Riemann ⟹ Lebesgue　`prop.riemann-implies-lebesgue`　·　说明
根 `../`

⭐ 这条命题把「两个积分」焊接起来：**Lebesgue 积分是 Riemann 积分的真扩张** —— 能算的照旧能算（值相同），不能算的多了一批。

⭐ 证明走 `thm.riemann-lebesgue-criterion`：Riemann 可积 $\implies$ 不连续点集零测 $\implies$ $f$ 与某个可测函数 a.e. 相等；再用上、下简单函数逼近夹出积分相等。

⚠ 注意**值相同**这一半：不是「差不多」，是逐字相等。所以 $\int_0^1 x\,dx = \frac{1}{2}$ 在两种语言里都是同一句话。
