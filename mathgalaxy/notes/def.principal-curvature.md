# 主曲率　`def.principal-curvature`　·　说明
根 `../`

**为什么是特征值**：$k_{n}$ 是 $W$ 的 Rayleigh 商，单位圆上的极值点满足 $II(v,\cdot) = k\,I(v,\cdot)$，即 $W(\mathrm{d}r(v)) = k\,\mathrm{d}r(v)$（Lagrange 乘子），极值就是特征值 —— 这正是写的「取极值的方向是 $W$ 的特征方向」。

**主方向正交**：实对称矩阵属于不同特征值的特征向量正交（谱定理）。用 Rayleigh 商加变分得到同一个结论，本包直接用谱定理。

**两个特征方程**：$\det(W-kI) = 0$ 与 $\det(h-kg) = 0$ 在正交标架下相同；在参数网 $\{r_{u}, r_{v}\}$ 下必须带上 $g = \begin{pmatrix} E & F \\ F & G \end{pmatrix}$，所以那个 $g$ 不能省。

⚠️ $k_{1}, k_{2}$ 依赖 $n$ 的选择（$n \mapsto -n$ 时全体变号），但「$k_{1} = k_{2}$」（脐点）与 $K = k_{1}k_{2}$ 与选择无关。
