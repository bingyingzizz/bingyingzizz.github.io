# 连续函数的运算　`prop.continuous-arithmetic`　·　说明
根 `../`

⭐ 前五条由**极限的四则运算**（`prop.limit-arithmetic`）直接翻译过来：连续就是「极限等于函数值」，所以极限能做的运算连续也能做。

⚠ 复合那条**不能**照搬：$\lim_{x \to x_0} f(x) = f(x_0)$ 与 $\lim_{y \to y_0} g(y) = g(y_0)$ 要拼成 $\lim_{x \to x_0} g(f(x)) = g(f(x_0))$，中间要过一道 $\varepsilon$-$\delta$ 的传递。

⭐ 推论：多项式处处连续；有理函数在分母不为零处连续；由 `thm.elementary-derivatives` 与幂级数，$\exp$、$\sin$、$\cos$ 也连续 —— 于是「初等函数在其定义域内连续」这句话是**证出来的**，不是约定。
