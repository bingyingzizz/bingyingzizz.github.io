# Rayleigh 商　`def.rayleigh-quotient`　·　说明
根 `../`

**为什么它是实的**：$\overline{x^{*}Ax} = x^{*}A^{*}x = x^{*}Ax$（用 Hermite），而分母是实数。

⭐ **它给出「最速下降/幂迭代」的理论依据**：沿 $R_A$ 的梯度方向走就是在逼近最大特征向量。数值上 $x_{k+1} \propto Ax_k$ 收敛到主特征向量的速率由 $\lvert\lambda_2/\lambda_1\rvert$ 决定 —— 这就是幂法的收敛率。

**它的推广**是要证明 `thm.courant-fischer`：只把 $R_A$ 限制在 $k$ 维子空间上取极值，就得到第 $k$ 个特征值。所以 Rayleigh 商是「谱的变分刻画」的入口，不是孤立的记号。

⚠️ $A$ 必须 Hermite（或实对称）才保证 $R_A$ 是实的、有极值意义；一般矩阵的 $x^{*}Ax$ 是复的，Rayleigh 商退化成复值函数，标准理论不适用。
