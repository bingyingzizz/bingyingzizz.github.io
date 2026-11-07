# 代数基本定理 $\Longrightarrow$ 复方阵可三角化
`imp.fa-schur` · 推出 · strong 边 · 根 `../`

`thm.fundamental-algebra` 代数基本定理 → `thm.schur-triangularization` Schur 三角化

**① FTA 给特征值**。特征多项式 $\chi_{A}(t) = \det(tI - A)$ 是 $n$ 次复系数多项式，由**代数基本定理**它有根 $\lambda$；于是 $A - \lambda I$ 奇异，存在单位向量 $x$ 使 $Ax = \lambda x$。

**② 归纳**。在基 $(x, u_{2}, \ldots, u_{n})$ 下 $A$ 的矩阵是分块上三角：左上角是 $\lambda$，第一列除它之外全为 $0$（这正是 $Ax = \lambda x$ 的直接结果），右下角是 $(n-1)$ 阶块 $A_{1}$。对 $(n-1)$ 阶的 $A_{1}$ 用归纳假设 —— 每一步同样要 FTA 保证下一个特征值存在。于是 $A$ 相似于上三角。

> 续见 proofs/imp.fa-schur.2.md
