# 迹　`def.trace`　·　说明
根 `../`

⭐ 迹是**最便宜的不变量**：$O(n)$ 就算出来，却已经能区分不少矩阵（比行列式便宜得多）。

⭐ 它的深层含义：$\operatorname{tr}$ 是矩阵代数的**唯一的（差常数倍）中心线性泛函**，也是「$K^{n}$-代数到 $K$ 的迹型」—— 在 Galois 理论、特征类里都会再遇到。

⚠ 「相似不变」比「循环不变」弱：$\operatorname{tr}(P^{-1}AP) = \operatorname{tr}(A P^{-1} P) = \operatorname{tr}A$ 只是循环不变的特例。反之迹相同不蕴含相似（$\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ 与零矩阵迹都是 $0$ 而不相似）。
