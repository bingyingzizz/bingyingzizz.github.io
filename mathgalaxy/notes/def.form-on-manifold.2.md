# 微分形式　`def.form-on-manifold`　·　说明
根 `../`

⚠️ $\Omega^{k}(M)$ 是 $C^{\infty}(M)$-**模**：可以逐点乘光滑函数、逐点相加。楔积、内乘、拉回都是模同态；只有 $\mathrm{d}$ 例外 —— 它只是 $\mathbb{R}$-线性的（$\mathrm{d}(f\omega) = \mathrm{d}f\wedge\omega + f\,\mathrm{d}\omega$）。这个不对称正是「$\mathrm{d}$ 不是张量运算」的确切含义，也是它为什么只能在流形上靠图卡良定性才能定义（`prop.exterior-derivative-manifold`）。

⚠️ 别把「$k$-形式」读成「$k$ 个函数排成一排」：在 $n$ 维流形上逐点看，$\Omega^{k}$ 的维数是 $\binom{n}{k}$ 而不是 $n^{k}$ —— 交错条件砍掉了绝大多数自由度。$n = 3$ 时：$\Omega^{0}$ 维数 $1$、$\Omega^{1}$ 与 $\Omega^{2}$ 都是 $3$、$\Omega^{3}$ 是 $1$，这正是经典向量分析里「梯度 / 旋度 / 散度各自落在不同的 $\Omega^{k}$」的来源。
