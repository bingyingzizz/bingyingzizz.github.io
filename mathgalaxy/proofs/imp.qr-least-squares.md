# $A = QR$ $\implies$ 最小二乘解法方程化成一个上三角方程
`imp.qr-least-squares` · 推出 · strong 边 · 根 `../`

`thm.qr-decomposition` QR 分解 → `thm.least-squares` 最小二乘

设 $A = QR$（$Q^{T}Q = I_{n}$、$R$ 上三角且对角元为正，列满秩时唯一）。由 $Q^{T}Q = I$ 得 $A^{T}A = R^{T}R$、$A^{T}b = R^{T}Q^{T}b$，于是**法方程** $A^{T}A\,x = A^{T}b$ 变成

$$R^{T}R\,x = R^{T}Q^{T}b \;\iff\; Rx = Q^{T}b,$$

（$R$ 可逆 $\implies$ $R^{T}$ 可逆），即解**一个上三角方程**，回代是 $O(n^{2})$。

⭐ 这条边说明：QR 不是「另一个算法」，它把最小二乘归约成回代 —— 而且顺带给出 $x = R^{-1}Q^{T}b$，与 $(A^{T}A)^{-1}A^{T}b$ 逐字相等。

⚠ 反过来解不出来：$R$ 可逆这一条依赖列满秩，QR 的存在性并不蕴含「最小二乘解唯一」。所以这只是单向的归约，不是等价。
