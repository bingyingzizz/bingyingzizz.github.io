# 向量场　`def.vector-field`　·　说明
根 `../`

**坐标变换**：在两族局部坐标下分别展开，分量满足 $X_{y}^{i} = \sum_{j}\frac{\partial y^{i}}{\partial x^{j}}X_{x}^{j}$ —— 两侧的 $X^{i}$ 属于**不同坐标系**，必须分开写（$y = 2x$、$X = \partial_{x}$ 时 $x$ 分量是 $1$、$y$ 分量是 $2$，用一个符号就会写出 $1 = 2$）。与切向量同一条变换律（反变）。这就是「$X$ 是 $(1,0)$ 型张量场」的意思（`def.tensor-field`）。

**关于支集**：把「$X$ 在哪里不为零」的闭包记作 $\operatorname{supp} X$。单位分解的论证里要的正是「支集落在某张卡里」，所以这个记号与 `def.partition-of-unity` 的 $\operatorname{supp}$ 是同一个（`thm.smooth-partition-unity`）。

**与积分曲线**：向量场给出一阶 ODE $\dot\gamma = X(\gamma)$，其解是积分曲线；局部总有解，整体未必能延拓。本图只用局部存在性，流与单参数群那条线暂不进图。
