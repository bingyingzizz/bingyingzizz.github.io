# QR 分解　`thm.qr-decomposition`　·　续页（第 2 页）
[在星图里打开](../#n=thm.qr-decomposition)　·　第 1 页 [nodes/thm.qr-decomposition.md](./thm.qr-decomposition.md)

## 陈述（续）
设 $A \in M_{m\times n}(\mathbb{R})$ 的列线性无关（$m \ge n$）。则存在**唯一**的分解

$$A = QR ,$$
其中 $Q \in M_{m\times n}$ 的列**标准正交**（$Q^{T}Q = I_{n}$），$R \in M_{n}(\mathbb{R})$ 是**上三角**且对角元全正。

**复情形**：$A = QR$，$Q^{*}Q = I$，$R$ 上三角（对角元取正实数）。
**方阵情形**：$A$ 可逆时 $Q$ 是正交（酉）矩阵 —— 这就是 $A$ 的「正交 $\times$ 上三角」分解，与 LU 的「下三角 $\times$ 上三角」互为对照。

> 续见 [nodes/thm.qr-decomposition.3.md](./thm.qr-decomposition.3.md)
