# 挠积的对称性　`prop.tor-symmetry`　·　说明
根 `../`

⚠️ **「交换」不能省**：非交换时 $M\otimes_{R} N$ 只在 $M$ 右、$N$ 左时有定义，$N\otimes_{R} M$ 一般**根本没有定义**。错的方向是「$\operatorname{Tor}_{n}^{R}(M,N) \cong \operatorname{Tor}_{n}^{R^{\mathrm{op}}}(N,M)$」这种带对偶环的写法。

⭐ 这条的实际用处：**计算时可以任选一边做消解**。例如算 $\operatorname{Tor}_{n}^{R}(R/I, N)$ 时，通常用 $R/I$ 的两项消解（$0 \to I \to R \to R/I \to 0$）更省事 —— 有了对称性就知道这等价于对 $N$ 取消解。
