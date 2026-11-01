# Courant–Fischer 极小极大原理　`thm.courant-fischer`　·　说明
根 `../`

**证明骨架（一侧）**：取 $S_{0} = \operatorname{span}(u_{1},\ldots,u_{k})$（前 $k$ 个特征向量），在它上面 $\min R_A = \lambda_k$ 取到于 $u_k$，于是「$\max$ 至少是 $\lambda_k$」。另一侧：任取 $\dim S = k$，它与 $\operatorname{span}(u_k, \ldots, u_n)$ 的维数和 $> n$，必有交，取交里的单位向量即得 $\min_{S} R_A \le \lambda_k$。两个不等式合起来就是等号。

⭐ **它为什么重要**：把「特征值是方程的根」换成「特征值是某个优化问题的值」，于是特征值有了**连续性**（子空间族是紧的）与**单调性**（Weyl）。扰动理论、数值特征值算法、图谱理论全都建立在这条上。

**与 SVD 的连接**：对 $A^{*}A$ 用这条，就得到奇异值的变分刻画 $\sigma_k = \max_{\dim S=k}\min_{x\in S}\lVert Ax\rVert/\lVert x\rVert$ —— 这是「低秩逼近最优」的严格依据（Eckart–Young）。

> 续见 notes/thm.courant-fischer.2.md
