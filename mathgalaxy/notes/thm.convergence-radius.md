# 收敛半径　`thm.convergence-radius`　·　说明
根 `../`

⭐ $R$ 叫**收敛半径**，$(x_0 - R, x_0 + R)$ 叫收敛区间。证明就是对系数用**根值判别法**：$\limsup \sqrt[n]{|a_n (x - x_0)^{n}|} = |x - x_0| \cdot \limsup \sqrt[n]{|a_n|}$。

⚠ 这里用的必须是 $\limsup$ 而不是 $\lim$：$\sqrt[n]{|a_n|}$ 未必收敛。

⚠ $|x - x_0| = R$ 处三种情形都可能出现（$\sum x^{n}$ 两端都发散、$\sum x^{n}/n$ 一端收敛一端发散、$\sum x^{n}/n^{2}$ 两端都收敛）。
