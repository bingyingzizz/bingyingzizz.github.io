# Sylvester 判据　`thm.sylvester-criterion`　·　说明
根 `../`

⭐ 这是**最便宜**的正定性判据：只算 $n$ 个行列式（实际算时用消元法顺带得到），不必求特征值。

⭐ 用途直接可见：多元微分里 $f$ 的 **Hessian 矩阵正定 $\implies$ 局部极小**（`thm.second-derivative-test`）；线性代数里「$A$ 正定 $\iff$ 存在 Cholesky 分解 $A = LL^{\mathsf{T}}$」。

⚠ 只能看**顺序**主子式（左上角那一串），不能只看「所有主子式」或随便挑几个。反过来：所有顺序主子式为正 $\implies$ 正定，但如果只是「所有主子式非负」那只是半正定。
