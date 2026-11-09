# Lie 群可定向　`prop.lie-group-orientable`　·　说明
根 `../`

**为什么处处非零**：$n$-形式空间在每点是 $1$ 维的，而左平移 $L_{g}$ 是微分同胚，$L_{g}^{\ast}$ 在顶次形式上就是乘一个非零标量。起点 $\alpha \ne 0$ $\implies$ $\omega_{g} = L_{g^{-1}}^{\ast}\alpha \ne 0$。再走 `prop.volume-form-orientation`（处处非零顶次形式 $\iff$ 可定向）即得结论。

这里用的是**左**不变形式；换成右不变形式给出另一个定向，两者相差模函数的符号。

**定向与 Haar 测度是两件事**：$|\omega|$ 给出左不变密度（Haar 测度），它不依赖定向；定向只决定「积分带不带符号」。紧群上模函数 $\Delta \equiv 1$（左右 Haar 测度差常数），非紧时可以差一个正函数。

**反过来不成立**：可定向推不出有 Lie 群结构。$\mathbb{RP}^{2}$ 是不可定向的齐性空间（$\operatorname{SO}(3)$ 的商），说明「群作用的商」既不必可定向、也未必有群结构；可定向的 $S^{2}$ 也不是 Lie 群（球面里只有 $S^{1}, S^{3}$ 能承载 Lie 群结构）。

> 续见 notes/prop.lie-group-orientable.2.md
