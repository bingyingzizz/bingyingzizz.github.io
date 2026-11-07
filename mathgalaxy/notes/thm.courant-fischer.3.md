# Courant–Fischer 极小极大原理　`thm.courant-fischer`　·　说明
根 `../`

**Weyl 单调性**：$A \le B$ 指 $B - A$ 半正定，故对一切 $x \ne 0$ 有 $R_{A}(x) \le R_{B}(x)$。于是对每个 $k$，$\min_{\dim S = k} R_{A} \le \min_{\dim S = k} R_{B}$（逐点比较），再取 $\max$ 得 $\lambda_{k}(A) \le \lambda_{k}(B)$ ✓。∎

⭐ **它为什么重要**：把「特征值是方程的根」换成「特征值是某个优化问题的值」，于是特征值有了**连续性**（子空间族是紧的）与**单调性**（Weyl）。扰动理论、数值特征值算法、图谱理论全都建立在这条上。

**与 SVD 的连接**：对 $A^{*}A$ 用这条，就得到奇异值的变分刻画 $\sigma_k = \max_{\dim S=k}\min_{x\in S}\lVert Ax\rVert/\lVert x\rVert$ —— 这是「低秩逼近最优」的严格依据（Eckart–Young）。

⚠️ 前提是 **Hermite**（或实对称）。一般矩阵没有实谱，Rayleigh 商也不是实的，这套不等式不成立；那种情形要用奇异值代替特征值。
