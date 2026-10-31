# Hessian 矩阵　`def.hessian`　·　说明
根 `../`

⭐ $H_f(a)$ 就是二阶导数 $D^{2} f(a)$ 写成矩阵 —— 而 $D^{2}f(a)$ 本身是 $\mathbb{R}^{n}$ 上的**对称双线性型**（`def.bilinear-form`），$H_f$ 只是它在标准基下的系数。$f \in C^{2}$ 时对称性来自 Schwarz 定理（`thm.mixed-partials`）。

⭐ 对称矩阵可以**正交对角化**（`thm.spectral-theorem`），对角元是特征值；于是「$H$ 正定 / 负定 / 不定」就是判极值用的那把尺（`thm.sylvester-criterion`）。这一步是「微积分 $\times$ 线性代数」在本科阶段最漂亮的一次交汇。

⭐ 进一步：$\det H_f(a) \ne 0$ 的临界点叫**非退化临界点**，负特征值个数叫 **Morse 指数** —— 它完全决定临界点附近的局部形状（`thm.morse-lemma`）。

⚠ Hessian 依赖坐标（$H$ 不是张量，换坐标后不变的是**惯性指数**）：线性换基 $x = P u$ 时 $H \mapsto P^{\mathsf{T}} H P$，故正定性、负定性、指数都不变（Sylvester 惯性定律），而具体元素会变。
