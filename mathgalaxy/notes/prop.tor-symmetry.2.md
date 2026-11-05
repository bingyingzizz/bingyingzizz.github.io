# 挠积的对称性　`prop.tor-symmetry`　·　说明
根 `../`

⚠️ **「交换」不能省**：非交换时 $M\otimes_{R} N$ 只在 $M$ 右、$N$ 左时有定义，$N\otimes_{R} M$ 一般**根本没有定义**。

**换序必须同时换到反环**：$\operatorname{Tor}_{n}^{R}(M,N) \cong \operatorname{Tor}_{n}^{R^{\mathrm{op}}}(N,M)$（把右 $R$-模的消解看成左 $R^{\mathrm{op}}$-模的消解，逐项交换即得）—— 这条是**对的**；错的是**不带 $R^{\mathrm{op}}$** 的写法。

⭐ 这条的实际用处：**计算时可以任选一边做消解**。例如算 $\operatorname{Tor}_{n}^{R}(R/I, N)$ 时，通常用 $R/I$ 的两项消解（$0 \to I \to R \to R/I \to 0$）更省事 —— 但这**要求 $I$ 投射（或至少平坦）**，否则这两项复形算不对高次 Tor：$R = k[\varepsilon]/\varepsilon^{2}$、$I = (\varepsilon)$、$N = k$ 时 $\operatorname{Tor}_{2}(k,k) = k$ 会被算成 $0$ —— 有了对称性就知道这等价于对 $N$ 取消解。
