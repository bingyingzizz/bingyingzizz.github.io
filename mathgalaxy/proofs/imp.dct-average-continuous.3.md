# 控制收敛定理 $\implies$ 平均算子联合连续
`imp.dct-average-continuous` · 推出 · strong 边 · 根 `../`

`thm.dct` 控制收敛定理 → `lem.average-continuous` 平均算子联合连续

$|\chi_{B(x_k,r_k)}(y) - \chi_{B(x_0,r_0)}(y)|\,|f(y)| \le \chi_{B(x_0, r_0+1)}(y)\,|f(y)| \in L^1 .$

由**控制收敛定理**（本步唯一的外部定理）得第一段积分趋于 $0$；再乘上有界系数 $1/m(B(x_k,r_k)) \to 1/m(B(x_0,r_0)) > 0$，两段合起来即 $A_{r_k}f(x_k) \to A_{r_0}f(x_0)$。∎

> 这一步之外全是球与特征函数的初等估计：拆项、a.e. 收敛、找控制函数。**DCT 是唯一的外部定理**，也是把「$L^1_{loc}$ 里没有逐点信息」这个困难一次性消掉的地方。
