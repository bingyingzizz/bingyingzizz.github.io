# 广义特征向量　`def.generalized-eigenvector`　·　说明
根 `../`

**为什么这能把维数补上**：$T - \lambda I$ 在 $V_{\lambda}$ 上为零，但在 $G_{\lambda}$ 上是**幂零**的（`def.nilpotent`）。

幂零算子的结构非常简单（一串链），所以把 $T$ 限制在 $G_{\lambda}$ 上就是「$\lambda I$ + 一个幂零算子」—— 这正是 Jordan 块。

**阶的含义**：$k = 1$ 就是普通特征向量；$k = 2$ 意味着 $T(v) = \lambda v + u$（$u$ 是特征向量）—— 这就是 Jordan 链的第二项。所以「广义特征向量」= 「Jordan 链上的点」。

⚠️ 广义特征子空间**不是** $T$ 的特征子空间，但它是 $T$-不变的；而且 $T$ 在其上不可对角化（除非它就等于 $V_{\lambda}$）。

⚠️ 只有**特征值**才有广义特征向量（$\lambda$ 必须满足 $\det(T - \lambda I) = 0$），否则 $T - \lambda I$ 可逆、幂次永不为零。
