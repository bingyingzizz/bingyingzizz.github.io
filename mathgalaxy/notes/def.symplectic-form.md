# 辛形式　`def.symplectic-form`　·　说明
根 `../`

⚠️ **交错 $\implies$ 每个向量都迷向**：$\omega(v,v) = 0$ 恒成立，所以辛空间里没有「长度」可言，只有「配对」。这正是它与内积的根本分歧 —— 内积空间里 $\langle v,v\rangle > 0$，辛空间里永远是 $0$。

**为什么交错 = 反对称**：展开 $\omega(v+w, v+w) = 0$ 得 $\omega(v,w) + \omega(w,v) = 0$。$\operatorname{char} K \ne 2$ 时两者等价；特征 $2$ 时交错更强（反对称还允许 $\omega(v,v) \ne 0$），本图按 $\operatorname{char} K \ne 2$ 口径写（与 `thm.witt-cancellation` 一致）。

⭐ **它是「有向面积」的代数化**：在 $\mathbb{R}^{2}$ 上 $\omega(u, w) = u_{1}w_{2} - u_{2}w_{1}$ 就是平行四边形面积（带符号）。推广到 $2n$ 维就是各坐标平面上的面积之和。所以辛形式的唯一作用就是**测量二维投影的面积**。

⚠️ 辛形式**一定存在**于偶数维空间（`thm.symplectic-normal-form`），奇数维上只有退化的交错型 —— 这与内积（任意维都有）又一次分道扬镳。
