# Hermite 矩阵与对称矩阵　`def.hermitian-matrix`　·　说明
根 `../`

**为什么特征值是实的**：取特征向量 $x \ne 0$ 使 $Ax = \lambda x$，则 $\lambda\langle x, x\rangle = \langle Ax, x\rangle = \langle x, Ax\rangle = \overline{\lambda}\langle x, x\rangle$ —— 第二步用的就是自伴。于是 $\lambda = \overline{\lambda}$。

**为什么不同特征值的特征向量正交**：若 $Ax = \lambda x$、$Ay = \mu y$，则 $\lambda\langle x,y\rangle = \langle Ax,y\rangle = \langle x,Ay\rangle = \mu\langle x,y\rangle$，而 $\lambda \ne \mu$ $\implies$ $\langle x,y\rangle = 0$。这两行是整章的核心计算，谱定理全靠它起头。

**它和二次型的关系**：对称矩阵与二次型一一对应（$q(x) = x^{T}Ax$，`def.quadratic-form`）；Hermite 矩阵与 Hermite 型一一对应。「正定」就是这条对应下「$q > 0$」（`def.positive-definite-matrix`）。

⚠️ 别把「Hermite」与「对称」当两件无关的事：实对称 $\subset$ Hermite。而**复对称**（$A^{T} = A$ 而 $A^{*} \ne A$）既不是 Hermite 也没有实特征值 —— 复数域上要用 $A^{*}$，不是 $A^{T}$。
