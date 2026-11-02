# Euler 函数　`def.euler-phi`　·　说明
根 `../`

公式分两步：先有 $\varphi(p^{e}) = p^{e} - p^{e-1}$（$1$ 到 $p^{e}$ 里被 $p$ 整除的有 $p^{e-1}$ 个）；再有乘性 $\varphi(mn) = \varphi(m)\varphi(n)$（$\gcd(m,n) = 1$ 时），由中国剩余定理把单位群拆成直积即得。



$\varphi$ 是第一个**积性函数**的例子：$f(mn) = f(m)f(n)$ 对互素的 $m, n$ 成立。数论导引第三章整章在讲这类函数（$\tau$、$\sigma$、$\mu$）。



$\varphi(n)$ 也是分圆多项式 $\Phi_{n}$ 的次数 —— 这条联系在 Galois 理论那边会再用到。
