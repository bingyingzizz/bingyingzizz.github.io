# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

⛔ **这条只有陈述与骨架，证明不在本图**：所有已知证明都要复分析或等价的重型工具（Riemann 的 $\zeta$ 函数、或 Selberg–Erdős 的初等证明 —— 后者虽叫「初等」，但论证极长）。



主流路线（Riemann 1859）的骨架：



1. $\zeta(s) = \sum n^{-s}$ 在 $\operatorname{Re}\,s > 1$ 全纯，经解析延拓成为亚纯函数，唯一极点在 $s = 1$（留数 $1$）；

2. $\zeta$ 在直线 $\operatorname{Re}\,s = 1$ 上无零点 —— 这一步就是素数定理的全部难点；

3. 由 Perron 公式 / 显式公式把 $\psi(x)$ 写成 $x - \sum_{\rho} x^{\rho}/\rho + \cdots$，零点 $\rho$ 的位置决定误差项；

4. 由 ② 得 $\psi(x) \sim x$，再由 $\psi \sim \theta \sim \pi\log$ 的等价性得 $\pi(x) \sim x/\log x$。



⭐ Riemann 假设（$\operatorname{Re}\,\rho = 1/2$）就是把 ③ 的误差压到 $O(\sqrt{x}\log x)$ 的命题，至今未解。
