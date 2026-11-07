# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**命题 B 是 Newman 1980 的「解析定理」。** 见 Newman, Simple analytic proof of the prime number theorem, Amer. Math. Monthly 87 (1980)；Zagier, Newman short proof of the prime number theorem, Amer. Math. Monthly 104 (1997) 给出更简洁的围道写法。证明是一条围道积分：把 $g$ 与截断 $g_T(z)=\int_0^T f(t)e^{-zt}\,\mathrm{d}t$ 的差在复平面上作围道积分，用 $|g(z)-g_T(z)|\le C e^{-T\operatorname{Re}z}/\operatorname{Re}z$（$\operatorname{Re}z>0$）控制右半平面、再控制大圆弧后令 $R,T\to\infty$；具体围道与估计见原文，本图不复述。**不需要 Mellin 反演，也不需要 Phragmén–Lindelöf**（这里修正旧稿的路线描述）。

> 续见 notes/thm.prime-number-theorem.7.md
