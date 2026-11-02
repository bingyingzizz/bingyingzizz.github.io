# 最小二乘　`thm.least-squares`　·　说明
根 `../`

**法方程就是「残差与列空间正交」**：$(b - Ax) \perp \operatorname{col}(A)$ $\iff$ $A^{T}(b - Ax) = 0$ $\iff$ $A^{T}Ax = A^{T}b$。所以它不是一个技巧，而是投影的定义（`def.orthogonal-projection`）。

⭐ **它是正交投影的具体算法**：把「往子空间投影」写成矩阵，就是 $P = A(A^{T}A)^{-1}A^{T}$。这个 $P$ 幂等且对称（`def.idempotent` 的注里说的「正交幂等」），正是那个投影算子。

⚠️ **不要真的去求 $A^{T}A$ 的逆**（数学上对、数值上有害：条件数被平方）。实际用 QR 或 SVD：$x = R^{-1}Q^{T}b$（`thm.qr-decomposition` 的注）。本图只记数学结论，不展开算法。

⚠️ **列不满秩时**最小二乘解**不唯一**（有无穷多，都给出同样的残差），这时要用**伪逆**取「范数最小」的那一个（`def.pseudoinverse`）。
